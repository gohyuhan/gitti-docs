---
sidebar_position: 2
---

# Interactive Staging

Review and stage changes file-by-file or in bulk.

## Navigation
Press `2` to focus on the **Modified Files** panel.

## Keybindings

| Key | Action |
| :--- | :--- |
| `space` | Toggle Stage/Unstage |
| `ctrl+s` | Stage All |
| `ctrl+u` | Unstage All |
| `d` | Discard Changes |
| `enter` | View Diff |

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

### Viewing Diffs

1.  **Select**: Highlight a file.
2.  **Trigger**: Press `enter`.
3.  **Result**: The **Detail View** (Right Panel) updates to show the diff.
    - **Green**: Added lines.
    - **Red**: Deleted lines.
