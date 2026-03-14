---
sidebar_position: 1
---

# Branch Management

Manage Git branches directly from the **Local Branches** panel.

## Keybindings

| Key     | Action                     | Notes                                          |
| :------ | :------------------------- | :--------------------------------------------- |
| `< / >` | Switch Component Panel     | Switches between Local Branches, Tags, Remotes |
| `n`     | Create New Branch          | Opens branch creation flow                     |
| `enter` | Switch to Selected Branch  | Opens switch branch popup if needed            |
| `d`     | Delete Selected Branch     | Deletes branch (opens confirmation if needed)  |
| `r`     | Rebase onto Another Branch | Checked-out branch only; supports --autostash  |
| `m`     | Merge Branch into Current  | Opens multi-branch merge selector              |

:::info
The Local Branches, Tag, and Remote panels share the same space. Use `< / >` to switch between them.
:::

## Workflows

### Creating a New Branch

1.  **Trigger**: Press `n` in the **Local Branches** panel.
2.  **Popup**: The **Choose New Branch Type** popup appears with 4 options:
    - **New Branch**: Creates the branch based on current HEAD.
    - **New Branch & Switch**: Creates and switches immediately.
    - **New Branch From Remote (manual input)**: Manually enter a remote branch name to base the new branch on.
    - **New Branch From Remote (user selection)**: Select from a list of available remote branches.
3.  **Next Popup**:
    - If a "From Remote" option was selected, you'll first choose or enter the remote branch.
    - Then, the **Create New Branch** input popup appears.
4.  **Input**: Type the new branch name.
5.  **Submit**: Press `enter`.

:::tip
Use **New Branch From Remote (user selection)** to browse all available remote branches without needing to know the exact name in advance.
:::

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
3.  **Confirmation**: A confirmation popup appears (e.g., when force deletion is needed).

---

### Rebasing onto Another Branch

Rebase the currently checked-out branch onto any local or remote branch.

:::note
`r` only works when the selected branch is the **currently checked-out branch**. It will not activate if another branch is selected.
:::

1.  **Select**: Highlight the currently checked-out branch.
2.  **Trigger**: Press `r`.
3.  **Select Remote**: A popup lists all configured fetch remotes and an empty option at the top for rebasing onto a local branch. Choose the appropriate one.
4.  **Enter Branch Name**: Type the name of the branch to rebase onto.
5.  **Submit**: Press `enter`. The rebase runs with `--autostash`, so any uncommitted changes are automatically stashed and re-applied after completion.

---

### Merging a Branch into Current

Merge one or more branches into the currently checked-out branch.

1.  **Trigger**: Press `m` in the **Local Branches** panel.
2.  **Popup**: The **Choose Branch to Merge** selector opens in a two-panel layout:
    - **Left panel**: List of selectable branches.
    - **Right panel**: List of branches queued for merging.
3.  **Select**: Navigate with `↑/↓` and move branches between panels with `space` or `enter`.
4.  **Switch panels**: Use `tab` / `shift+tab` to toggle focus between the two panels.
5.  **Execute**: Confirm once selection is complete.

The merge strategy (fast-forward or non-fast-forward) is controlled by the `--ff-merge` configuration flag. See [Configuration](../configuration.md#configure-merge-strategy) for details.
