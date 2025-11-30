---
sidebar_position: 3
---

# Committing Changes

Create and modify commits with a dedicated input interface.

## Keybindings

| Key | Action |
| :--- | :--- |
| `c` | Commit |
| `A` | Amend Commit |
| `ctrl+e` | Submit |
| `esc` | Cancel |
| `tab` | Next Field |
| `shift+tab` | Previous Field |

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
2.  **Popup**: The **Amend Commit Popup** opens, pre-filled with the *last* commit's message.
3.  **Modify**: Edit the message or simply submit to include new staged files.
4.  **Submit**: Press `ctrl+e`.
