---
sidebar_position: 11
description: Manage Git worktrees in Gitti — list, switch, add, remove, prune and lock/unlock worktrees from the terminal UI without leaving your repository.
keywords:
  - git worktree
  - git worktree tui
  - manage git worktrees
  - git worktree manager
  - add git worktree
  - switch git worktree
  - prune git worktree
  - lock git worktree
---

# Worktree

The **Worktree Panel** lets you manage Git worktrees directly from Gitti — list, switch, add, remove, prune, and lock/unlock — without leaving the terminal. Worktrees let you check out multiple branches into separate directories from a single repository.

:::info
Worktree management runs against your **main repository**. Bare repositories are not supported.
:::

## Accessing the Worktree Panel

The Worktree panel shares the top-left component panel with **Local Branches**, **Tags**, and **Remotes**.

1.  Press `1` to focus the **Local Branches / Tags / Remotes / Worktree** panel.
2.  Press `>` to cycle right through the panel: Local Branch → Tag → Remote → **Worktree**.
3.  Press `<` to cycle back.

## Keybindings

| Key         | Action                | Notes                                                       |
| :---------- | :-------------------- | :---------------------------------------------------------- |
| `< / >`     | Switch Component Panel | Cycles between Local Branches, Tags, Remotes, Worktree      |
| `↑ / k`     | Move to previous entry |                                                             |
| `↓ / j`     | Move to next entry     |                                                             |
| `enter`     | Switch Worktree        | Switch into the selected worktree                           |
| `n`         | New Worktree           | Opens the add worktree input flow                           |
| `backspace` | Remove Worktree        | Opens the remove confirmation popup                         |
| `o`         | Lock / Unlock Worktree | Toggles the lock state (not available on the main worktree) |
| `ctrl+p`    | Prune Worktrees        | Removes stale/missing worktree references                   |
| `?`         | Keybindings & How-to   | Opens the dedicated help popup                              |

## What Each Entry Shows

Each worktree entry can display the following status markers:

- **Main** — The primary worktree (cannot be removed or locked).
- **Current Worktree** — The worktree you are currently in.
- **Locked** — The worktree is locked against pruning/removal.
- **Locked Reason** — The reason supplied when locking (if any).
- **Prunable** — The worktree's directory is missing/stale and can be pruned.

## Workflows

### Add a New Worktree

1.  Select the **Worktree** panel using `< / >`.
2.  Press `n`.
3.  The **Add New Worktree** input popup appears:
    - **Worktree name** — The new worktree directory name (required).
    - **Branch name** — _Optional._ A local or remote branch to check out. Using `origin/<branch>` results in a **detached HEAD**.
4.  Press `enter` to create the worktree.

---

### Switch to a Worktree

1.  Select the target worktree using `↑/↓`.
2.  Press `enter`.

:::note
You cannot switch into the worktree you are already in, nor into a **prunable** (stale/missing) worktree.
:::

---

### Lock / Unlock a Worktree

Locking prevents a worktree from being pruned or removed.

1.  Select the target worktree using `↑/↓`.
2.  Press `o`.
    - If **unlocked**, a popup appears to enter an optional **lock reason**, then locks it.
    - If **locked**, it is unlocked immediately.

:::note
The **main worktree** cannot be locked or unlocked.
:::

---

### Remove a Worktree

1.  Select the target worktree using `↑/↓`.
2.  Press `backspace`.
3.  A confirmation popup appears showing the worktree path.
4.  Confirm to remove the worktree.

---

### Prune Worktrees

Cleans up administrative references for worktrees whose directories no longer exist (shown as **Prunable**).

1.  Select the **Worktree** panel.
2.  Press `ctrl+p`.
