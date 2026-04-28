# 墨枢科技 Moxsys - Design System

## 1. 设计原则

### 1.1 品牌核心
- **墨承匠心**：工程实用主义，底层代码与坚固架构
- **枢驭未来**：全局视野，中央控制塔，驱动业务流转

### 1.2 设计关键词
`硬核` `掌控` `智能` `未来` `闭环`

### 1.3 视觉隐喻
- **数据网络**：粒子连线 → 信息流动
- **控制中枢**：金色枢纽 → 决策核心
- **数字孪生**：层级架构 → 虚实映射

---

## 2. 色彩系统

### 2.1 主色板

| 角色 | 色值 | 用途 |
|------|------|------|
| **深空石墨** | `#0B0C10` | 全局背景 |
| **本体青** | `#66FCF1` | 主高亮、交互反馈、数据流 |
| **枢纽金** | `#FFC107` | CTA按钮、品牌标识、关键行动 |

### 2.2 辅助色

| 角色 | 色值 | 用途 |
|------|------|------|
| **石墨浅** | `#1F2833` | 卡片背景、次级表面 |
| **青暗** | `#45A29E` | 渐变终点、次要强调 |
| **金暗** | `#E5AC00` | 按钮悬停、 pressed 状态 |

### 2.3 文字色

| 层级 | 色值 | 对比度 | 用途 |
|------|------|--------|------|
| 主文字 | `#FFFFFF` | 21:1 | 标题、重要内容 |
| 次文字 | `#C5C6C7` | 15:1 | 正文、描述 |
| 辅助文字 | `#8D8E8F` | 10:1 | 标签、元信息 |

### 2.4 语义色

| 状态 | 色值 | 用途 |
|------|------|------|
| 危险 | `#E74C3C` | 错误、删除、Before痛点 |
| 成功 | `#66FCF1` | 成功、完成、After价值 |
| 警告 | `#F59E0B` | 警告、注意 |

### 2.5 透明度规范

```
背景透明度：
- 卡片: 60% (rgba(31, 40, 51, 0.6))
- 导航: 80% (rgba(11, 12, 16, 0.8))
- 遮罩: 40-60%

边框透明度：
- 默认: 15% (rgba(102, 252, 241, 0.15))
- 悬停: 50% (rgba(102, 252, 241, 0.5))
- 激活: 100%

发光透明度：
- 弱发光: 10-20%
- 中发光: 30-40%
- 强发光: 50-60%
```

---

## 3. 字体系统

### 3.1 字体栈

```css
/* 主字体 */
font-family: "PingFang SC", "思源黑体", "Noto Sans SC", system-ui, sans-serif;

/* 等宽字体（数据/代码） */
font-family: "JetBrains Mono", "SF Mono", monospace;
```

### 3.2 字号层级

| 层级 | 桌面端 | 移动端 | 字重 | 行高 | 字间距 |
|------|--------|--------|------|------|--------|
| Hero | 56px | 36px | 700 | 1.1 | -0.02em |
| H1 | 48px | 32px | 700 | 1.2 | -0.02em |
| H2 | 36px | 28px | 700 | 1.3 | -0.01em |
| H3 | 24px | 20px | 600 | 1.4 | 0 |
| Body | 16px | 16px | 400 | 1.6 | 0 |
| Small | 14px | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 12px | 500 | 1.4 | 0.02em |

### 3.3 特殊排版

- **数据指标**：等宽字体，48px，字重 700
- **英文品牌名**：Arial/Helvetica，字重 900，全大写
- **代码/标签**：等宽字体，12-14px

---

## 4. 间距系统

### 4.1 基础单位

基础单位 = 4px

| Token | 值 | 用途 |
|-------|-----|------|
| xs | 4px | 图标内边距、紧凑间距 |
| sm | 8px | 组件内部间距 |
| md | 16px | 卡片内边距、元素间距 |
| lg | 24px | 区块内部间距 |
| xl | 32px | 模块间距 |
| 2xl | 48px | 大模块间距 |
| 3xl | 64px | 区块间距 |
| section | 96px | 页面区块间距 |

### 4.2 布局规范

```
页面最大宽度: 1280px (max-w-7xl)
页面边距: 
  - 桌面: 32px (px-8)
  - 平板: 24px (px-6)
  - 手机: 16px (px-4)

网格系统:
  - 产品卡片: 2×2 (md:grid-cols-2)
  - 解决方案: 1列 (垂直排列)
  - 架构图: 2列 (lg:grid-cols-2)
  - 页脚链接: 5列 (md:grid-cols-5)
```

---

## 5. 组件规范

### 5.1 按钮 (Button)

#### 主按钮 (Primary)
```
背景: #FFC107
文字: #0B0C10
字号: 16px
字重: 700
内边距: 16px 32px (py-4 px-8)
圆角: 8px (rounded-lg)

Hover:
  背景: #E5AC00
  阴影: glow-gold (0 0 20px rgba(255, 193, 7, 0.4))

Active:
  transform: scale(0.95)

Disabled:
  opacity: 0.5
  cursor: not-allowed
```

#### 幽灵按钮 (Ghost)
```
背景: transparent
边框: 1px solid rgba(255, 255, 255, 0.3)
文字: #FFFFFF
内边距: 16px 32px
圆角: 8px

Hover:
  边框: #66FCF1
  文字: #66FCF1
```

### 5.2 卡片 (Card)

