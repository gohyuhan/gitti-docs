---
sidebar_position: 4
---

# Keybindings Reference

This page lists all available keybindings in Gitti, organized by context and scenario.

## Legend

- **`*`** = Global keybinding (works in all contexts when NO popup is open)
- **`* [!!]`** = Global keybinding that works **even when a popup is open**

## Global Keybindings

| Key | Marker | Action | Notes |
| :--- | :--- | :--- | :--- |
| `ctrl+c` | `* [!!]` | Quit Gitti | Force quit, works even in popups |
| `ctrl+s` | `* [!!]` | Stage All Files | Stages all modified files |
| `ctrl+u` | `* [!!]` | Unstage All Files | Unstages all staged files |
| `ctrl+g` | `* [!!]` | Open Author's GitHub | Opens browser to author's GitHub |
| `ctrl+l` | `* [!!]` | Open Author's LinkedIn | Opens browser to author's LinkedIn |
| `q` or `Q` | `*` | Quit Gitti | Only works when NO popup is open |
| `?` | `*` | Open Global Keybindings Help | Shows all keybindings in a popup |

## Component Navigation

| Key | Action | Notes |
| :--- | :--- | :--- |
| `1` | Focus Local Branches Panel | Switches focus to branch list |
| `2` | Focus Modified Files Panel | Switches focus to file list |
| `3` | Focus Stash Panel | Switches focus to stash list |
| `tab` | Cycle Forward Through Components | Moves to next panel |
| `shift+tab` | Cycle Backward Through Components | Moves to previous panel |

## List Navigation

| Key | Context | Action |
| :--- | :--- | :--- |
| `↑` or `k` | In any list panel | Move up / Select previous item |
| `↓` or `j` | In any list panel | Move down / Select next item |
| `↑` or `k` | In popup selection lists | Navigate to previous option |
| `↓` or `j` | In popup selection lists | Navigate to next option |

## Detail Panel Scrolling

| Key | Action | Context |
| :--- | :--- | :--- |
| `↑` or `k` | Scroll up | When in Detail Component |
| `↓` or `j` | Scroll down | When in Detail Component |
| `←` or `h` | Scroll left | When in Detail Component |
| `→` or `l` | Scroll right | When in Detail Component |

## Local Branches Panel

| Key | Action | When |
| :--- | :--- | :--- |
| `n` | Create New Branch | Opens branch creation flow |
| `enter` | Switch to Selected Branch | Opens switch branch popup if needed |
| `D` | Delete Selected Branch | Deletes branch (no confirmation) |
| `r` | Rename Selected Branch | Opens rename input popup |

## Modified Files Panel

| Key | Action | When |
| :--- | :--- | :--- |
| `space` | Toggle Stage/Unstage | Toggles file between staged and unstaged |
| `enter` | View File Diff | Shows diff in detail panel |
| `d` | Discard Changes | Opens discard confirmation flow |
| `s` | Stash Selected File | Opens stash message input popup |
| `S` | Stash All Files | Opens stash message input popup |
| `c` | Commit | Opens commit popup |
| `A` | Amend Commit | Opens amend commit popup |

## Stash Panel

| Key | Action | When |
| :--- | :--- | :--- |
| `space` | Apply Stash | Applies stash but keeps it in list |
| `backspace` | Pop Stash | Applies stash and removes from list |
| `d` | Drop Stash | Permanently deletes stash |

## Remote Operations

| Key | Action | When |
| :--- | :--- | :--- |
| `p` | Push | Opens push flow (remote selection →  push options) |
| `P` | Pull | Opens pull flow (pull type selection) |

## Popup Keybindings

### Text Input Popups
*Applies to: Commit, Amend Commit, Add Remote, Create Branch, Stash Message*

| Key | Action | Notes |
| :--- | :--- | :--- |
| `ctrl+e` | Submit | Submits the form (used for multi-line text areas) |
| `enter` | Submit | FOR single-line inputs only (branch name, stash message, remote fields) |
| `esc` | Cancel | Closes popup without saving |
| `tab` | Next Field | Moves to next input field (if multiple fields exist) |
| `shift+tab` | Previous Field | Moves to previous input field (if multiple fields exist) |

---

### Selection Popups
*Applies to: Branch Type, Switch Type, Push Type, Pull Type, Remote Selection, Discard Type*

| Key | Action | Notes |
| :--- | :--- | :--- |
| `↑` or `k` | Navigate Up | Select previous option |
| `↓` or `j` | Navigate Down | Select next option |
| `enter` | Confirm Selection | Proceeds with selected option |
| `esc` | Cancel | Closes popup without action |

---

### Output/Result Popups
*Applies to: Push Output, Pull Output, Switch Branch Output*

| Key | Action | Notes |
| :--- | :--- | :--- |
| `esc` | Close Popup | Dismisses the output popup |

---

### Keybinding Help Popup

| Key | Action | Notes |
| :--- | :--- | :--- |
| `↑` or `k` | Scroll Up | Scroll through keybinding list |
| `↓` or `j` | Scroll Down | Scroll through keybinding list |
| `esc` | Close Help | Close the help popup |

## Detail View (Right Panel)

| Key | Action | Notes |
| :--- | :--- | :--- |
| `esc` | Return to List | Exits detail view, returns focus to list panel |
| `↑` or `k` | Scroll Up | Scroll diff content up |
| `↓` or `j` | Scroll Down | Scroll diff content down |
| `←` or `h` | Scroll Left | Scroll diff content left |
| `→` or `l` | Scroll Right | Scroll diff content right |

## Summary

- **`* [!!]`** keybindings work everywhere, including inside popups
- **`*`** keybindings work globally but NOT when a popup is open
- **Context-specific keybindings** only work in their respective panels
- **Popup keybindings** depend on popup type (text input vs selection vs output)
- **`esc`** is the universal way to close popups or exit detail view
