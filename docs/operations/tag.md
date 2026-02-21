---
sidebar_position: 2
---

# Tag Operations

Manage Git tags directly from the **Tag** panel.

## Keybindings

| Key      | Action                       |
| :------- | :--------------------------- |
| `< / >`  | Switch Component Panel       |
| `d`      | Delete Tag                   |
| `ctrl+p` | Push Tag                     |
| `f`      | Fetch Tag                    |
| `?`      | Keybindings and Instructions |

:::info
The Local Branches, Tag, and Remote panels share the same space. Use `< / >` to switch between them. To create a new tag, use the `t` keybinding in the Commit Log panel.
:::

## Workflows

### Deleting a Tag

1.  **Navigate**: Navigate to Tag component (press `1`) or switch to Tag component (press `< / >`).
2.  **Select**: Select the tag to delete using `↑/↓`.
3.  **Trigger**: Press `d` to open delete tag menu.
4.  **Select Mode**: Select delete option:
    - Delete local tag
    - Delete remote tag
5.  **Confirm**: Press `enter` to confirm.
6.  **Close**: Press `esc` to close output.

---

### Pushing a Tag

1.  **Navigate**: Navigate to Tag component (press `1`) or switch to Tag component (press `< / >`).
2.  **Select**: Select the tag to push using `↑/↓`.
3.  **Trigger**: Press `ctrl+p` to open push tag menu.
4.  **Select Mode**: Select push option:
    - Push selected tag
    - Push all tags
    - Force push selected tag
    - Force push all tags
5.  **Confirm**: Press `enter` to confirm.
6.  **Close**: Press `esc` to close output.

---

### Fetching Tags

1.  **Navigate**: Navigate to Tag component (press `1`) or switch to Tag component (press `< / >`).
2.  **Trigger**: Press `f` to open fetch tag menu.
3.  **Select Mode**: Select fetch option:
    - Fetch tag(s)
    - Fetch tag(s) prune - Remove tags that no longer exist in remote
    - Fetch tag(s) overwrite - Overwrite existing tags with remote tags that differ
    - Fetch tag(s) mirror - Mirror all tags from remote
4.  **Confirm**: Press `enter` to confirm.
5.  **Close**: Press `esc` to close output.
