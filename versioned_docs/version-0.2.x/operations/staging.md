---
sidebar_position: 2
---

# Interactive Staging

Review and stage changes file-by-file or in bulk.

## Navigation

Press `2` to focus on the **Modified Files** panel.

## Keybindings

| Key      | Action                                       |
| :------- | :------------------------------------------- |
| `space`  | Toggle Stage/Unstage                         |
| `ctrl+s` | Stage All                                    |
| `ctrl+u` | Unstage All                                  |
| `r`      | Resolve Conflict (only for conflicted files) |
| `d`      | Discard Changes                              |
| `e`      | Edit File (Open in External Editor)          |
| `enter`  | View Diff                                    |

## Workflows

### Discarding Changes

Discarding changes involves a safety check to prevent accidental data loss.

1.  **Select**: Highlight the file you want to discard.
2.  **Trigger**: Press `d`.
3.  **Logic Flow**:
    - **Scenario A (Simple)**: File has changes only in working tree OR only in index.
      - **Popup**: "Confirm Discard".
    - **Scenario B (Complex)**: File has changes in BOTH working tree and index (staged and unstaged changes).
      - **Popup**: "Choose Discard Type" (Discard Whole or Discard Unstaged).
      - **Follow-up**: After choosing, a confirmation popup appears.
4.  **Confirm**: Press `enter` to confirm.

---

### Resolving Merge Conflicts

When Git cannot automatically merge changes (e.g., after pulling, merging branches, or switching branches with conflicts), affected files will be marked with a conflict status in the **Modified Files** panel.

1.  **Identify**: Conflicted files appear with a special indicator in the file list.
2.  **Select**: Highlight the conflicted file.
3.  **Trigger**: Press `r` to open the **Resolve Conflict** options popup.
4.  **Choose Resolution Strategy**:
    - **Restart merge for file**: Restores conflict markers in the file (discards any staged resolution). Use this if you want to manually edit the conflicts again.
    - **Accept local changes (ours)**: Keeps your current branch's version of the file, discarding incoming changes.
    - **Accept incoming changes (theirs)**: Accepts the other branch's version of the file, discarding your local changes.
5.  **Confirm**: Press `enter` to apply the selected resolution strategy.
6.  **Review**: The conflict is resolved. You can now stage and commit the file.

:::tip
After resolving a conflict, always review the file using `enter` to view the diff and ensure the resolution is correct before committing.
:::

---

### Viewing Diffs

1.  **Select**: Highlight a file.
2.  **Trigger**: Press `enter`.
3.  **Result**: The **Detail View** (Right Panel) updates to show the diff.
    - **Green**: Added lines.
    - **Red**: Deleted lines.

### Split View (Staged vs Unstaged)

When viewing changes that have both staged and unstaged changes, detail view will be splited to allowed comparison of staged and unstaged changes side-by-side.

- **Navigation**: Use `[` and `]` to toggle focus between the split panels or switch views.
- **Context**: Helpful when you have partially staged a file and want to see what's left.

### Editing Files

To make quick changes or open the file in your full IDE:

1.  **Select**: Highlight the file in the list.
2.  **Trigger**: Press `e`.
3.  **Action**: The file opens in your configured editor (e.g., Vim, VS Code) or the terminal default.