#### 产品卡片
```
背景: linear-gradient(135deg, rgba(31, 40, 51, 0.8), rgba(31, 40, 51, 0.4))
边框: 1px solid rgba(102, 252, 241, 0.15)
圆角: 16px (rounded-2xl)
内边距: 32px (p-8)

Hover:
  - translateY(-4px)
  - 边框光晕流动 (glow-border animation)
  - 顶部光条 scaleX: 0 → 1
```

#### 玻璃卡片 (Glass)
```
背景: rgba(31, 40, 51, 0.6)
背景滤镜: blur(24px)
边框: 1px solid rgba(102, 252, 241, 0.15)
圆角: 16px
```

### 5.3 标签 (Tag)

#### 幽灵标签
```
背景: rgba(31, 40, 51, 0.6)
边框: 1px solid rgba(102, 252, 241, 0.3)
文字: #66FCF1
字号: 12px
字重: 500
内边距: 4px 12px (px-3 py-1)
圆角: 9999px (rounded-full)
```

### 5.4 表单输入 (Input)

```
背景: #0B0C10
边框: 1px solid rgba(102, 252, 241, 0.15)
文字: #FFFFFF
字号: 16px
内边距: 12px 16px (py-3 px-4)
圆角: 8px

Focus:
  边框: #66FCF1
  阴影: 0 0 0 1px rgba(102, 252, 241, 0.5)

Error:
  边框: #E74C3C
  阴影: 0 0 0 1px rgba(231, 76, 60, 0.5)
```

### 5.5 导航 (Navigation)

```
高度: 64px (h-16)
背景(顶部): transparent
背景(滚动后): rgba(11, 12, 16, 0.8) + blur(24px)
边框(滚动后): 1px solid rgba(102, 252, 241, 0.15)

链接:
  默认: #C5C6C7
  Hover: #66FCF1 + 下划线动画
  
CTA按钮:
  同主按钮规范，尺寸缩小 (px-5 py-2.5)
```

---

## 6. 动效系统

### 6.1 动画时长

| Token | 值 | 用途 |
|-------|-----|------|
| fast | 150ms | 微交互、hover |
| normal | 300ms | 常规过渡 |
| slow | 500ms | 卡片、区块 |
| slower | 800ms | 页面级、Hero |

### 6.2 缓动函数

| Token | 曲线 | 用途 |
|-------|------|------|
| ease-out | cubic-bezier(0, 0, 0.2, 1) | 入场动画 |
| ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | 对称动画 |
| spring | cubic-bezier(0.34, 1.56, 0.64, 1) | 弹性效果 |

### 6.3 预设动画

```css
/* 脉冲发光 */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(102, 252, 241, 0.2); }
  50% { box-shadow: 0 0 40px rgba(102, 252, 241, 0.6), 0 0 60px rgba(102, 252, 241, 0.3); }
}

/* 浮动 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 边框光晕流动 */
@keyframes glow-border {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
```

### 6.4 滚动行为

```
平滑滚动: scroll-behavior: smooth
视口触发: viewport={{ once: true, margin: '-100px' }}
视差效果: useScroll + useTransform
```

---

## 7. 响应式规范

### 7.1 断点

| 名称 | 宽度 | 代号 |
|------|------|------|
| 手机 | < 640px | sm |
| 平板 | 640-768px | md |
| 桌面小 | 768-1024px | lg |
| 桌面 | 1024-1280px | xl |
| 大屏 | > 1280px | 2xl |

### 7.2 布局变化

**Hero**
- 桌面: 56px 标题 + 并排按钮
- 手机: 36px 标题 + 堆叠按钮

**产品卡片**
- 桌面: 2×2 网格
- 手机: 单列堆叠

**架构图**
- 桌面: 左右分栏 (Accordion + 可视化)
- 手机: 上下堆叠

**导航**
- 桌面: 水平菜单 + CTA
- 手机: 汉堡菜单

---

## 8. 无障碍规范

### 8.1 对比度
- 所有文字对比度 ≥ 4.5:1 (WCAG AA)
- 大文字(>24px)对比度 ≥ 3:1

### 8.2 键盘导航
- Tab 顺序符合视觉流
- Focus 状态可见 (outline: 2px solid #66FCF1)
- 交互元素可通过键盘触发

### 8.3 动效偏好
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.4 语义化
- 正确使用 heading 层级 (h1-h6)
- 表单关联 label 与 input
- 图片提供 alt 文本
- 按钮使用 button 元素

---

## 9. 图标规范

### 9.1 尺寸

| 用途 | 尺寸 |
|------|------|
| 内联图标 | 16px |
| 按钮图标 | 20px |
| 卡片图标 | 24-32px |
| 装饰图标 | 48-64px |

### 9.2 风格
- 线框风格 (stroke-width: 2)
- 圆角端点 (stroke-linecap: round)
- 圆角连接 (stroke-linejoin: round)

---

## 10. 文件组织

```
moxsys-website/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navigation.tsx
│   │   ├── ProductCard.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── ContactForm.tsx
│   │   ├── AboutSection.tsx
│   │   └── Footer.tsx
│   ├── sections/            # 页面区块 (可选)
│   ├── hooks/               # 自定义 Hooks
│   ├── types/               # TypeScript 类型
│   ├── utils/               # 工具函数
│   ├── App.tsx              # 主页面
│   ├── main.tsx             # 入口
│   └── index.css            # 全局样式
├── public/                  # 静态资源
│   └── favicon.svg
├── docs/                    # 文档
│   ├── design-tokens.json   # 设计令牌
│   ├── design-system.md     # 设计系统
│   └── interaction-flow.md  # 交互流程
├── tailwind.config.js       # Tailwind 配置
├── package.json
└── index.html
```

---

*Design System v1.0 - 墨枢科技 Moxsys*
