---
title: 账号相关
icon: user
---

::: warning 注意
对于 Shamrock 尚未实现的 API，会在标题添加标记 <Badge text="未实现" type="danger" vertical="baseline" />
:::

## 获取登录号信息

该接口用于获取 QQ 用户的登录号信息。

### API 端点

`/get_login_info`

### 响应

| 字段    | 类型     | 说明     |
| ------- | -------- | -------- |
| uin     | `int64`  | QQ 号    |
| isLogin | `bool`   | 是否登陆 |
| nick    | `string` | 昵称     |

## 设置 QQ 个人资料

该接口用于设置 QQ 用户的个人资料信息。

### API 端点

`/set_qq_profile`

### 参数

| 字段          | 类型     | 必须 | 说明                     |
| ------------- | -------- | ---- | ------------------------ |
| nickname      | `string` | 是   | 昵称                     |
| company       | `string` | 是   | 公司                     |
| email         | `string` | 是   | 邮箱                     |
| college       | `string` | 是   | 大学                     |
| personal_note | `string` | 是   | 个人备注                 |
| age           | `int`    | 否   | 年龄                     |
| birthday      | `string` | 否   | 生日（格式：YYYY-MM-DD） |

### 响应

该接口将返回处理结果。

## 获取在线机型

该接口用于获取 QQ 在线机型。

### API 端点

`/_get_model_show`

### 参数

| 字段  | 类型     | 必须 | 说明 |
| ----- | -------- | ---- | ---- |
| model | `string` | 是   | 机型 |

### 响应

| 字段     | 类型                             | 说明     |
| -------- | -------------------------------- | -------- |
| variants | [ModelDetail](#modeldetail) 列表 | 机型列表 |

### ModelDetail

| 字段       | 类型     | 说明         |
| ---------- | -------- | ------------ |
| model_show | `string` | 机型名称     |
| need_pay   | `bool`   | 是否需要付费 |

## 设置在线机型

该接口用于设置 QQ 在线机型。

### API 端点

`/_set_model_show`

### 参数

| 字段  | 类型     | 必须 | 说明 |
| ----- | -------- | ---- | ---- |
| model | `string` | 是   | 机型 |

### 响应

该接口将返回处理结果。

## 获取当前账号在线客户端列表 <Badge text="未实现" type="danger" />

该接口用于获取当前账号在线客户端列表。

### API 端点

`/get_online_clients`

### 响应

| 字段 | 类型 | 说明 |
| ---- | ---- | ---- |
| N/A  | N/A  | N/A  |
