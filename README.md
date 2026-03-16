# 苏州话教学网站

一个用于学习苏州话的在线教学平台，提供词汇学习、音频播放等功能。

## 项目简介

本项目旨在为苏州话学习者提供一个简单、有效的学习平台，帮助大家快速掌握苏州话的基础词汇和日常用语。

## 功能特点

- 首页介绍和导航
- 词汇学习页面（40个精选词汇）
- 分类浏览（问候语、数字、常用词汇）
- 音频播放功能（标准发音和慢速发音）
- 响应式设计，支持手机和电脑访问
- 苏州风格视觉设计

## 技术栈

- 后端：Node.js + Express
- 前端：HTML + CSS + JavaScript
- 数据存储：JSON 文件

## 项目结构

```
suzhou-dialect/
├── public/                 # 静态文件
│   ├── index.html         # 首页
│   ├── vocabulary.html    # 词汇学习页面
│   ├── css/
│   │   └── style.css     # 样式文件
│   ├── js/
│   │   ├── main.js       # 主要 JavaScript
│   │   └── vocabulary.js # 词汇页面逻辑
│   └── audio/            # 音频文件目录
│       ├── greetings/    # 问候语音频
│       ├── numbers/      # 数字音频
│       └── common/       # 常用词汇音频
├── data/
│   └── vocabulary.json   # 词汇数据
├── server.js             # Express 服务器
├── package.json          # 项目配置
└── README.md            # 项目说明
```

## 安装和运行

### 安装依赖

```bash
cd /home/user/.trae-cn/suzhou-dialect
npm install
```

### 启动服务器

```bash
node server.js
```

服务器将在 http://localhost:3000 启动

### 访问网站

在浏览器中打开：
- 首页：http://localhost:3000
- 词汇学习：http://localhost:3000/vocabulary

## 音频文件说明

音频文件需要按照以下命名规范放置在 `public/audio/` 目录下：

```
audio/
├── greetings/
│   ├── hello_standard.mp3
│   ├── hello_slow.mp3
│   └── ...
├── numbers/
│   ├── one_standard.mp3
│   ├── one_slow.mp3
│   └── ...
└── common/
    ├── father_standard.mp3
    ├── father_slow.mp3
    └── ...
```

每个词汇需要录制两个版本：
- `standard`：标准发音（正常语速）
- `slow`：慢速发音（帮助学习者）

## 录音指南

### 设备要求
- 麦克风：USB麦克风或专业麦克风
- 耳机：避免回音
- 环境：安静的房间

### 录音软件
- 推荐：Audacity（免费）
- 格式：WAV 或 FLAC（无损）
- 采样率：44.1kHz 或 48kHz
- 位深度：24-bit

### 录音注意事项
- 发音清晰、自然
- 保持麦克风距离10-15cm
- 每个词汇后停顿2秒
- 不满意可以重录

## API 接口

### 获取所有词汇
```
GET /api/vocabulary
```

### 获取指定分类的词汇
```
GET /api/vocabulary?category=greetings
```

分类选项：
- `greetings`：问候语
- `numbers`：数字
- `common`：常用词汇

### 获取所有分类
```
GET /api/categories
```

## 开发计划

### Phase 1 - MVP（已完成）
- 首页和词汇学习页面
- 40个精选词汇
- 音频播放功能
- 响应式设计

### Phase 2 - 功能扩展
- 语法讲解
- 练习测试功能
- 对话练习
- 用户系统

### Phase 3 - 高级功能
- 视频教程
- 社区互动
- 移动应用

## 贡献指南

欢迎贡献词汇、音频文件或功能建议！

## 许可证

ISC

## 联系方式

如有问题或建议，请联系项目维护者。

---

传承吴语文化，弘扬江南文明。
