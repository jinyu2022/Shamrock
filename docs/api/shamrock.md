---
title: Shamrock接口
icon: feather-alt
---

## 

## 获取手机电池信息

### API 端点

`/get_device_battery`

### 响应

```json
{
  "battery": 44,
  "scale": 3102000,
  "status": 2
}
```

## 获取Shamerock启动时间

### API 端点

`/get_start_time`

### 请求类型

`POST` | `GET` | `不支持WS`

### 响应

```json
{
  "status": "ok",
  "retcode": 0,
  "data": 1696749716155
}
```

## 获取Shamrock日志

### API 端点

`/log`

### 请求类型

`POST` | `GET` | `不支持WS`

### 参数

| 字段   | 类型    | 必须 | 说明                 | 默认值 |
| ------ | ------- | ---- | -------------------- | ------ |
| start  | int32 | 否   | 开始的行             |        |
| recent | bool  | 否   | 是否只显示最近的日志 | false  |

### 响应

```json
{
  "status": "ok",
  "retcode": 0,
  "data": 1696749716155
}
```

## 关闭Shamrock

### API 端点

`/shut`

### 请求类型

`POST` | `GET` | `不支持WS`

### 响应

无响应
