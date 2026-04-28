import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const layers = [
  {
    name: '天机',
    englishName: 'Fabric',
    title: '异构数据融合层',
    description: '打破物理与信息系统的壁垒，让数据安全、有序地流动。内置海量协议适配器，实现无缝抽取、实时清洗与汇聚。',
    color: '#FF6B35',
  },
  {
    name: '万象',
    englishName: 'Atlas',
    title: '动态本体映射层',
    description: '将扁平的数据升维成关系网络。让每一次设备振动都能精准关联到具体的客户订单和财务成本。',
    color: '#7C3AED',
  },
  {
    name: '灵枢',
    englishName: 'AI2',
    title: '模型与 AI 推理层',
    description: '结合逻辑链推理与领域机理模型，赋予系统"思考"的能力。自然语言交互，智能推演，生成最优决策。',
    color: '#00D4AA',
  },
  {
    name: '天工',
    englishName: 'Studio',
    title: '业务应用与操作闭环层',
    description: '赋能一线操作者，将上层的智能决策一键转化为底层的业务行动。零代码搭建，一键回写执行。',
    color: '#3B82F6',
  },
]

export default function ArchitectureDiagram() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left: Accordion */}
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`cursor-pointer rounded-xl border transition-all duration-300 ${
              activeIndex === index
                ? 'bg-mox-dark-light/80 border-mox-cyan/50'
                : 'bg-mox-surface border-mox-surface-border hover:border-mox-cyan/30'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: layer.color,
                    boxShadow: activeIndex === index ? `0 0 10px ${layer.color}` : 'none',
                  }}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-white">
                    {layer.title}
                  </h3>
                  <p className="text-sm font-mono" style={{ color: layer.color }}>
                    {layer.name} {layer.englishName}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-mox-text transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 mt-4 border-t border-mox-surface-border text-mox-text leading-relaxed">
                      {layer.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right: Visual Diagram */}
      <div className="relative">
        <div className="space-y-3">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative py-5 px-6 rounded-xl border-2 transition-all duration-500 ${
                activeIndex === index
                  ? 'bg-opacity-20'
                  : 'bg-opacity-5'
              }`}
              style={{
                backgroundColor: activeIndex === index ? `${layer.color}20` : `${layer.color}08`,
                borderColor: activeIndex === index ? layer.color : `${layer.color}20`,
                width: `${100 - index * 8}%`,
                marginLeft: `${index * 4}%`,
              }}
            >
              {/* Glow effect */}
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow: `0 0 30px ${layer.color}30, inset 0 0 30px ${layer.color}10`,
                  }}
                />
              )}

              <div className="relative z-10 flex items-center gap-3">
                <span
                  className="text-lg font-bold"
                  style={{ color: activeIndex === index ? layer.color : 'white' }}
                >
                  {layer.name}
                </span>
                <span className="text-sm font-mono text-mox-text-dim">
                  {layer.englishName}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: -1 }}
        >
          {layers.map((_, index) => {
            if (index === layers.length - 1) return null
            const y1 = (index + 1) * 80 + 40
            const y2 = (index + 2) * 80
            return (
              <line
                key={index}
                x1="50%"
                y1={y1}
                x2="50%"
                y2={y2}
                stroke="rgba(102, 252, 241, 0.1)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}
