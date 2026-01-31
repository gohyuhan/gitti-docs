---
sidebar_position: 6
---

# Logging & Debugging

Gitti provides a dedicated logging panel to help you troubleshoot issues or monitor Git operations in real-time.

## Accessing the Logging Panel

Press `/` to focus on the **Logging Panel**.

## Keybindings

| Key | Action      |
| :-- | :---------- |
| `e` | Export Logs |

## Features

### Log Export

You can export the current session logs to a file for external analysis or bug reporting.

1.  Focus on the logging panel with `/`.
2.  Press `e`.
3.  The log file will be saved to your system's **Downloads** folder.

### Configuration

You can customize the logging behavior using command-line flags:

- **Max Log Count**: Set the maximum number of log entries to keep in memory.

  ```bash
  gitti --max-log-count 1000
  ```

- **Show X Log**: Set the number of recent logs to display in the panel.
  ```bash
  gitti --show-x-log 50
  ```
