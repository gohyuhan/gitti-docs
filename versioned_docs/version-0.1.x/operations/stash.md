---
sidebar_position: 5
---

# Stashing

Save uncommitted changes for later use.

## Navigation
Press `3` to focus on the **Stash** panel.

## Keybindings

| Key | Action | Context |
| :--- | :--- | :--- |
| `s` | Stash File | From Modified Files |
| `S` | Stash All | From Modified Files |
| `space` | Apply Stash | From Stash Panel |
| `backspace` | Pop Stash | From Stash Panel |
| `d` | Drop Stash | From Stash Panel |

## Workflows

### Creating a Stash

1.  **Focus**: Navigate to **Modified Files** (`2`).
2.  **Trigger**:
    - Press `s` to stash only the **selected file**.
    - Press `S` to stash **all files**.
3.  **Popup**: "Stash Message". Enter a descriptive name for your stash.
4.  **Submit**: Press `enter`.

### Managing Stashes

1.  **Focus**: Navigate to **Stash** (`3`).
2.  **Apply**: Select a stash and press `space`.
    - Applies changes but **keeps** the stash in the list.
3.  **Pop**: Select a stash and press `backspace`.
    - Applies changes and **removes** the stash from the list.
4.  **Drop**: Select a stash and press `d`.
    - **Permanently deletes** the stash.
