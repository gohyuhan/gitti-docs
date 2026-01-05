---
sidebar_position: 1
---

# Branch Management

Manage Git branches directly from the **Local Branches** panel.

## Keybindings

| Key     | Action                    |
| :------ | :------------------------ |
| `n`     | Create New Branch         |
| `enter` | Switch to Selected Branch |
| `d`     | Delete Selected Branch    |
| `r`     | Rename Selected Branch    |

## Workflows

### Creating a New Branch

1.  **Trigger**: Press `n` in the **Local Branches** panel.
2.  **Popup**: The **Choose New Branch Type** popup appears.
3.  **Select Mode**:
    - **New Branch**: Creates the branch based on current HEAD.
    - **New Branch & Switch**: Creates and switches immediately.
    - **New Branch From Remote**: Select a remote branch to base the new branch on.
4.  **Next Popup**:
    - If "From Remote" was selected, you'll first choose the remote branch.
    - Then, the **Create New Branch** input popup appears.
5.  **Input**: Type the new branch name.
6.  **Submit**: Press `enter`.

---

### Switching to Another Branch

1.  **Select**: Use `↑/↓` or `j/k` to select a branch in the **Local Branches** panel.
2.  **Trigger**: Press `enter`.
3.  **Popup**: If conflicts or uncommitted changes exist, a **Choose Switch Branch Type** popup appears.
4.  **Output**: A **Switch Branch Output** popup shows the result.

---

### Deleting a Branch

1.  **Select**: Highlight the branch you want to delete.
2.  **Trigger**: Press `d`.
3.  **Confirmation**: A confirmation popup appears.

---

### Renaming a Branch

1.  **Select**: Highlight the branch you want to rename.
2.  **Trigger**: Press `r`.
3.  **Input**: A popup appears for entering the new name.
4.  **Submit**: Press `enter`.
