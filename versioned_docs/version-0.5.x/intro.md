---
sidebar_position: 1
---

# Introduction

**Gitti** is a fast, lightweight terminal UI for Git operations. It is designed to keep you in your flow by providing a keyboard-driven interface for common Git tasks.

## Core Philosophy

Gitti is built around three main components:

1.  **Local Branches** (Left Top)
2.  **Modified Files** (Left Middle)
3.  **Commit Log** (Left Bottom)
4.  **Stash** (Left Bottom)
5.  **Logging Panel** (Right Bottom)

The **Detail View** (Right Top) updates contextually based on your selection.

## Global Navigation

| Key         | Action                             |
| :---------- | :--------------------------------- |
| `1`         | Switch focus to **Local Branches** |
| `2`         | Switch focus to **Modified Files** |
| `3`         | Switch focus to **Commit Log**     |
| `4`         | Switch focus to **Stash**          |
| `/`         | Switch focus to **Logging Panel**  |
| `tab`       | Cycle forward through components   |
| `shift+tab` | Cycle backward through components  |
| `?`         | Open Global Keybindings Help       |

## Getting Started {#getting-started}

1.  Open your terminal.
2.  Navigate to a Git repository.
3.  Run `gitti`.

You will see the interface populated with your current repository state. Use the number keys (`1`, `2`, `3`, `4`) to jump between panels.
