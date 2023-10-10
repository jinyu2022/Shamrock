---
title: 联系人相关
icon: address-book
---

::: warning 注意
对于 Shamrock 尚未实现的 API，会在标题添加标记 <Badge text="未实现" type="danger" vertical="baseline" />
:::

## 获取陌生人信息

该接口用于获取陌生人的信息。

### API 端点

`/get_stranger_info`

### 参数

| 字段    | 类型    | 必须 | 说明  |
| ------- | ------- | ---- | ----- |
| user_id | `int64` | 是   | QQ 号 |

### 响应

::: warning 注意
该 API 可能会返回不存在于以下表格中的字段，请不要作为参考使用。
:::

| 字段     | 类型     | 说明  |
| -------- | -------- | ----- |
| user_id  | `int64`  | QQ 号 |
| nickname | `string` | 昵称  |
| age      | `int`    | 年龄  |
| sex      | `string` | 性别  |

## 获取好友列表

该接口用于获取好友列表。

### API 端点

`/get_friend_list`

### 参数

::: tip 提示
该接口无输入参数，除 `refresh` 参数决定是否刷新数据。可能不是立即生效。
:::

### 响应

::: tip 提示
该接口返回的数据为数组，每个元素为一个好友的信息。
:::

| 字段             | 类型     | 说明     |
| ---------------- | -------- | -------- |
| user_id          | `int64`  | QQ 号    |
| user_name        | `string` | 昵称     |
| user_displayname | `string` | 显示名   |
| user_remark      | `string` | 备注     |
| age              | `int`    | 年龄     |
| gender           | `int`    | 性别     |
| group_id         | `int64`  | 分组 ID  |
| platform         | `string` | 平台     |
| term_type        | `string` | 终端类型 |

## 获取单向好友列表 <Badge text="未实现" type="danger" />

该接口用于获取单向好友列表。

## 获取群信息

该接口用于获取群信息。

### API 端点

`/get_group_info`

### 参数

| 字段     | 类型    | 必须 | 说明 |
| -------- | ------- | ---- | ---- |
| group_id | `int64` | 是   | 群号 |

### 响应

::: warning 注意
该 API 可能会返回不存在于以下表格中的字段，请不要作为参考使用。
:::

| 字段             | 类型      | 说明       |
| ---------------- | --------- | ---------- |
| group_id         | `int64`   | 群号       |
| group_name       | `string`  | 群名称     |
| group_remark     | `string`  | 群备注     |
| group_uin        | `int64`   | 群 Uin     |
| admins           | `int64[]` | 管理员列表 |
| class_text       | `string`  | 群分类     |
| is_frozen        | `bool`    | 是否冻结   |
| max_member       | `int`     | 最大成员数 |
| max_member_count | `int`     | 最大成员数 |
| member_num       | `int`     | 成员数量   |
| member_count     | `int`     | 成员数量   |

## 获取群列表

该接口用于获取群列表。

### API 端点

`/get_group_list`

### 响应

::: tip 提示
该接口返回的数据为数组，每个元素为一个群的信息。
:::

| 字段             | 类型      | 说明       |
| ---------------- | --------- | ---------- |
| group_id         | `int64`   | 群号       |
| group_name       | `string`  | 群名称     |
| group_remark     | `string`  | 群备注     |
| group_uin        | `int64`   | 群 Uin     |
| admins           | `int64[]` | 管理员列表 |
| class_text       | `string`  | 群分类     |
| is_frozen        | `bool`    | 是否冻结   |
| max_member       | `int`     | 最大成员数 |
| max_member_count | `int`     | 最大成员数 |
| member_num       | `int`     | 成员数量   |
| member_count     | `int`     | 成员数量   |

## 获取群成员信息

该接口用于获取群成员信息。

### API 端点

`/get_group_member_info`

### 参数

| 字段     | 类型    | 必须 | 说明  |
| -------- | ------- | ---- | ----- |
| group_id | `int64` | 是   | 群号  |
| user_id  | `int64` | 是   | QQ 号 |

### 响应

