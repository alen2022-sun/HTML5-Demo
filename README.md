# HTML5-Demo 🎮

> 纯前端交互式 Demo 合集 · 无需后端 · 单文件即可运行

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=githubpages)](https://alen2022-sun.github.io/HTML5-Demo/)
[![Sync README](https://github.com/alen2022-sun/HTML5-Demo/actions/workflows/sync-readme.yml/badge.svg)](https://github.com/alen2022-sun/HTML5-Demo/actions/workflows/sync-readme.yml)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌐 在线访问

**https://alen2022-sun.github.io/HTML5-Demo/**

导航首页 `index.html` 与下面的作品表格 **共用同一份 [`files.json`](files.json)** 作为数据源，不存在两处手动维护。

## 📁 项目结构

```
HTML5-Demo/
├── index.html                      # 导航首页（前端读取 files.json 渲染卡片）
├── files.json                      # 唯一数据源 ★ 新增作品只改这里
├── favicon.svg                     # 网站图标
├── README.md                       # 本文件（表格区块自动生成）
├── scripts/
│   └── gen-readme.mjs              # 由 files.json 生成 README 表格区块
├── .github/workflows/
│   └── sync-readme.yml             # push 后自动重生成并回写 README
└── source/                         # 所有独立 HTML Demo
    ├── china_map.html
    ├── Chinese-geo.html
    ├── Defense-tower.html
    ├── engine.html
    ├── LumenOS.html
    ├── shot-gun-1.html
    ├── shot-gun-2.html
    ├── shot-gun-3.html
    └── The-Matrix.html
```

## 🎯 作品列表

<!-- DEMOS:START -->
> 本区块由 `scripts/gen-readme.mjs` 依据 `files.json` 自动生成，请勿手动编辑。

共 **10** 个作品 · 数据源 [`files.json`](files.json) · 导航首页 [`index.html`](index.html) 同源

| # | 作品 | 描述 | 标签 | 直接打开 |
|---|------|------|------|----------|
| 1 | 🗺️ [中国地图交互](https://alen2022-sun.github.io/HTML5-Demo/source/china_map.html) | SVG 中国地图，支持省份高亮、缩放平移、多套主题切换、水系山脉图层叠加 | `地图` · `SVG` · `交互` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/china_map.html) |
| 2 | ⛰️ [中国地形 · 三维交互图谱](https://alen2022-sun.github.io/HTML5-Demo/source/Chinese-geo.html) | WebGL 三维地形可视化，展示三级阶梯、水系、山脉、铁路网，支持拖拽旋转与缩放 | `地形` · `Three.js` · `3D` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/Chinese-geo.html) |
| 3 | 🏰 [暗区防线 · 2.5D 战术塔防](https://alen2022-sun.github.io/HTML5-Demo/source/Defense-tower.html) | 2.5D 塔防游戏，含多种防御塔、敌人波次、技能系统、CRT 扫描线特效 | `塔防` · `游戏` · `Canvas` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/Defense-tower.html) |
| 4 | ⚙️ [直列四缸发动机 · 交互式 3D 解剖台](https://alen2022-sun.github.io/HTML5-Demo/source/engine.html) | Three.js 驱动的发动机 3D 拆解模型，可调速观察曲柄连杆机构运转与正时皮带传动 | `机械` · `Three.js` · `3D` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/engine.html) |
| 5 | 💻 [Lumen OS · 概念系统演示](https://alen2022-sun.github.io/HTML5-Demo/source/LumenOS.html) | 毛玻璃拟物化桌面操作系统概念界面，含窗口管理、AI 助手、动态壁纸与主题切换 | `UI` · `概念` · `毛玻璃` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/LumenOS.html) |
| 6 | 🔫 [SHOTGUN APOCALYPSE — 末日霰弹枪](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-1.html) | 第一人称射击生存游戏，WebGL 渲染，含敌人 AI、武器系统、弹片物理与 Boss 战 | `FPS` · `射击` · `WebGL` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-1.html) |
| 7 | 💥 [SHOTGUN APOCALYPSE — 末日霰弹枪 v2](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-2.html) | 升级版 FPS 生存游戏，新增电影级后处理、更丰富的敌人类型与武器升级系统 | `FPS` · `射击` · `WebGL` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-2.html) |
| 8 | 🧟 [SHOTGUN APOCALYPSE — 霰弹枪末日 v3](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-3.html) | 最终版末日射击游戏，完整 UI 系统、设置面板、波次生存模式与成就系统 | `FPS` · `生存` · `WebGL` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-3.html) |
| 9 | 🕶️ [HACK TERMINAL — 系统入侵](https://alen2022-sun.github.io/HTML5-Demo/source/The-Matrix.html) | 黑客终端模拟器，Matrix 代码雨背景，逐行打印入侵日志与进度条动画 | `终端` · `动画` · `Matrix` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/The-Matrix.html) |
| 10 | 🃏 [红心大战 · 离线珍藏版](https://alen2022-sun.github.io/HTML5-Demo/source/hearts.html) | 单文件离线四人红心大战：三档 AI、牌面牌背与花色配色可换、点击手牌即出牌，内置合成音效、背景音乐与射月全屏庆祝。 | `红心大战` · `纸牌游戏` · `单文件离线` · `AI对战` | [↗ 打开](https://alen2022-sun.github.io/HTML5-Demo/source/hearts.html) |

<details>
<summary>📋 展开全部直链（便于复制）</summary>

- [中国地图交互](https://alen2022-sun.github.io/HTML5-Demo/source/china_map.html) — `source/china_map.html`
- [中国地形 · 三维交互图谱](https://alen2022-sun.github.io/HTML5-Demo/source/Chinese-geo.html) — `source/Chinese-geo.html`
- [暗区防线 · 2.5D 战术塔防](https://alen2022-sun.github.io/HTML5-Demo/source/Defense-tower.html) — `source/Defense-tower.html`
- [直列四缸发动机 · 交互式 3D 解剖台](https://alen2022-sun.github.io/HTML5-Demo/source/engine.html) — `source/engine.html`
- [Lumen OS · 概念系统演示](https://alen2022-sun.github.io/HTML5-Demo/source/LumenOS.html) — `source/LumenOS.html`
- [SHOTGUN APOCALYPSE — 末日霰弹枪](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-1.html) — `source/shot-gun-1.html`
- [SHOTGUN APOCALYPSE — 末日霰弹枪 v2](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-2.html) — `source/shot-gun-2.html`
- [SHOTGUN APOCALYPSE — 霰弹枪末日 v3](https://alen2022-sun.github.io/HTML5-Demo/source/shot-gun-3.html) — `source/shot-gun-3.html`
- [HACK TERMINAL — 系统入侵](https://alen2022-sun.github.io/HTML5-Demo/source/The-Matrix.html) — `source/The-Matrix.html`
- [红心大战 · 离线珍藏版](https://alen2022-sun.github.io/HTML5-Demo/source/hearts.html) — `source/hearts.html`

</details>
<!-- DEMOS:END -->

## 🚀 新增作品流程（只改一处）

1. 把新的 HTML 放进 `source/`
2. 在 `files.json` 追加一条记录：
   ```json
   {
     "file": "source/your-file.html",
     "title": "作品标题",
     "desc": "一句话描述",
     "icon": "🎯",
     "tags": ["标签1", "标签2"]
   }
   ```
3. `git push`

之后会自动发生两件事，都不用你再动手：

- **导航首页**：`index.html` 前端读取 `files.json`，多出一张卡片
- **本 README**：Actions 跑 `gen-readme.mjs`，重写上面 `DEMOS` 标记之间的表格与直链清单，并自动 commit 回来

> 字段说明：`file` 必填（相对仓库根目录的路径，大小写要与磁盘一致）；`title` / `desc` / `icon` / `tags` 可省略，脚本会兜底。

### 本地手动生成（可选）

不想等 Actions、或没开写权限时，在仓库根目录执行：

```bash
node scripts/gen-readme.mjs
```

脚本只重写 `<!-- DEMOS:START -->` ~ `<!-- DEMOS:END -->` 之间的内容，标记外的说明文字不会被覆盖；内容无变化时不会改动文件。

### ⚙️ 首次启用 Actions 的必要设置

仓库 **Settings → Actions → General → Workflow permissions** 需勾选 **Read and write permissions**，否则自动回写 README 时 `git push` 会被拒绝。工作流已用 `GITHUB_TOKEN`、diff 检查与 `[skip ci]` 做了防循环处理。

## 🛠️ 技术栈

- HTML5 / CSS3 / JavaScript (ES6+)
- SVG / Canvas / WebGL (Three.js)
- GitHub Pages 静态托管 + GitHub Actions 自动同步文档
- 零运行时依赖，纯前端离线可用

## 📄 License

MIT
