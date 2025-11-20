# Gitti Documentation - Maintenance Guide

This guide explains how to modify, translate, and version the Gitti documentation without breaking things.

## 🔴 CRITICAL: i18n Does NOT Auto-Translate

**YOU MUST MANUALLY EDIT EACH LANGUAGE FILE.**

Editing English files ONLY updates English. You must separately update:
- `i18n/ja/` (Japanese)
- `i18n/zh-Hans/` (Simplified Chinese)
- `i18n/zh-Hant/` (Traditional Chinese)

## 📁 Documentation Structure

```
docs/
├── docs/                          # English content (current/next version)
│   ├── intro.md
│   ├── installation.md
│   └── operations/
│       ├── branching.md
│       ├── staging.md
│       ├── commit.md
│       ├── remote.md
│       └── stash.md
├── versioned_docs/
│   └── version-0.1.0/            # Frozen snapshot of v0.1.0
├── i18n/
│   ├── ja/
│   │   └── docusaurus-plugin-content-docs/
│   │       ├── current/          # Japanese (current/next)
│   │       └── version-0.1.0/    # Japanese (v0.1.0)
│   ├── zh-Hans/                  # Simplified Chinese
│   └── zh-Hant/                  # Traditional Chinese
└── src/                          # Landing page & styling
    ├── pages/index.tsx
    └── css/custom.css
```

## ✏️ How to Edit Documentation

### 1. Edit English Content

**Location:** `docs/docs/`

```bash
# Example: Edit the intro page
vim docs/intro.md

# Example: Edit an operation guide
vim docs/operations/commit.md
```

### 2. Translate to Other Languages

**YOU MUST DO THIS MANUALLY FOR EACH LANGUAGE.**

```bash
# Japanese
vim i18n/ja/docusaurus-plugin-content-docs/current/intro.md

# Simplified Chinese
vim i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md

# Traditional Chinese
vim i18n/zh-Hant/docusaurus-plugin-content-docs/current/intro.md
```

### 3. Preview Your Changes

```bash
npm run start
```

Browse to `http://localhost:3000` and switch languages using the dropdown.

### 4. Build to Verify

```bash
npm run build
```

If this succeeds, you're good. If not, fix the errors.

## 🆕 Adding a New Document

### Step 1: Create English Version

```bash
# Create new file
vim docs/docs/my-new-guide.md
```

Add frontmatter:
```markdown
---
sidebar_position: 5
---

# My New Guide

Content here...
```

### Step 2: Translate to All Languages

```bash
# Japanese
vim i18n/ja/docusaurus-plugin-content-docs/current/my-new-guide.md

# Simplified Chinese
vim i18n/zh-Hans/docusaurus-plugin-content-docs/current/my-new-guide.md

# Traditional Chinese
vim i18n/zh-Hant/docusaurus-plugin-content-docs/current/my-new-guide.md
```

### Step 3: Update Sidebar (if needed)

If you want custom sidebar labels, edit `sidebars.ts`.

### Step 4: Verify

```bash
npm run build
```

## 🔄 Versioning: Creating a New Release

### When to Create a Version

Create a new version when you're releasing a new Gitti version (e.g., `0.2.0`).

### Step-by-Step Process

#### 1. Make Sure Current Docs Are Complete

Ensure all files in `docs/docs/` and `i18n/*/docusaurus-plugin-content-docs/current/` are finalized.

#### 2. Create the Version Snapshot

```bash
npm run docusaurus docs:version 0.2.0
```

This will:
- Create `versioned_docs/version-0.2.0/` (English)
- Create `i18n/ja/docusaurus-plugin-content-docs/version-0.2.0/` (Japanese)
- Create `i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.2.0/` (Simplified Chinese)
- Create `i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.2.0/` (Traditional Chinese)
- Update `versions.json`

#### 3. Verify the Version

```bash
npm run build
```

Check the version dropdown in the navbar to ensure `0.2.0` appears.

#### 4. Continue Working on "Next"

After versioning, `docs/docs/` becomes the "next" version. However, since we have `includeCurrentVersion: false` in the config, **"next" won't be visible to users**.

To make a version visible, you must run `npm run docusaurus docs:version <VERSION>`.

### Making a Version the Default

The **latest version** in `versions.json` is always the default.

**Example `versions.json`:**
```json
[
  "0.2.0",
  "0.1.0"
]
```

`0.2.0` is the default because it's first.

**To change the default, reorder `versions.json`:**
```json
[
  "0.3.0",
  "0.2.0",
  "0.1.0"
]
```

## 🎨 Editing the Landing Page

**File:** `src/pages/index.tsx`

This is a React component. Edit the JSX to change the hero section or features.

**Translations:** Use the `<Translate>` component and update `i18n/*/code.json` files.

## 🎨 Editing Styles

**File:** `src/css/custom.css`

This contains all custom styling. Modify colors, footer, buttons, etc. here.

## 🚨 Common Pitfalls

### ❌ "I edited English but other languages didn't update!"

**Solution:** You MUST manually edit each language file. There is no auto-translation.

### ❌ "The version dropdown shows 'Next'!"

**Solution:** We have `includeCurrentVersion: false` to hide "Next". If you see it, check `docusaurus.config.ts`.

### ❌ "Build fails with broken links!"

**Solution:** Ensure all internal links use correct paths and anchors. Check the error output for specific broken links.

### ❌ "Footer still looks ugly/has spacing!"

**Solution:** Check `src/css/custom.css` for the `.footer` styles. Adjust padding/margins there.

## 🧪 Testing Checklist

Before pushing changes:

- [ ] Run `npm run build` successfully
- [ ] Check English version (`http://localhost:3000`)
- [ ] Check Japanese version (`http://localhost:3000/ja`)
- [ ] Check Simplified Chinese (`http://localhost:3000/zh-Hans`)
- [ ] Check Traditional Chinese (`http://localhost:3000/zh-Hant`)
- [ ] Verify all links work
- [ ] Verify footer looks correct
- [ ] Verify version dropdown works (if applicable)

## 📞 Need Help?

- **Docusaurus Docs:** https://docusaurus.io/docs
- **Versioning:** https://docusaurus.io/docs/versioning
- **i18n:** https://docusaurus.io/docs/i18n/introduction
