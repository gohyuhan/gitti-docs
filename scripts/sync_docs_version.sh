#!/bin/bash

# Check if version argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <version>"
  echo "Example: $0 0.1.0"
  exit 1
fi

VERSION="version-$1"
# Assuming script is run from project root, docs are in "docs"
DOCS_ROOT="docs"

# Check if docs directory exists
if [ ! -d "$DOCS_ROOT" ]; then
  echo "Error: '$DOCS_ROOT' directory not found. Please run this script from the project root."
  exit 1
fi

echo "========================================"
echo "Syncing documentation for version: $1"
echo "========================================"

# Function to sync directory
sync_dir() {
  SRC=$1
  DEST=$2
  
  if [ ! -d "$SRC" ]; then
    echo "⚠️  Warning: Source directory '$SRC' does not exist. Skipping."
    return
  fi

  # Create destination if it doesn't exist
  if [ ! -d "$DEST" ]; then
     echo "ℹ️  Destination '$DEST' does not exist. Creating it..."
     mkdir -p "$DEST"
  fi

  echo "🔄 Syncing '$SRC' -> '$DEST'..."
  
  # Remove existing content in destination to ensure clean sync
  rm -rf "$DEST"/*
  
  # Copy new content
  cp -R "$SRC"/* "$DEST"/
  
  echo "✅ Done."
}

# 1. Sync Main Docs (docs/docs -> docs/versioned_docs/version-X.X.X)
sync_dir "$DOCS_ROOT/docs" "$DOCS_ROOT/versioned_docs/$VERSION"

# 2. Sync i18n Docs
LANGUAGES=("ja" "zh-Hans" "zh-Hant")

for LANG in "${LANGUAGES[@]}"; do
  SRC="$DOCS_ROOT/i18n/$LANG/docusaurus-plugin-content-docs/current"
  DEST="$DOCS_ROOT/i18n/$LANG/docusaurus-plugin-content-docs/$VERSION"
  sync_dir "$SRC" "$DEST"
done

echo "========================================"
echo "🎉 Synchronization complete for version $1!"
echo "========================================"
