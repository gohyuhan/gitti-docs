---
sidebar_position: 2
---

# 安装

Gitti 使用 Go 构建，可以通过 `go install` 安装，也可以下载预编译的二进制文件。

## 以此为前提

- **Git**: 确保已安装 Git 并将其添加到 PATH 中。
- **终端**: 建议使用支持真彩色 (True Color) 的终端模拟器。

## 通过 Go 安装

如果您已安装 Go（建议版本 1.21+）：

```bash
go install github.com/gohyuhan/gitti@latest
```

确保您的 `$GOPATH/bin` 在 `$PATH` 中，以便在任何地方运行 `gitti`。

## macOS

```bash
即将推出。
```

## Linux

```bash
即将推出。
```

## Windows

```bash
即将推出。
```

## 从源码构建

1.  克隆仓库：
    ```bash
    git clone https://github.com/gohyuhan/gitti.git
    cd gitti
    ```

2.  构建二进制文件：
    ```bash
    go build -o gitti .
    ```

3.  移动到 PATH 中的目录（非必要）：
    ```bash
    mv gitti /usr/local/bin/
    ```

## 验证

运行以下命令以验证安装：

```bash
gitti --version
```
