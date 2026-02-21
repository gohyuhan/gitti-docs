---
sidebar_position: 3
---

# Remote Operations

Push and pull changes with support for multiple remotes and advanced options.

## Keybindings

| Key     | Action                       | Notes                                   |
| :------ | :--------------------------- | :-------------------------------------- |
| `p`     | Push                         | \* Global (not when a popup is showing) |
| `P`     | Pull                         | \* Global (not when a popup is showing) |
| `< / >` | Switch Component Panel       |                                         |
| `n`     | New Remote                   |                                         |
| `d`     | Remove Remote                |                                         |
| `e`     | Edit Remote                  |                                         |
| `enter` | Set as Tracking Upstream     |                                         |
| `?`     | Keybindings and Instructions |                                         |

:::info
The Local Branches, Tag, and Remote panels share the same space. Use `< / >` to switch between them.
:::

## Workflows

### Adding a Remote

1.  **Navigate**: Go to the Remote component (press `1`) or switch to it (press `< / >`).
2.  **Trigger**: Press `n`.
3.  **Input Name**: Enter the remote name (e.g., 'origin').
4.  **Next**: Press `tab` to move to the URL field.
5.  **Input URL**: Enter the remote URL (e.g., `https://example.com/repo.git` or `git@example.com:repo.git`).
6.  **Confirm**: Press `enter`.
7.  **Close**: Press `esc` to close the output.

---

### Editing a Remote

1.  **Navigate**: Go to the Remote component (press `1`) or switch to it (press `< / >`).
2.  **Select**: Select the remote to edit using `↑/↓`.
3.  **Trigger**: Press `e`.
4.  **Edit**: Enter the new remote name, url, or both.
5.  **Confirm**: Press `enter`.
6.  **Close**: Press `esc` to close the output.

---

### Removing a Remote

1.  **Navigate**: Go to the Remote component (press `1`) or switch to it (press `< / >`).
2.  **Select**: Select the remote to remove using `↑/↓`.
3.  **Trigger**: Press `d`.
4.  **Confirm**: Press `enter`.
5.  **Close**: Press `esc` to close the output.

---

### Setting as Tracking Upstream

1.  **Navigate**: Go to the Remote component (press `1`) or switch to it (press `< / >`).
2.  **Select**: Select the remote you want to set as tracking upstream using `↑/↓`.
3.  **Trigger**: Press `enter`.

---

### Pushing Changes

1.  **Trigger**: Press `p`.
2.  **Logic Flow**:
    - **Check Remotes**: Gitti checks your configured remotes.
    - **Scenario A (No Remote)**:
      - **Popup**: "Add Remote". You must add a remote before pushing.
    - **Scenario B (Multiple Remotes)**:
      - **Popup**: "Choose Remote". Select which remote to push to (e.g., `origin`, `upstream`).
      - **Next**: Proceed to Push Options.
    - **Scenario C (Single Remote)**:
      - **Next**: Proceed directly to Push Options.
3.  **Push Options**: A popup appears to select the push mode:
    - `git push`
    - `git push --force`
    - `git push --force-with-lease`
4.  **Confirm**: Select an option and press `enter`.

---

### Pulling Changes

1.  **Trigger**: Press `P` (shift+p).
2.  **Logic Flow**:
    - **Check Remotes**: Similar to push, checks for existing remotes.
3.  **Pull Options**: A popup appears to select the pull mode:
    - `git pull` (Based on user configuration)
    - `git pull --rebase`
    - `git pull --no-rebase`
4.  **Confirm**: Select an option and press `enter`.

:::note
The rebase and merge options will pull from the current branch's own upstream. Support for rebasing or merging with other remotes or branches will be available in an upcoming version.
:::
