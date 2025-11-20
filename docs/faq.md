---
id: faq
title: Gitti FAQ – Git TUI (Terminal Interface)
slug: /faq
description: Frequently asked questions about Gitti, a fast, lightweight Git TUI (terminal interface) and visualized Git interface in your terminal.
---

# Gitti FAQ – Git TUI (Terminal Interface)

## What is Gitti?

Gitti is a **Git TUI (terminal user interface)** that gives you a **visualized Git interface** directly inside your terminal. It helps you browse branches, commits, diffs, and files without leaving the keyboard.

## What is a Git TUI (terminal interface)?

A **Git TUI (terminal interface)** is a text-based UI that runs in your terminal but behaves more like an application than plain `git` commands. Instead of typing long commands, you navigate with keys and see Git data laid out visually.

Gitti focuses on:

- Fast startup and low resource usage
- Clear, visual views of branches, commits, and changes
- A keyboard-driven workflow that stays in the terminal

## How is Gitti different from normal Git commands?

Traditional Git commands are powerful but hard to memorize and often require multiple commands to answer basic questions like:

- "What changed in this branch?"
- "Where did this commit come from?"
- "What files are staged vs unstaged?"

Gitti shows this information in a **single visual interface**. You still work in the terminal, but you see structured views instead of raw command output.

## Can Gitti replace my graphical Git client?

For many workflows, yes. Gitti aims to be a **visualized Git interface inside the terminal**, so you can:

- Inspect branches and commits
- Stage, unstage, and commit changes
- Review diffs

Some advanced or niche operations may still be easier with CLI or a full GUI, but Gitti covers the most common day‑to‑day Git tasks.

## Who is Gitti for?

Gitti is designed for:

- Developers who live in the terminal
- Users who want a **Git TUI** instead of a heavy GUI
- People who prefer keyboard-driven, fast workflows

If you often run `git` in a terminal and wish it were more visual, Gitti is for you.

## Which platforms does Gitti support?

Gitti is being built with **Go** and **Bubble Tea**, and is intended to run well on major platforms where you have a terminal:

- macOS
- Linux
- Windows (via a compatible terminal)

See the [Installation](./installation.md) page for the current installation instructions.

## How do I install Gitti?

Go to the [Installation](./installation.md) guide for the most up‑to‑date commands. In short, you can usually install Gitti via:

- `go install` (Go toolchain)
- Package managers (where available)

The docs keep the install commands current.

## Is Gitti open source?

Yes. Gitti is open source and hosted on GitHub. You can:

- Read and audit the source code
- Report reproducible bugs via GitHub issues

Visit the [Gitti repository](https://github.com/gohyuhan/gitti) for details.

## How does Gitti help with Git visualization?

Gitti focuses on **visualizing Git history and state in the terminal** by:

- Presenting commits and branches in structured views
- Highlighting the current branch and HEAD commit
- Showing staged vs unstaged changes clearly

This makes it easier to understand your repository at a glance compared to plain `git log` or `git status` output.

## How can I learn the keybindings?

Check the [Keybindings](./keybindings.md) page for a complete list. Many keys are inspired by popular terminal tools so they’re easy to remember.

## Where can I get help or give feedback?

- Read the [Docs](./intro.md)
- Open an issue on [GitHub](https://github.com/gohyuhan/gitti)

Feedback about usability, Git workflows, or new ideas for the **Git TUI** are especially welcome.
