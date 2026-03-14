---
sidebar_position: 8
---

# RefLog

The **RefLog Panel** shows a history of all reference updates in your repository — checkouts, commits, rebases, merges, and more. It provides a fast way to recover lost commits or branch states and perform actions on any historical entry.

## Accessing the RefLog Panel

1.  Press `3` to switch focus to the **Commit Log / RefLog** panel.
2.  Press `>` to switch from Commit Log to **RefLog**.
3.  Press `<` to go back to Commit Log.

## Keybindings

| Key      | Action                          |
| :------- | :------------------------------ |
| `< / >`  | Toggle between Commit Log and RefLog |
| `↑ / k`  | Move to previous entry          |
| `↓ / j`  | Move to next entry              |
| `enter`  | View entry details              |
| `n`      | Create new branch from commit hash |
| `r`      | Reset to selected entry         |
| `ctrl+p` | Cherry-pick entry onto current branch |

## What Each Entry Shows

Each reflog entry displays:
- **Commit hash** — Short hash of the referenced commit
- **Operation description** — Summary of what happened (e.g. `checkout: moving from main to feature`)
- **Operation type** — Category of the operation (e.g. `checkout`, `rebase`, `commit`, `merge`)

## Workflows

### Create a New Branch from a RefLog Entry

Useful for recovering a deleted branch or branching from an arbitrary historical state.

1.  Select the target reflog entry using `↑/↓`.
2.  Press `n`.
3.  The **Create New Branch** input popup appears, pre-filled with the entry's commit hash.
4.  Enter the new branch name.
5.  Press `enter` to create the branch.

---

### Reset to a RefLog Entry

Hard, mixed, or soft reset the current HEAD to the commit referenced by the entry.

1.  Select the target reflog entry using `↑/↓`.
2.  Press `r`.
3.  The **Reset Type** popup appears. Choose:
    - **Soft** — Keep changes in staging.
    - **Mixed** — Keep changes as unstaged.
    - **Hard** — Discard all changes.
4.  Confirm to execute the reset.

:::warning
**Hard reset** permanently discards uncommitted changes. Use with caution.
:::

---

### Cherry-pick from a RefLog Entry

Apply the changes of a specific reflog entry's commit onto the currently checked-out branch.

1.  Select the target reflog entry using `↑/↓`.
2.  Press `ctrl+p`.
3.  A confirmation popup appears showing the entry's details:
    - Hash
    - HEAD ref
    - Operation type
    - Operation message
4.  Confirm to apply the cherry-pick.

## Configuration

You can control how many reflog entries Gitti loads:

```bash
gitti --max-ref-log-count 2500
```

The default value is `2500` entries.
