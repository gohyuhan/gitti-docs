---
sidebar_position: 4
---

# Remote Operations

Push and pull changes with support for multiple remotes and advanced options.

## Keybindings

| Key | Action |
| :--- | :--- |
| `p` | Push |
| `P` | Pull |

## Workflows

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
