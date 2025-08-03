# copy_secrets.py
# A script to automate the migration of secrets from one Firebase/GCP project to others.

import subprocess
import json
import sys

# --- CONFIGURATION (EDIT THESE VALUES) ---
# Replace with the EXACT Project ID of your ORIGINAL Firebase project where secrets are.
SOURCE_PROJECT_ID = "claimso" # <<< CRITICAL: REPLACE THIS!

# These are your new regional project IDs. Keep them as they are.
DESTINATION_PROJECT_IDS = [
    "claimso-us",
    "claimso-europe",
    "claimso-apac"
]

# List ALL secret names you want to copy. Add any others your functions might need.
SECRETS_TO_COPY = [
    "STRIPE_SECRET_KEY",
    "EXTEND_API_KEY_US",
    "ONEASSIST_API_KEY_IN",
    "SERVIFY_API_KEY_IN",
    "RAZORPAY_KEY_SECRET",
    "SENDGRID_API_KEY" # Add SendGrid if you use it for emails
    # Add any other secrets your backend functions are configured to use!
]
# --- END CONFIGURATION ---


def run_gcloud_command(command, input_data=None, check_result=True):
    """Helper to run gcloud commands and capture output/errors."""
    try:
        process = subprocess.run(
            command,
            capture_output=True,
            text=True,
            input=input_data,
            check=check_result, # Raise an exception for non-zero exit codes if True
            shell=True # Use shell=True for simpler command strings
        )
        return process.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {' '.join(command) if isinstance(command, list) else command}", file=sys.stderr)
        print(f"Stderr: {e.stderr}", file=sys.stderr)
        print(f"Stdout: {e.stdout}", file=sys.stderr)
        sys.exit(1) # Exit if a gcloud command fails
    except FileNotFoundError:
        print("Error: 'gcloud' command not found. Please ensure Google Cloud SDK is installed and in your PATH.", file=sys.stderr)
        sys.exit(1)

def get_secret_value(secret_name, project_id):
    """Retrieves the latest version of a secret from Secret Manager."""
    command = f"gcloud secrets versions access latest --secret={secret_name} --project={project_id}"
    try:
        print(f"  Attempting to access secret '{secret_name}' from project '{project_id}'...")
        secret_value = run_gcloud_command(command)
        if not secret_value:
            print(f"  Warning: Secret '{secret_name}' in '{project_id}' has no value or latest version. Skipping.", file=sys.stderr)
            return None
        return secret_value
    except SystemExit: # Catching sys.exit from run_gcloud_command for specific failures
        print(f"  Failed to access secret '{secret_name}' from project '{project_id}'. Make sure it exists and has at least one version. Skipping.", file=sys.stderr)
        return None

def secret_exists(secret_name, project_id):
    """Checks if a secret exists in the given project."""
    command = f"gcloud secrets describe {secret_name} --project={project_id} --format=json"
    try:
        result = run_gcloud_command(command, check_result=False)
        if result:
            return True
        return False
    except subprocess.CalledProcessError: # Command failed, likely because secret doesn't exist
        return False

def main():
    print("--- Starting Secret Manager Migration Script ---")

    # Pre-check gcloud authentication context
    print(f"Verifying gcloud CLI is authenticated and set to source project '{SOURCE_PROJECT_ID}'...")
    try:
        current_gcloud_project = run_gcloud_command("gcloud config get-value project")
        current_gcloud_account = run_gcloud_command("gcloud auth list --filter=status:ACTIVE --format='value(account)'")
        print(f"  Current active gcloud project: {current_gcloud_project}")
        print(f"  Current active gcloud account: {current_gcloud_account}")
        if current_gcloud_project != SOURCE_PROJECT_ID:
            print(f"  ERROR: gcloud active project is '{current_gcloud_project}', but should be '{SOURCE_PROJECT_ID}'.", file=sys.stderr)
            print(f"  Please run: 'gcloud config set project {SOURCE_PROJECT_ID}' and re-authenticate if necessary.", file=sys.stderr)
            sys.exit(1)
    except Exception as e:
        print(f"ERROR: Could not verify gcloud context: {e}", file=sys.stderr)
        print("Please ensure Google Cloud SDK is installed, initialized, and authenticated.", file=sys.stderr)
        sys.exit(1)


    all_secrets_data = {}
    print(f"\nPhase 1: Retrieving secrets from source project '{SOURCE_PROJECT_ID}'...")
    for secret_name in SECRETS_TO_COPY:
        secret_value = get_secret_value(secret_name, SOURCE_PROJECT_ID)
        if secret_value is not None:
            all_secrets_data[secret_name] = secret_value
        else:
            print(f"  Could not retrieve value for '{secret_name}'. It may not exist or be accessible in '{SOURCE_PROJECT_ID}'.")
            # Decide if you want to exit or continue if a secret is missing from source
            # For now, we'll continue but log a warning.

    if not all_secrets_data:
        print("No secrets retrieved from source project. Exiting.", file=sys.stderr)
        sys.exit(0)

    print("\nPhase 2: Creating/Updating secrets in destination projects...")
    for dest_project_id in DESTINATION_PROJECT_IDS:
        print(f"\nProcessing destination project: '{dest_project_id}'")
        for secret_name, secret_value in all_secrets_data.items():
            if secret_exists(secret_name, dest_project_id):
                # If secret exists, add a new version
                command = f"gcloud secrets versions add {secret_name} --data-file=- --project={dest_project_id}"
                print(f"  Adding new version for secret '{secret_name}' in '{dest_project_id}'...")
                run_gcloud_command(command, input_data=secret_value)
                print(f"  New version added for '{secret_name}'.")
            else:
                # If secret does not exist, create it
                command = f"gcloud secrets create {secret_name} --data-file=- --project={dest_project_id}"
                print(f"  Creating secret '{secret_name}' in '{dest_project_id}' and adding first version...")
                run_gcloud_command(command, input_data=secret_value)
                print(f"  Secret '{secret_name}' created successfully.")
                
    print("\n--- Secret Manager Migration Script Complete ---")
    print("Please verify secrets in Google Cloud Console Secret Manager for each project.")

if __name__ == "__main__":
    main()