| 字段              | 类型     | 说明               |
| ----------------- | -------- | ------------------ |
| user_id           | `int64`  | QQ 号              |
| group_id          | `int64`  | 群号               |
| user_name         | `string` | 昵称               |
| sex               | `string` | 性别               |
| title             | `string` | 专属头衔           |
| title_expire_time | `int64`  | 专属头衔过期时间戳 |
| nickname          | `string` | 群昵称             |
| user_displayname  | `string` | 显示名             |
| distance          | `int`    | 距离               |
| honor             | `int[]`  | 群荣誉             |
| join_time         | `int64`  | 入群时间           |
| last_active_time  | `int64`  | 最后发言时间       |
| last_sent_time    | `int64`  | 最后发言时间       |
| unique_name       | `string` | 群头衔             |
| area              | `string` | 地区               |
| level             | `string` | 成员等级           |
| role              | `string` | 角色               |
| unfriendly        | `bool`   | 是否不良记录成员   |
| card_changeable   | `bool`   | 是否允许修改群名片 |

## 获取群成员列表

该接口用于获取群成员列表。

### API 端点

`/get_group_member_list`

### 参数

| 字段     | 类型    | 必须 | 说明 |
| -------- | ------- | ---- | ---- |
| group_id | `int64` | 是   | 群号 |

### 响应

::: tip 提示
该接口返回的数据为数组，每个元素为一个群成员的信息。
:::

| 字段              | 类型     | 说明               |
| ----------------- | -------- | ------------------ |
| user_id           | `int64`  | QQ 号              |
| group_id          | `int64`  | 群号               |
| user_name         | `string` | 昵称               |
| sex               | `string` | 性别               |
| title             | `string` | 专属头衔           |
| title_expire_time | `int64`  | 专属头衔过期时间戳 |
| nickname          | `string` | 群昵称             |
| user_displayname  | `string` | 显示名             |
| distance          | `int`    | 距离               |
| honor             | `int[]`  | 群荣誉             |
| join_time         | `int64`  | 入群时间           |
| last_active_time  | `int64`  | 最后发言时间       |
| last_sent_time    | `int64`  | 最后发言时间       |
| unique_name       | `string` | 群头衔             |
| area              | `string` | 地区               |
| level             | `string` | 成员等级           |
| role              | `string` | 角色               |
| unfriendly        | `bool`   | 是否不良记录成员   |
| card_changeable   | `bool`   | 是否允许修改群名片 |

## 获取群荣誉信息

该接口用于获取群荣誉信息。

### API 端点

`/get_group_honor_info`

### 参数

| 字段     | 类型    | 必须 | 说明 |
| -------- | ------- | ---- | ---- |
| group_id | `int64` | 是   | 群号 |

### 响应

| 字段               | 类型                         | 说明       |
| ------------------ | ---------------------------- | ---------- |
| group_id           | `int64`                      | 群号       |
| current_talkative  | [HonorInfo](#honorinfo)      | 当前龙王   |
| talkative_list     | [HonorInfo](#honorinfo) 列表 | 历史龙王   |
| performer_list     | [HonorInfo](#honorinfo) 列表 | 群聊之火   |
| legend_list        | [HonorInfo](#honorinfo) 列表 | 群聊炽焰   |
| strong_newbie_list | [HonorInfo](#honorinfo) 列表 | 冒尖小春笋 |
| emotion_list       | [HonorInfo](#honorinfo) 列表 | 快乐之源   |
| all                | [HonorInfo](#honorinfo) 列表 | 全部荣誉   |

### HonorInfo

| 字段        | 类型     | 说明     |
| ----------- | -------- | -------- |
| user_id     | `int64`  | QQ 号    |
| nickname    | `string` | 昵称     |
| avatar      | `string` | 头像链接 |
| day_count   | `int`    | 持续天数 |
| id          | `int`    | ID       |
| description | `string` | 描述     |

## 获取群系统消息 <Badge text="未实现" type="danger" />

该接口用于获取群系统消息。

## 获取精华消息列表 <Badge text="未实现" type="danger" />

该接口用于获取精华消息列表。

## QQ是否在黑名单内

获取好友/陌生人是否处于黑名单列表。

### API 端点

`/is_blacklist_uin`

### 参数

| 字段     | 类型    | 必须 | 说明 |
| -------- | ------- | ---- | ---- |
| user_id | `int64` | 是   | QQ |

### 响应

| 字段        | 类型     | 说明     |
| ----------- | -------- | -------- |
| is     | `bool`  | 是否是黑名单    |
