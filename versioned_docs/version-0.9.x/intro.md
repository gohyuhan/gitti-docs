---
sidebar_position: 1
description: Gitti is a fast, lightweight, keyboard-driven terminal UI (TUI) for Git. Learn its layout, panels and how to get started managing branches, files and commits from your terminal.
keywords:
  - gitti
  - git tui
  - git ui
  - terminal git client
  - keyboard driven git
  - git terminal ui
  - git workflow
---

# Introduction

**Gitti** is a fast, lightweight terminal UI for Git operations. It is designed to keep you in your flow by providing a keyboard-driven interface for common Git tasks.

## Core Philosophy

Gitti is built around three main components:

1.  **Local Branches / Tags / Remotes / Worktree** (Left Top) — switch with `< / >`
2.  **Modified Files** (Left Middle)
3.  **Commit Log / RefLog** (Left Bottom) — switch with `< / >`
4.  **Stash** (Left Bottom)
5.  **Logging Panel** (Right Bottom)

The **Detail View** (Right Top) updates contextually based on your selection.

## Global Navigation

| Key         | Action                             |
| :---------- | :--------------------------------- |
| `1`         | Switch focus to **Local Branches** |
| `2`         | Switch focus to **Modified Files** |
| `3`         | Switch focus to **Commit Log / RefLog** |
| `4`         | Switch focus to **Stash**          |
| `/`         | Switch focus to **Logging Panel**  |
| `tab`       | Cycle forward through components   |
| `shift+tab` | Cycle backward through components  |
| `F`         | Filter the focused list panel      |
| `?`         | Open Global Keybindings Help       |

## Filtering Lists

Press `F` in the **Local Branches / Tags / Remotes / Worktree**, **Modified Files**, **Commit Log / RefLog** or **Stash** panel to filter that list. Type to narrow the list, press `enter` to keep the filter, or press `esc` to clear it. Each list keeps its own filter query. See [List Filtering](./keybindings.md#list-filtering) for the full behavior.

## Mouse Support

Gitti also accepts mouse input. Left-click a panel to focus it, left-click a list row to select it, and use the scroll wheel to scroll the detail panel and popup content. See [Mouse Support](./keybindings.md#mouse-support) for the full behavior.

## Getting Started {#getting-started}

1.  Open your terminal.
2.  Navigate to a Git repository.
3.  Run `gitti`.

You will see the interface populated with your current repository state. Use the number keys (`1`, `2`, `3`, `4`) to jump between panels.
