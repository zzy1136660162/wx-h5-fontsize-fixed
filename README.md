# 介绍

### 关于

本组件库由有爱开发团队开发，解决微信页面被老人机字体调整大小特别丑的痛点

### 特性

- 防止老人机字体过大
- 老人机样式混乱
- 注意：只在微信公众号中起作用
- 依赖于vue框架
- 更新-2023-02-19 14:56:03

## 使用方法

### 引入

```js
import Vue from 'vue';
import {FontsizeFixed} from 'wx-h5-fontsize-fixed';

Vue.use(FontsizeFixed);
```

## 代码演示

### 基础用法

```html

<fontsize-fixed>{{slot}}</fontsize-fixed>
```

## API

### Slots

| 名称      | 说明   |
|---------|------|
| default | 默认插槽 |
