#!/bin/bash

# Check if both arguments are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <old_version> <new_version>"
  echo "Example: $0 0.1.0 0.1.1"
  exit 1
fi

OLD_VER="$1"
NEW_VER="$2"

echo "========================================"
echo "Renaming version from $OLD_VER to $NEW_VER"
echo "========================================"

# Safety check: Ensure we are in the project root
if [ ! -f "docusaurus.config.ts" ]; then
  echo "Error: docusaurus.config.ts not found. Please run this script from the project root."
  exit 1
fi

# Function to rename file or directory if it exists
rename_path() {
  SRC=$1
  DEST=$2
  
  if [ -e "$SRC" ]; then
    echo "Resizing '$SRC' -> '$DEST'..."
    mv "$SRC" "$DEST"
  else
    echo "⚠️  Warning: '$SRC' does not exist. Skipping rename."
  fi
}

# 1. Rename versioned_docs directory
rename_path "versioned_docs/version-$OLD_VER" "versioned_docs/version-$NEW_VER"

# 2. Rename versioned_sidebars file
rename_path "versioned_sidebars/version-$OLD_VER-sidebars.json" "versioned_sidebars/version-$NEW_VER-sidebars.json"

# 3. Update versions.json
if [ -f "versions.json" ]; then
  echo "Updating versions.json..."
  # Use sed to replace the exact version string. 
  # Using -i '' for macOS compatibility.
  sed -i '' "s/\"$OLD_VER\"/\"$NEW_VER\"/g" versions.json
else
  echo "⚠️  Warning: versions.json not found."
fi

# 4. Handle i18n directories
LANGUAGES=("ja" "zh-Hans" "zh-Hant")

for LANG in "${LANGUAGES[@]}"; do
  echo "Processing language: $LANG"
  BASE_I18N="i18n/$LANG/docusaurus-plugin-content-docs"
  
  # Rename the directory
  rename_path "$BASE_I18N/version-$OLD_VER" "$BASE_I18N/version-$NEW_VER"
  
  # Rename the JSON file
  JSON_SRC="$BASE_I18N/version-$OLD_VER.json"
  JSON_DEST="$BASE_I18N/version-$NEW_VER.json"
  
  rename_path "$JSON_SRC" "$JSON_DEST"
  
  # Update content inside the new JSON file
  if [ -f "$JSON_DEST" ]; then
    echo "Updating content in $JSON_DEST..."
    sed -i '' "s/$OLD_VER/$NEW_VER/g" "$JSON_DEST"
  fi
done

echo "========================================"
echo "🎉 Version rename complete: $OLD_VER -> $NEW_VER"
echo "========================================"
