---
sidebar_position: 10
---

# Interactive Rebase

Interactive rebase lets you rewrite commit history by modifying individual commits. From the **Commit Log** panel, press `i` to open the operation selector.

## Accessing Interactive Rebase

1.  Press `3` to focus the **Commit Log** panel.
2.  Press `i` to open the **Interactive Rebase** option popup.

:::note
`i` is only available in the **Commit Log** panel when at least one commit exists.
:::

## Available Operations

| Operation        | Description                                                              |
| :--------------- | :----------------------------------------------------------------------- |
| **Drop**         | Remove the selected commit entirely from history                         |
| **Reword**       | Edit the commit message of the selected commit                           |
| **Fixup/Squash** | Squash two or more selected commits into the oldest selected commit      |

## Keybindings

### Operation Selection Popup

| Key        | Action                  |
| :--------- | :---------------------- |
| `↑` or `k` | Navigate up             |
| `↓` or `j` | Navigate down           |
| `enter`    | Confirm selected option |
| `esc`      | Cancel                  |

### Reword / Fixup/Squash Commit Input

| Key         | Action         |
| :---------- | :------------- |
| `ctrl+e`    | Submit         |
| `tab`       | Next field     |
| `shift+tab` | Previous field |
| `ctrl+p`    | Paste          |
| `ctrl+y`    | Copy           |
| `esc`       | Cancel         |

## Workflows

### Drop a Commit

1.  Navigate to the target commit in the **Commit Log** panel.
2.  Press `i`.
3.  Select **Drop** and press `enter`.
4.  A confirmation output popup appears showing the result.

:::warning
**Drop** permanently removes the commit from history. This rewrites history — do not use on commits already pushed to a shared remote without coordination.
:::

---

### Reword a Commit Message

1.  Navigate to the target commit.
2.  Press `i`.
3.  Select **Reword** and press `enter`.
4.  A commit selector popup appears. Navigate to confirm the target commit and press `enter`.
5.  An input popup opens pre-filled with the existing commit message.
6.  Edit the **Summary** and optionally the **Description**.
7.  Press `ctrl+e` to submit.

---

### Fixup/Squash Commits

Combines two or more selected commits into a single commit. All selected commits are squashed into the oldest selected commit, which becomes the base.

1.  Press `i` in the **Commit Log** panel.
2.  Select **Fixup/Squash** and press `enter`.
3.  A commit selector popup appears. Select **at least 2 commits** from the list.
4.  Press `enter` to confirm. All selected commits are squashed into the oldest selected commit.
5.  An input popup opens to edit the combined commit message. Press `ctrl+e` to submit.

:::info
The oldest selected commit acts as the base — all other selected commits are merged into it. You must select at least 2 commits.
:::

:::warning
Any merge commits that are newer than the oldest selected commit will be automatically dropped during the operation.
:::
