# HTML5-Demo 🎮

> 纯前端交互式 Demo 合集 · 无需后端 · 单文件即可运行

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=githubpages)](https://alen2022-sun.github.io/HTML5-Demo/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌐 在线访问

**https://alen2022-sun.github.io/HTML5-Demo/**

## 📁 项目结构
HTML5-Demo/
├── index.html # 导航首页（自动读取 files.json）
├── files.json # 作品清单（新增文件只改这里）
├── favicon.svg # 网站图标
├── README.md
└── source/ # 所有独立 HTML Demo
├── china_map.html
├── Chinese-geo.html
├── Defense-tower.html
├── engine.html
├── LumenOS.html
├── shot-gun-1.html
├── shot-gun-2.html
├── shot-gun-3.html
└── The-Matrix.html

## 🎯 作品列表

| # | 作品 | 描述 | 标签 |
|---|------|------|------|
| 1 | [中国地图交互](https://alen2022-sun.github.io/HTML5-Demo/source/china_map.html) | SVG 中国地图，支持省份高亮、缩放平移、多套主题切换 | 地图/SVG |
| 2 | [中国地形·三维交互图谱](https://alen2022-sun.github.io/HTML5-Demo/source/Chinese-geo.html) | WebGL 三维地形可视化，展示三级阶梯、水系山脉 | 地形/Three.js |
| 3 | [暗区防线·塔防](https://alen2022-sun.github.io/HTML5-Demo/source/Defense-tower.html) | 2.5D 战术塔防游戏，含多种防御塔与敌人波次 | 塔防/游戏 |
| 4 | [直列四缸发动机](https://alen2022-sun.github.io/HTML5-Demo/source/engine.html) | Three.js 发动机 3D 拆解，可调速观察机械运转 | 机械/3D |
| 5 | [Lumen OS](https://alen2022-sun.github.io/HTML5-Demo/source/LumenOS.html) | 毛玻璃拟物化桌面操作系统概念界面 | UI/概念 |
| 6 | [SHOTGUN APOCALYPSE v1](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-1.html) | 第一人称射击生存游戏，WebGL 渲染 | FPS/射击 |
| 7 | [SHOTGUN APOCALYPSE v2](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-2.html) | 升级版 FPS，电影级后处理与武器升级 | FPS/射击 |
| 8 | [SHOTGUN APOCALYPSE v3](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-3.html) | 最终版，完整 UI、设置面板与成就系统 | FPS/生存 |
| 9 | [HACK TERMINAL](https://alen2022-sun.github.io/HTML5-Demo/source/The-Matrix.html) | 黑客终端模拟器，Matrix 代码雨背景 | 终端/动画 |

## 🚀 新增作品流程

1. 将新的 HTML 文件放入 `source/` 目录
2. 编辑 `files.json`，添加一条记录：

json
{
"file": "source/your-file.html",
"title": "作品标题",
"desc": "简短描述",
"icon": "🎯",
"tags": ["标签1", "标签2"]
}

3. Push 到 GitHub，自动生效

## 🛠️ 技术栈

- HTML5 / CSS3 / JavaScript (ES6+)
- SVG / Canvas / WebGL (Three.js)
- GitHub Pages 静态托管
- 零依赖，纯前端运行

## 📄 License

MIT
