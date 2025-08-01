# update_imports.py
# A script to automate the refactoring of Firebase imports for Project Claimso.

import os
import re
import shutil

# --- CONFIGURATION ---
# The script will start searching from this directory.
# This path assumes you run the script from the root `claimso-global/` folder.
SRC_DIRECTORY = os.path.join('shared', 'frontend', 'src')
OLD_FIREBASE_IMPORT_PATH = "services/firebase.js"
NEW_GLOBAL_CLIENT_PATH = "services/firebase-enhanced-global.js"
NEW_PAYMENT_SERVICE_PATH = "services/payment.js"

# --- REPLACEMENT RULES ---
# These rules are applied in order.

# 1. Replace usages of db, auth, storage, perf with the globalClient instance.
# We use `\b` for word boundaries to avoid replacing parts of other words (e.g., 'adb').
# This is much safer than a simple string replace.
CORE_SERVICE_REPLACEMENTS = {
    re.compile(r'\bdb\b'): 'globalClient.db',
    re.compile(r'\bauth\b'): 'globalClient.auth',
    re.compile(r'\bstorage\b'): 'globalClient.storage',
    re.compile(r'\bperf\b'): 'globalClient.perf',
}

def process_file(file_path):
    """Reads a file, applies all transformations, and writes it back if changed."""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
    except Exception as e:
        print(f"  -> Could not read file: {e}")
        return False

    content = original_content
    made_changes = False

    # --- Rule 1: Handle Payment Processor Import ---
    # If a line imports 'paymentProcessor' from the old file, rewrite the whole line.
    payment_pattern = re.compile(r"import\s+\{.*paymentProcessor.*\}\s+from\s+['\"].*/" + re.escape(OLD_FIREBASE_IMPORT_PATH) + "['\"];?")
    new_payment_import = f"import {{ paymentProcessor }} from '../{NEW_PAYMENT_SERVICE_PATH}';" # Adjust relative path if needed
    
    # We use a trick to rebuild the content line by line for this one
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if payment_pattern.search(line):
            # Check if other things are on the same line. If so, just remove paymentProcessor
            if "paymentProcessor" in line and "," in line:
                 line = line.replace("paymentProcessor,", "").replace("paymentProcessor", "")
                 new_lines.append(new_payment_import)
            else: # If it's the only import, replace the whole line
                line = new_payment_import
            made_changes = True
        new_lines.append(line)
    content = '\n'.join(new_lines)


    # --- Rule 2: Redirect all other firebase.js imports ---
    content_after_redirect = content.replace(OLD_FIREBASE_IMPORT_PATH, NEW_GLOBAL_CLIENT_PATH)
    if content != content_after_redirect:
        content = content_after_redirect
        made_changes = True

    # --- Rule 3: Replace core service usages (db, auth, etc.) ---
    for pattern, replacement in CORE_SERVICE_REPLACEMENTS.items():
        content, num_subs = pattern.subn(replacement, content)
        if num_subs > 0:
            made_changes = True
    
    # --- Rule 4: Clean up imports that are now accessed via globalClient ---
    # This regex finds an import statement from our new file and removes the specific names.
    import_clean_pattern = re.compile(r"(import\s*\{)([^}]*)(\}\s*from\s*['\"].*" + re.escape(NEW_GLOBAL_CLIENT_PATH) + "['\"])")
    
    def clean_imports(match):
        start, imports, end = match.groups()
        # Remove the core services, keeping other helpers
        imports_to_remove = ['db', 'auth', 'storage', 'perf']
        # Super careful cleaning
        cleaned_imports = imports
        for imp in imports_to_remove:
            cleaned_imports = re.sub(r'\b' + imp + r'\b,?\s*', '', cleaned_imports)
        
        # Tidy up dangling commas
        cleaned_imports = re.sub(r',\s*,', ',', cleaned_imports) # double comma
        cleaned_imports = re.sub(r'^\s*,\s*', '', cleaned_imports) # leading comma
        cleaned_imports = re.sub(r',\s*$', '', cleaned_imports) # trailing comma
        
        # If all imports are gone, we might remove the whole line, but for now, just clean it
        if imports != cleaned_imports:
            nonlocal made_changes
            made_changes = True
        
        return f"{start}{cleaned_imports}{end}"

    content = import_clean_pattern.sub(clean_imports, content)

    # --- Write Changes (if any) ---
    if made_changes:
        try:
            # Create a backup
            shutil.copy(file_path, file_path + '.bak')
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        except Exception as e:
            print(f"  -> ERROR: Could not write changes to {file_path}: {e}")
            return False
            
    return False


def main():
    """Main function to walk the directory and process files."""
    print("--- Starting Project Claimso Import Refactor Script ---")
    if not os.path.isdir(SRC_DIRECTORY):
        print(f"ERROR: Source directory not found: '{SRC_DIRECTORY}'")
        print("Please run this script from the root 'claimso-global/' folder.")
        return

    modified_files_count = 0
    total_files_scanned = 0

    for root, _, files in os.walk(SRC_DIRECTORY):
        for filename in files:
            if filename.endswith(('.js', '.jsx')):
                file_path = os.path.join(root, filename)
                print(f"Scanning: {file_path}")
                total_files_scanned += 1
                if process_file(file_path):
                    print("  -> Modified.")
                    modified_files_count += 1

    print("\n--- Refactor Complete ---")
    print(f"Scanned {total_files_scanned} files.")
    print(f"Modified {modified_files_count} files.")
    print("IMPORTANT: Backups of modified files have been created with a '.bak' extension.")
    print("Please review the changes in your code editor before deleting the backups.")

if __name__ == "__main__":
    main()