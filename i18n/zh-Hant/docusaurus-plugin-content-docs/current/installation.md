---
sidebar_position: 2
---

# 安裝

Gitti 使用 Go 構建，可以通過 `go install` 安裝，也可以下載預編譯的二進位檔案。

##以此為前提

- **Git**: 確保已安裝 Git 並將其添加到 PATH 中。
- **終端**: 建議使用支持真彩色 (True Color) 的終端模擬器。

## 通過 Go 安裝

如果您已安裝 Go（建議版本 1.21+）：

```bash
go install github.com/gohyuhan/gitti@latest
```

確保您的 `$GOPATH/bin` 在 `$PATH` 中，以便在任何地方運行 `gitti`。

## 從源碼構建

1.  克隆倉庫：
    ```bash
    git clone https://github.com/gohyuhan/gitti.git
    cd gitti
    ```

2.  構建二進位檔案：
    ```bash
    go build -o gitti .
    ```

3.  移動到 PATH 中的目錄（可選）：
    ```bash
    mv gitti /usr/local/bin/
    ```

## 驗證

運行以下命令以驗證安裝：

```bash
gitti --version
```
