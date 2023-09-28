---
title: 群聊相关
icon: user-group
---

::: warning 注意
对于 Shamrock 尚未实现的 API，会在标题添加标记 <Badge text="未实现" type="danger" vertical="baseline" />
:::

## 设置群名

该接口用于设置群名。

### API 端点

`/set_group_name`

### 参数

| 字段       | 类型     | 必须 | 说明 |
| ---------- | -------- | ---- | ---- |
| group_id   | `int64`  | 是   | 群号 |
| group_name | `string` | 是   | 群名 |

### 响应

该接口将返回处理结果。

## 设置群头像 <Badge text="未实现" type="danger" />

该接口用于设置群头像。

## 设置群管理员

该接口用于设置群管理员。

### API 端点

`/set_group_admin`

### 参数

| 字段     | 类型    | 必须 | 说明     |
| -------- | ------- | ---- | -------- |
| group_id | `int64` | 是   | 群号     |
| user_id  | `int64` | 是   | QQ 号    |
| enable   | `bool`  | 是   | 是否设置 |

### 响应

该接口将返回处理结果。

## 设置群备注 <Badge text="未实现" type="danger" />

该接口用于设置群备注。

## 设置群组专属头衔

该接口用于设置群组专属头衔。

### API 端点

`/set_group_special_title`

### 参数

| 字段          | 类型     | 必须 | 说明  |
| ------------- | -------- | ---- | ----- |
| group_id      | `int64`  | 是   | 群号  |
| user_id       | `int64`  | 是   | QQ 号 |
| special_title | `string` | 是   | 头衔  |

### 响应

该接口将返回处理结果。

::: warning 注意
该api可能返回了例子响应中没有的参数，请不要作为参考使用。
:::

## 群单人禁言

该接口用于群单人禁言。

### API 端点

`/set_group_ban`

### 参数

::: tip 提示
当 `duration` 为 `0` 时，将解除禁言。
:::

| 字段     | 类型    | 必须 | 说明     |
| -------- | ------- | ---- | -------- |
| group_id | `int64` | 是   | 群号     |
| user_id  | `int64` | 是   | QQ 号    |
| duration | `int64` | 是   | 禁言时长 |

### 响应

该接口将返回处理结果。

## 群全员禁言

该接口用于群全员禁言。

### API 端点

`/set_group_whole_ban`

### 参数

| 字段     | 类型    | 必须 | 说明     |
| -------- | ------- | ---- | -------- |
| group_id | `int64` | 是   | 群号     |
| enable   | `bool`  | 是   | 是否禁言 |

### 响应

该接口将返回处理结果。

## 设置精华消息 <Badge text="未实现" type="danger" />

该接口用于设置精华消息。

## 移出精华消息 <Badge text="未实现" type="danger" />

该接口用于移出精华消息。

## 群打卡 <Badge text="未实现" type="danger" />

该接口用于群打卡。

## 发送群公告 <Badge text="未实现" type="danger" />

该接口用于发送群公告。

## 获取群公告 <Badge text="未实现" type="danger" />

该接口用于获取群公告。

## 群组踢人

该接口用于群组踢人。

### API 端点

`/set_group_kick`

### 参数

| 字段               | 类型    | 必须 | 说明             |
| ------------------ | ------- | ---- | ---------------- |
| group_id           | `int64` | 是   | 群号             |
| user_id            | `int64` | 是   | QQ 号            |
| reject_add_request | `bool`  | 否   | 是否拒绝再次加群 |

### 响应

该接口将返回处理结果。

## 退出群组

该接口用于退出群组。

### API 端点

`/set_group_leave`

### 参数

| 字段     | 类型    | 必须 | 说明     |
| -------- | ------- | ---- | -------- |
| group_id | `int64` | 是   | 群号     |

### 响应

该接口将返回处理结果。

## 群戳一戳

该接口用于群戳一戳。

### API 端点

`/group_touch`

### 参数

| 字段     | 类型    | 必须 | 说明     |
| -------- | ------- | ---- | -------- |
| group_id | `int64` | 是   | 群号     |
| user_id  | `int64` | 是   | QQ 号    |

### 响应

该接口将返回处理结果。



