# 墨枢科技官网 - 交互流程图

## 1. 用户旅程地图 (User Journey Map)

```
阶段          认知        兴趣        考虑        决策        行动
             ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
触点          │ 搜索/广告 │ │ 官网首页 │ │ 产品页  │ │ 演示预约│ │ 销售跟进│
             │ 社交媒体 │ │ 粒子动效 │ │ 架构图  │ │ 表单填写│ │ 方案定制│
             │ 行业报告 │ │ 品牌标语 │ │ 案例对比│ │ CTA点击 │ │ 合同签署│
             └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
              
用户行为      被动接收    主动探索    深度研究    评估比较    确认合作
             关键词搜索   滚动浏览     点击展开     填写信息    等待联系
             点击链接    观看动效     查看方案     提交表单    接收方案
             
情绪曲线      😐 中立    🤩 惊艳     🤔 思考     😊 信任     🎉 兴奋
             (无感知)    (科技感)   (专业度)   (可靠性)   (期待合作)
             
设计目标      吸引注意    建立认知    传递价值    降低门槛    促成转化
             品牌曝光    差异记忆    信任背书    简化流程    及时响应
```

## 2. 页面级交互流程 (Page Flow)

```
[入口]
  │
  ├─→ 直接访问 (URL/书签)
  ├─→ 搜索引擎 (SEO)
  ├─→ 社交媒体 (LinkedIn/微信公众号)
  └─→ 行业展会 (QR码扫描)
       │
       ▼
[首页 Hero]
  │
  ├─→ 滚动向下 ──→ [产品矩阵] ──→ 点击卡片 ──→ [产品详情页]
  ├─→ 滚动向下 ──→ [解决方案] ──→ 点击方案 ──→ [方案详情页]
  ├─→ 滚动向下 ──→ [技术架构] ──→ 点击层级 ──→ [架构展开]
  ├─→ 滚动向下 ──→ [关于我们] ──→ 点击历程 ──→ [时间线详情]
  ├─→ 点击 CTA ──→ [联系表单] ──→ 填写提交 ──→ [成功页]
  └─→ 点击导航 ──→ 锚点跳转 ──→ 对应区块
       │
       ▼
[退出]
  │
  ├─→ 离开页面 (未转化)
  └─→ 完成转化 (已提交)
```

## 3. 关键交互状态机

### 3.1 导航栏状态

```
状态: 顶部透明
触发: scrollY < 50px
表现: bg-transparent, 无阴影

    ↓ scrollY >= 50px

状态: 滚动后毛玻璃
触发: scrollY >= 50px
表现: bg-dark/80 + backdrop-blur-xl + border-bottom

    ↓ hover nav-link

状态: 链接悬停
触发: mouseenter
表现: 下划线动画 width: 0 → 100%

    ↓ mouseleave

状态: 恢复默认
触发: mouseleave
表现: 下划线消失
```

### 3.2 产品卡片状态

```
状态: 默认
表现: 静态玻璃卡片, 边框透明

    ↓ mouseenter

状态: 悬停
触发: mouseenter
表现: 
  - translateY(-4px)
  - 边框光晕流动 (glow-border animation)
  - 顶部光条 scaleX: 0 → 1
  
    ↓ mouseleave

状态: 恢复
触发: mouseleave
表现: 所有动效反向
```

### 3.3 架构图状态

```
状态: 默认折叠
表现: 仅显示标题行, 详情隐藏 height: 0

    ↓ click accordion-item

状态: 展开
触发: click
表现: 
  - 详情展开 height: auto
  - 对应右侧层级高亮 glow
  - 其他项折叠 (手风琴行为)
  
    ↓ click same item / click other item

状态: 折叠 / 切换
触发: click
表现: 反向动画 / 切换激活项
```

### 3.4 表单状态

```
状态: 待填写
表现: 空输入框, 默认边框

    ↓ focus input

状态: 聚焦
触发: focus
表现: border-color → mox-cyan, ring glow

    ↓ input valid

状态: 有效
触发: blur + validation pass
表现: 绿色边框/图标

    ↓ input invalid

状态: 错误
触发: blur + validation fail
表现: 红色边框, 错误提示

    ↓ click submit

状态: 提交中
触发: submit click
表现: 按钮 loading spinner, disabled

    ↓ API success

状态: 成功
触发: 200 response
表现: 表单替换为成功卡片, 对勾动画

    ↓ API error

状态: 失败
触发: error response
表现: 错误提示, 恢复可提交状态
```

## 4. 微交互清单

| 元素 | 触发 | 动效 | 时长 | 缓动 |
|------|------|------|------|------|
| 粒子背景 | 页面加载 | 持续微动 + 鼠标排斥 | ∞ | linear |
| Hero 标题 | 页面加载 | fadeIn + translateY(30→0) | 800ms | easeOut |
| 滚动指示器 | 页面加载 | translateY 循环 | 1500ms | easeInOut |
| 导航链接 | hover | 下划线 width 0→100% | 300ms | easeOut |
| 产品卡片 | hover | translateY(-4px) + glow | 500ms | easeOut |
| 架构层级 | click | height 0→auto + glow | 300ms | easeOut |
| 数字指标 | inView | 数字递增动画 | 2000ms | easeOutCubic |
| 表单输入 | focus | border glow | 200ms | easeOut |
| 提交按钮 | hover | glow shadow | 300ms | easeOut |
| 提交成功 | API响应 | scale(0.9→1) + fadeIn | 400ms | easeOut |

## 5. 异常/边缘状态

### 5.1 加载状态
- 骨架屏: 卡片区域使用 pulse 动画占位
- 渐进加载: 图片懒加载 + blur-up 效果

### 5.2 错误状态
- 表单验证: 实时/失焦验证, 错误提示
- 网络错误: 重试按钮, 离线提示

### 5.3 空状态
- 无搜索结果: 引导式空状态插画
- 无数据: 友好提示 + 操作引导

### 5.4 响应式断点
| 断点 | 布局变化 |
|------|----------|
| >1024px | 完整布局, 2×2 产品网格 |
| 768-1024px | 导航简化, 架构图堆叠 |
| <768px | 单列, 汉堡菜单, 触摸优化 |

## 6. 无障碍 (Accessibility)

- 键盘导航: Tab 顺序合理, Focus 可见
- 屏幕阅读器: 语义化标签, aria-label
- 减少动效: prefers-reduced-motion 支持
- 对比度: WCAG AA 标准, 文字对比度 ≥ 4.5:1
