---
id: faq
title: Gitti FAQ – Git TUI (Terminal Interface)
slug: /faq
description: Frequently asked questions about Gitti, a fast, lightweight Git TUI (terminal interface) and visualized Git interface in your terminal.
---

# Gitti FAQ – Git TUI (Terminal Interface)

## What is Gitti?

Gitti is a **Git TUI (terminal user interface)** that gives you a **visualized Git interface** directly inside your terminal. It helps you browse branches, commits, diffs, and files without leaving the keyboard.

## What is a Git TUI (terminal interface)?

A **Git TUI (terminal interface)** is a text-based UI that runs in your terminal but behaves more like an application than plain `git` commands. Instead of typing long commands, you navigate with keys and see Git data laid out visually.

Gitti focuses on:

- Fast startup and low resource usage
- Clear, visual views of branches, commits, and changes
- A keyboard-driven workflow that stays in the terminal

## How is Gitti different from normal Git commands?

Traditional Git commands are powerful but hard to memorize and often require multiple commands to answer basic questions like:

- "What changed in this branch?"
- "Where did this commit come from?"
- "What files are staged vs unstaged?"

Gitti shows this information in a **single visual interface**. You still work in the terminal, but you see structured views instead of raw command output.

## Can Gitti replace my graphical Git client?

For many workflows, yes. Gitti aims to be a **visualized Git interface inside the terminal**, so you can:

- Inspect branches and commits
- Stage, unstage, and commit changes
- Review diffs

Some advanced or niche operations may still be easier with CLI or a full GUI, but Gitti covers the most common day‑to‑day Git tasks.

## Who is Gitti for?

Gitti is designed for:

- Developers who live in the terminal
- Users who want a **Git TUI** instead of a heavy GUI
- People who prefer keyboard-driven, fast workflows

If you often run `git` in a terminal and wish it were more visual, Gitti is for you.

## Which platforms does Gitti support?

Gitti is being built with **Go** and **Bubble Tea**, and is intended to run well on major platforms where you have a terminal:

- macOS
- Linux
- Windows (via a compatible terminal)

See the [Installation](./installation.md) page for the current installation instructions.

## How do I install Gitti?

Go to the [Installation](./installation.md) guide for the most up‑to‑date commands. In short, you can usually install Gitti via:

- `go install` (Go toolchain)
- Package managers (where available)

The docs keep the install commands current.

## Is Gitti open source?

Yes. Gitti is open source and hosted on GitHub. You can:

- Read and audit the source code
- Report reproducible bugs via GitHub issues

Visit the [Gitti repository](https://github.com/gohyuhan/gitti) for details.

## How does Gitti help with Git visualization?

Gitti focuses on **visualizing Git history and state in the terminal** by:

- Presenting commits and branches in structured views
- Highlighting the current branch and HEAD commit
- Showing staged vs unstaged changes clearly

This makes it easier to understand your repository at a glance compared to plain `git log` or `git status` output.

## How can I learn the keybindings?

Check the [Keybindings](./keybindings.md) page for a complete list. Many keys are inspired by popular terminal tools so they’re easy to remember.

## Where can I get help or give feedback?

- Read the [Docs](./intro.md)
- Open an issue on [GitHub](https://github.com/gohyuhan/gitti)

Feedback about usability, Git workflows, or new ideas for the **Git TUI** are especially welcome.

## Uninstall & Cleanup

### macOS (Homebrew)
```bash
# 1. Uninstall + remove ALL versions
brew uninstall --force gitti

# 2. Remove the tap
brew untap gohyuhan/gitti

# 3. Delete the binary directly (in case it's not a symlink or brew missed it)
rm -f /opt/homebrew/bin/gitti
rm -f /usr/local/bin/gitti

# 4. Delete the entire Cellar folder for gitti (old kegs)
rm -rf /opt/homebrew/Cellar/gitti
rm -rf /usr/local/Cellar/gitti

# 5. Delete any leftover symlinks
rm -rf /opt/homebrew/opt/gitti
rm -rf /usr/local/opt/gitti

# 6. Delete all cached downloads for gitti
rm -rf ~/Library/Caches/Homebrew/gitti*
rm -rf ~/Library/Caches/Homebrew/downloads/*gitti*
```

### Windows (Scoop)
```powershell
# 1. Uninstall the app (all versions)
scoop uninstall gitti 2>$null

# 2. Remove the bucket
scoop bucket rm gitti 2>$null

# 3. Delete the app folder completely (including shims + persist)
rm -r -force "$env:USERPROFILE\scoop\apps\gitti" 2>$null

# 4. Delete the bucket clone
rm -r -force "$env:USERPROFILE\scoop\buckets\gitti" 2>$null

# 5. Delete all cached installers for gitti
scoop cache rm "gitti*" 2>$null
```

### Manual Installation (curl / powershell)

#### macOS / Linux
```bash
# Remove binary (if installed via curl)
sudo rm -f /usr/local/bin/gitti
```

#### Windows
```powershell
# Remove binary and directory
Remove-Item -Path "$env:LOCALAPPDATA\gitti" -Recurse -Force
```

### Configuration Cleanup

To completely remove Gitti's configuration files:

#### macOS
```bash
rm -rf "$HOME/Library/Application Support/gitti"
```

#### Linux
```bash
rm -rf "$HOME/.config/gitti"
```

#### Windows
```powershell
Remove-Item -Path "$env:APPDATA\gitti" -Recurse -Force
```
