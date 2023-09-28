---
title: 快速开始
icon: rocket
---

::: warning 注意
Shamrock 的更新会围绕一个稳定的版本，如果盲目升级，可能导致 Shamrock 不可用。  
Shamrock 仍然处于快速开发阶段，可能会有大量API在未来版本中被删除或修改。  
请不要过度依赖实验室中的功能，以免造成不必要的损失。
:::

## 下载

::: tip 提示
Shamrock 仅支持 arm64 架构的设备，其他架构的设备可尝试使用 QEMU 或转译器。  
因为 QQ 客户端 只有 arm64 架构的版本，所以 Shamrock 也只支持 arm64 架构的设备。
:::

### 稳定版本

- 要下载 Shamrock 的稳定版本，请访问 [GitHub Releases](https://github.com/linxinrao/Shamrock/releases)

### 开发版本

- 要下载 Shamrock 的开发版本，请访问 [GitHub Actions](https://github.com/linxinrao/Shamrock/actions/workflows/build-apk.yml)

## 部署

::: warning 注意
如果您使用了 QRSpeed/ShamrockNative 有关的插件，请确保 Shamrock 存活。  
无论什么情况都请确保 QQ 客户端 存活。  
禁止对 QQ 客户端 隐藏 Shamrock，这将导致无法运行。  
首次启动，必须打开 Shamrock，否则无法推送配置文件导致失败。
:::

### 有 Root 环境

- 安装版本不低于 `8.9.68` 且不高于 `8.9.80` 的 QQ 客户端
- 打开 QQ 客户端，登录你的 QQ 账号
- 安装 Shamrock 并在 Xposed 启用 Shamrock 模块
- `重新启动 QQ 客户端` 或 `重新启动你的手机`
- 打开 Shamrock，并打开 QQ 客户端，此时 Shamrock 会显示已激活

### 无 Root 环境

#### 使用 LSPatch

- 使用 LSPatch 加载 QQ 客户端，并启用 Shamrock 模块
- 同时安装 Shamrock 和通过 LSPatch 修补的 QQ 客户端
- 其他步骤同有 Root 环境

#### 使用 VirtualXposed

::: warning 注意
在 Android 12 以上的系统中，使用 VirtualXposed 会导致闪退。
:::

#### 使用 太极

::: warning 注意
暂不支持太极使用，正在申请。
:::
