---
sidebar_position: 2
---

# Installation

Gitti is built with Go and can be installed via `go install` or by downloading pre-built binaries.

## Prerequisites

- **Git**: Ensure Git is installed and available in your PATH.
- **Terminal**: A terminal emulator with true color support is recommended.

## Install via Go

If you have Go installed (version 1.21+ recommended):

```bash
go install github.com/gohyuhan/gitti@latest
```

Ensure your `$GOPATH/bin` is in your `$PATH` to run `gitti` from anywhere.

## Build from Source

1.  Clone the repository:
    ```bash
    git clone https://github.com/gohyuhan/gitti.git
    cd gitti
    ```

2.  Build the binary:
    ```bash
    go build -o gitti .
    ```

3.  Move to a directory in your PATH (optional):
    ```bash
    mv gitti /usr/local/bin/
    ```

## Verification

Run the following command to verify the installation:

```bash
gitti --version
```
