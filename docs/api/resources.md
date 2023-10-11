---
title: 资源相关
icon: video-camera
---

::: warning 注意
对于 Shamrock 尚未实现的 API，会在标题添加标记 <Badge text="未实现" type="danger" vertical="baseline" />
:::

## 获取图片

该接口用于获取图片，只能获取已缓存的图片。

### API 端点

`/get_image`

### 参数

| 字段   | 类型       | 必须  | 说明     |
|------|----------|-----|--------|
| file | `string` | 是   | 文件 MD5 |

### 响应

| 字段       | 类型       | 说明     |
|----------|----------|--------|
| size     | `int64`  | 文件大小   |
| url      | `string` | 文件 URL |
| filename | `string` | 文件 名称  |

## 检查是否可以发送图片 <Badge text="未实现" type="danger" />

该接口用于检查是否可以发送图片。

## 图片 OCR <Badge text="未实现" type="danger" />

该接口用于图片 OCR。

## 获取语音

该接口用于获取语音。

### API 端点

`/get_record`

### 参数

| 字段       | 类型     | 必须 | 说明     |
| ---------- | -------- | ---- | -------- |
| file       | `string` | 是   | 文件 MD5 |
| out_format | `string` | 是   | 输出格式 |

### 响应

| 字段 | 类型     | 说明     |
| ---- | -------- | -------- |
| file | `string` | 文件路径 |
| url  | `string` | 文件 URL |

## 检查是否可以发送语音 <Badge text="未实现" type="danger" />

该接口用于检查是否可以发送语音。

## 获取文件 <Badge text="未实现" type="danger" />

该接口用于获取文件。

## 获取视频 <Badge text="未实现" type="danger" />

该接口用于获取视频。

## 获取缩略图 <Badge text="未实现" type="danger" />

该接口用于获取缩略图。
