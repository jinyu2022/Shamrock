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
目前推荐您下载 开发版本 的 Shamrock
:::

### 稳定版本

- 要下载 Shamrock 的稳定版本，请访问 [GitHub Releases](https://github.com/linxinrao/Shamrock/releases)

### 开发版本

- 要下载 Shamrock 的开发版本，请访问 [GitHub Actions](https://github.com/linxinrao/Shamrock/actions/workflows/build-apk.yml)

## 部署

::: warning 注意
请使用Shamrock兼容的QQ客户端部署，见 [支持的QQ版本](https://linxinrao.github.io/Shamrock/guide/faq.html#支持的qq版本)
如果您使用了 QRSpeed/ShamrockNative 有关的插件，请确保 Shamrock 存活。  
无论什么情况都请确保 QQ 客户端 存活。  
禁止对 QQ 客户端 隐藏 Shamrock，这将导致无法运行。  
首次启动，必须打开 Shamrock，否则无法推送配置文件导致失败。
:::

### 有 XP 环境

- 打开 QQ 客户端，登录你的 QQ 账号
- 安装 Shamrock 并在 Xposed 启用 Shamrock 模块，如果使用 LSPosed 则需要勾选模块作用域(默认QQ)
- 启动 Shamrock 并`重新启动 QQ 客户端`，如果环境为 Xposed 则需要重启手机
- 此时 Shamrock 会显示已激活

### 无 Root 环境

#### 使用 LSPatch

- 打开 LSPatch 并在`管理`页面选择 `+` 新建修补，可以选择从存储目录选择QQAPK或者直接使用已经安装过的QQ
- 修补模式默认且应该优先选择`本地模式`，这样方便直接更新 Shamrock 模块而不用重新修补，缺点是需要 LSPatch 保持后台运行
- 其他配置保持默认，然后点击`开始修补`，修补完成后会提示安装(如果已经安装会提示卸载)
- 安装 Shamrock 模块后在`管理`页面点击修补好的 QQ 选择`模块作用域` 勾选上 Shamrock 模块然后保存
- 启动 Shamrock 并`重新启动 QQ 客户端`
- 此时 Shamrock 会显示已激活

::: warning 注意
使用`本地模式`修补后需要保持LSPatch在后台运行，优点是模块更新无需重新修补QQ
使用`集成模式`修补后无需保持LSPatch在后台运行，缺点是模块更新后需要重新修补QQ
:::

#### 使用 VirtualXposed

::: warning 注意
在 Android 12 以上的系统中，使用 VirtualXposed 会导致闪退。
:::

#### 使用 太极

::: warning 注意
暂不支持太极使用，正在申请。
:::
