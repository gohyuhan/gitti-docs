---
sidebar_position: 3
---

# Committing Changes

Create commits, view history, and manage repository state.

## Keybindings

### Commit Input

| Key         | Action         |
| :---------- | :------------- |
| `c`         | Commit         |
| `A`         | Amend Commit   |
| `ctrl+e`    | Submit         |
| `esc`       | Cancel         |
| `tab`       | Next Field     |
| `shift+tab` | Previous Field |
| `ctrl+p`    | Paste          |
| `ctrl+y`    | Copy           |

### Commit Log & Reset

| Key     | Action                |
| :------ | :-------------------- |
| `r`     | Reset Selected Commit |
| `R`     | Reset Latest Commit   |
| `enter` | View Details          |

## Workflows

### Creating a Commit

1.  **Stage**: Ensure you have staged files in the **Modified Files** panel.
2.  **Trigger**: Press `c`.
3.  **Popup**: The **Commit Popup** appears with two fields:
    - **Summary**: The first line of your commit message.
    - **Description**: Detailed body of the commit message.
4.  **Input**:
    - Type your summary.
    - Press `tab` to move to the description (optional).
5.  **Submit**: Press `ctrl+e`.
    - **Why `ctrl+e`?**: Since `enter` is used for new lines in the description field, `ctrl+e` is used to submit the form.

---

### Amending a Commit

1.  **Trigger**: Press `A` (shift+a).
2.  **Modify**: Edit the message or simply submit to include new staged files.
3.  **Submit**: Press `ctrl+e`.

---

### Viewing Commit History

1.  **Navigation**: Press `3` to focus the **Commit Log**.
2.  **Graph**: The list displays a visual branching graph and commit summaries.
3.  **Details**: The **Detail Panel** (Right) shows full commit info, including:
    - Author, Date, Hash
    - Full Message
    - Stat summary (insertions/deletions)
    - **Diffs**: Complete file changes for that commit.

---

### Resetting Commits

Refine your history using `soft`, `mixed`, or `hard` resets.

#### Reset Latest Commit

1.  **Trigger**: Press `R` (shift+r) in the Commit Log.
2.  **Select Mode**:
    - **Soft**: Keep changes in Staging.
    - **Mixed**: Keep changes in Working Directory (mstaged).
    - **Hard**: Discard all changes.
3.  **Confirm**: A prompt ensures you want to proceed.

#### Reset to Specific Commit

1.  **Select**: Highlight a target commit in the log.
2.  **Trigger**: Press `r`.
3.  **Select Mode**: Choose between Soft, Mixed, or Hard reset targeting that commit.
4.  **Confirm**: Proceed with the reset.

### Cherry Picking

Cherry-pick specific commits from history onto your current branch.

1.  **Access**: Navigate to the **Commit Log** component (Press `3`).
2.  **Trigger Mode**: Press `ctrl+p` to enter Cherry Pick mode.
3.  **Selection**:
    - Navigate using `↑` / `↓`.
    - Press `space` to select or unselect commits.
4.  **Edit**: Press `e` to review or edit your selection (optional).
5.  **Confirm**: Press `a` to confirm the selected commits for cherry-picking.
6.  **Apply**: Press `enter` to apply the cherry-pick operation.

:::info
Use global keys `C` (Continue), `ctrl+k` (Skip), or `ctrl+a` (Abort) if conflicts arise during the operation.
:::
