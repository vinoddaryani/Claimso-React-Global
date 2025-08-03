# fix_backend_imports.py
# A script to automatically add missing backend require statements.

import os
import re
import shutil

# --- CONFIGURATION ---
# The script will start searching for functions files from this directory.
FUNCTIONS_DIR = os.path.join('shared', 'functions')

# Define the imports to add, along with their detection patterns.
# The script will add the 'import_statement' if 'detection_regex' is found AND
# 'import_statement' is NOT already in the file.
REQUIRED_IMPORTS = {
#"FieldValue": {
 #   "statement": "const { FieldValue } = require('firebase-admin/firestore');",
    # Only detect FieldValue when it's used with a property (e.g., FieldValue.serverTimestamp())
    # or in a way that suggests it's not just a standalone variable in an outer scope.
  #  "regex": re.compile(r"\bFieldValue\.(serverTimestamp|arrayUnion|arrayRemove|delete)\b"),
   # "order_hint": "admin.initializeApp()"
#},
    "Stripe": {
        "statement": "const Stripe = require('stripe');",
        "regex": re.compile(r"\bStripe(?!\.|\w)"), # <-- COMPILED REGEX
        "order_hint": "firebase-functions"
    },
    "Razorpay": {
        "statement": "const Razorpay = require('razorpay');",
        "regex": re.compile(r"\bRazorpay\b"), # <-- COMPILED REGEX
        "order_hint": "firebase-functions"
    }
}


# Regex to find existing require statements to avoid duplicates and find an insertion point.
EXISTING_REQUIRE_PATTERN = re.compile(r"const\s+[\w{} ]+\s*=\s*require\(['\"].*['\"]\);")

# --- NEW/UPDATED FUNCTION: add_missing_imports_to_file ---

def add_missing_imports_to_file(file_path):
    """
    Reads a file, first removes problematic duplicate imports,
    then adds missing require statements, and writes it back if modified.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"  Error reading {file_path}: {e}")
        return False

    original_content_str = "".join(lines)
    modified = False
    
    # --- Step 1: Automated Removal of Specific Duplicate Imports ---
    # This specific regex will find and remove FieldValue imports for cleanup
    field_value_import_pattern = re.compile(r"const\s*\{\s*FieldValue\s*\}\s*=\s*require\('firebase-admin/firestore'\);\s*\n?")
    
    new_lines = []
    removed_field_value_import = False
    for line in lines:
        if field_value_import_pattern.fullmatch(line): # Use fullmatch for exact line match
            removed_field_value_import = True
            modified = True
        else:
            new_lines.append(line)
    lines = new_lines # Update 'lines' to reflect removals
    content_after_removal = "".join(lines) # Update content string for next checks

    # --- Step 2: Determine Imports to Insert (based on potentially modified content) ---
    imports_to_insert = []
    
    for var_name, data in REQUIRED_IMPORTS.items():
        # Check if usage regex is found AND the statement is NOT in the content after removal
        if data["regex"].search(content_after_removal) and data["statement"] not in content_after_removal:
            imports_to_insert.append(data["statement"])
            modified = True # Mark as modified if an import will be added

    if not modified: # If no removals and no additions, then no need to write
        return False 
    
    # --- Step 3: Determine Insertion Point for new imports ---
    insert_idx = 0
    found_core_imports = False
    
    for i, line in enumerate(lines):
        if "require('firebase-admin')" in line or "require('firebase-functions')" in line:
            insert_idx = i + 1
            found_core_imports = True
        elif "admin.initializeApp()" in line:
            insert_idx = i + 1
            break
        elif EXISTING_REQUIRE_PATTERN.search(line):
            if not found_core_imports:
                insert_idx = i + 1
    
    # Add a blank line if inserting after existing content and no blank line exists
    if insert_idx > 0 and lines[insert_idx - 1].strip() != "":
        imports_to_insert.insert(0, "\n")
        
    # Insert new imports (if any)
    for stmt in reversed(imports_to_insert):
        lines.insert(insert_idx, stmt + "\n")
    
    # --- Step 4: Write Changes ---
    shutil.copy(file_path, file_path + ".bak") # Create backup
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        if removed_field_value_import and not imports_to_insert:
            print(f"  -> Removed duplicate FieldValue import from: {file_path}")
        elif imports_to_insert:
            print(f"  -> Added/Updated imports in: {file_path}")
        return True
    except Exception as e:
        print(f"  Error writing to {file_path}: {e}")
        return False

# ... (main function remains the same) ...
def main():
    print("--- Running Backend Import Auto-Fix Script ---")
    if not os.path.isdir(FUNCTIONS_DIR):
        print(f"ERROR: Functions directory not found: {FUNCTIONS_DIR}")
        print("Please ensure you are running this script from the project root.")
        return

    files_modified_count = 0
    for root, dirs, files in os.walk(FUNCTIONS_DIR): # <-- ADD 'dirs' here
        # --- ADD THIS NEW BLOCK ---
        # Do not process node_modules or any other directories we want to ignore
        if 'node_modules' in dirs:
            dirs.remove('node_modules') # Don't recurse into node_modules
        # --- END NEW BLOCK ---

        for filename in files:
            if filename.endswith(".js"):
                file_path = os.path.join(root, filename)
                if add_missing_imports_to_file(file_path):
                    files_modified_count += 1
    
    print(f"\n--- Script Complete ---")
    print(f"Automatically added missing imports in {files_modified_count} backend files.")
    print("Please review the changes in your code editor before deleting the backups.")

if __name__ == "__main__":
    main()