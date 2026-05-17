---
sidebar_position: 5
---

# Gitti Configurations

## Language Switching

Gitti support i18n (internationalization), the supported language are EN(default), JA (Japanese), ZH-HANS (Simplified Chinese) and ZH-HANT (Traditional Chinese).  
To set the language of gitti you can run the following command

```bash
gitti --language JA
```

The `gitti` command follow by `--language` flag and the language code in capital

English: `EN`  
Japanese : `JA`  
Simplified Chinese: `ZH-HANS`  
Traditional Chinese: `ZH-HANT`

## Set Default Branch Naming for Git Init

You can set a default name for the branch when the repo was git initialized else it will be defaulting to use `master`  
To set the default branch name to be use when git init was triggered by gitti, run the following command

```bash
gitti --init-dbranch <BRANCH NAME>
```

replace `<BRANCH NAME>` with the name that you desire.

## Enable or disable auto updater

By default, gitti was configure to auto check for update and will prompt user when there is a newer version.  
If you wish to stay at current version you can choose not to update. And if you wish to disable auto updater completely
you can run the following command

```bash
gitti --auto-update false
```

and if you wish to enable auto updater, you can run

```bash
gitti --auto-updater true
```

## Set Preferred Editor

You can configure the editor that Gitti will use when opening files for editing (e.g., when pressing `e` on a file). The default editor is `vim`.

To set your preferred editor, run:

```bash
gitti --editor
```

## Configure Commit Log Limit

To improve performance in large repositories, Gitti limits the number of commit logs retrieved by default. You can configure this limit with the `--max-commit-log-count` flag (integer).

```bash
gitti --max-commit-log-count 500
```

## Configure Commit Graph

For very large repositories, Gitti uses a commit graph to speed up log retrieval. You can enable or disable the writing of the commit graph.

```bash
gitti --allow-commit-graph-write true
```

## Configure Logging Panel

Gitti includes a logging panel (accessible via `/`). You can configure the maximum number of logs kept in memory and how many are displayed in the UI.

**Set maximum logs to keep in memory:**

```bash
gitti --max-log-count 1000
```

**Set number of logs to show in the panel:**

```bash
gitti --show-x-log 50
```

## Configure Merge Strategy {#configure-merge-strategy}

When merging branches (via `m` in the Local Branches panel), you can control whether Gitti uses a fast-forward or non-fast-forward merge.

**Enable fast-forward merge** (uses `git merge --ff` — no merge commit if the branch can be fast-forwarded):

```bash
gitti --ff-merge true
```

**Enable non-fast-forward merge** (uses `git merge --no-ff` — always creates a merge commit):

```bash
gitti --ff-merge false
```

The default is `false` (non-fast-forward), which always generates a merge commit for a clear history of branch integrations.

## Configure RefLog Entry Limit

Gitti loads a configurable number of reflog entries into the RefLog panel. You can adjust this number with the `--max-ref-log-count` flag.

```bash
gitti --max-ref-log-count 2500
```

The default value is `2500` entries.

## Override Signing UI Suspend

By default, Gitti suspends its UI and drops into the terminal if a Git operation (like commit, tag, or revert) might require your GPG or SSH passphrase for signing. If your keys don't require manual input and you want to prevent Gitti from suspending the UI during these operations, you can override this behavior:

```bash
gitti --override-signing-ui-suspend true
```

To re-enable UI suspension (the default behavior):

```bash
gitti --override-signing-ui-suspend false
```
