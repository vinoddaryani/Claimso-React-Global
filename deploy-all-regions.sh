#!/bin/bash
set -e

echo "--- STARTING CLAIMSO GLOBAL DEPLOYMENT ---"
echo ""

echo "STEP 0a: Cleaning global NPM cache and Firebase CLI cache..."
npm cache clean --force || true
rm -rf ~/.config/configstore/firebase-tools.json || true
echo "--------------------------------------------------------"

echo "STEP 0b: Switching to Node.js v20 for Firebase CLI compatibility..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm install 20 || true
nvm use 20

echo "Current Node.js version for deployment:"
node --version
echo "-----------------------------------------"

echo ""
echo "STEP 0c: Running backend import auto-fix script..."
python3 fix_backend_imports.py

echo ""
echo "STEP 1: Building the frontend application..."
(cd shared/frontend && npm install && npm run build)

echo ""
echo "STEP 1a: Preparing frontend for deployment..."
regions=("claimso-us" "claimso-europe" "claimso-apac")
for region in "${regions[@]}"; do
    echo "Preparing frontend for $region..."
    # Remove any existing 'public' directory
    rm -rf "projects/$region/public"
    # Copy the built frontend into the project's 'public' folder
    cp -r "shared/frontend/dist" "projects/$region/public"
done

echo ""
echo "STEP 2: Preparing functions for deployment (Aggressive Clean Install)..."
regions=("claimso-us" "claimso-europe" "claimso-apac")
for region in "${regions[@]}"; do
    echo "Preparing functions for $region..."
    rm -rf "projects/$region/functions"
    cp -r "shared/functions" "projects/$region/functions"
    
    echo "Installing dependencies for functions in projects/$region/functions (npm ci)..."
    (cd "projects/$region/functions" && rm -rf node_modules && npm install)
done

echo ""
echo "STEP 3: Deploying to claimso-us..."
# --- CHANGE THIS LINE to use the FULL PROJECT ID ---
nvm exec 20 firebase deploy --project=claimso-us --config projects/claimso-us/firebase.json --only functions,firestore,storage,hosting --force

echo ""
echo "STEP 4: Deploying to claimso-europe..."
# --- CHANGE THIS LINE to use the FULL PROJECT ID ---
nvm exec 20 firebase deploy --project=claimso-europe --config projects/claimso-europe/firebase.json --only functions,firestore,storage,hosting --force

echo ""
echo "STEP 5: Deploying to claimso-apac..."
# --- CHANGE THIS LINE to use the FULL PROJECT ID ---
nvm exec 20 firebase deploy --project=claimso-apac --config projects/claimso-apac/firebase.json --only functions,firestore,storage,hosting --force

echo ""
echo "--- CLAIMSO GLOBAL DEPLOYMENT COMPLETE ---"
echo "US URL: https://claimso-us.web.app"
echo "Europe URL: https://claimso-europe.web.app"
echo "APAC URL: https://claimso-apac.web.app"