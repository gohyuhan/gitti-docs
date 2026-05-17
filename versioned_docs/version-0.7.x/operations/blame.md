---
sidebar_position: 9
---

# Git Blame

The **Git Blame** popup shows line-by-line authorship information for any tracked file — who changed each line, when, and in which commit.

## Accessing Git Blame

Press `b` from any panel (when no popup is open) to open the Blame popup.

## Keybindings

### File Selection View

| Key        | Action                     |
| :--------- | :------------------------- |
| `↑` or `k` | Move up in file list       |
| `↓` or `j` | Move down in file list     |
| `enter`    | View blame for selected file |
| `esc`      | Close blame popup          |

### Blame View (after selecting a file)

| Key        | Action               |
| :--------- | :------------------- |
| `↑` or `k` | Scroll up            |
| `↓` or `j` | Scroll down          |
| `←` or `h` | Scroll left          |
| `→` or `l` | Scroll right         |
| `esc`      | Return to file list  |

## Workflow

### Viewing Blame for a File

1.  **Open**: Press `b` from any panel.
2.  **Filter** (optional): Start typing to filter the file list by path.
3.  **Select**: Navigate with `↑/↓` to the file you want.
4.  **View**: Press `enter` to load the blame output.
5.  **Scroll**: Use arrow keys to navigate the blame output (supports horizontal scrolling for long lines).
6.  **Back**: Press `esc` to return to the file list, or `esc` again to close the popup.

:::info
The blame popup lists all Git-tracked files in the repository, not just modified files. You can blame any tracked file regardless of its current state.
:::
