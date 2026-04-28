import { motion } from 'framer-motion'

const milestones = [
  { year: '2021', title: '公司成立', desc: '墨枢科技在杭州成立，致力于企业级智能操作系统研发' },
  { year: '2022', title: '天机发布', desc: '异构数据集成总线 Fabric 1.0 正式发布，打通 IT/OT 数据壁垒' },
  { year: '2023', title: '万象问世', desc: '业务本体操作系统 Atlas 上线，构建数字孪生底座能力' },
  { year: '2024', title: 'AI2 智能中枢', desc: '灵枢 AI2 发布，深度绑定业务本体的企业级 AI 大脑' },
]

const values = [
  {
    title: '墨承匠心',
    desc: '源自先秦墨家的极客精神与工程匠心。我们不尚空谈，致力于用最底层的代码和最坚固的架构，打破企业内部的数据孤岛。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: '枢驭未来',
    desc: '枢密院般的全局视野与中央控制塔。我们不仅呈现数据，更打造发号施令、驱动业务流转的智能中枢。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-mox-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section mb-4">关于墨枢</h2>
          <p className="text-mox-text text-lg max-w-3xl mx-auto">
            杭州墨枢科技有限公司（Moxsys）是一家致力于为复杂组织构建企业级数据操作系统与人工智能底座的科技公司
          </p>
        </motion.div>

        {/* Brand Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-mox-cyan mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-mox-text leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 text-center mb-20"
        >
          <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
          <p className="text-mox-text text-lg leading-relaxed max-w-3xl mx-auto">
            摒弃传统的"只看不动"的商业智能（BI）大屏，通过构建双向互动的"数字本体（Ontology）"与"智能体（AI Agent）"，
            帮助工业、制造、供应链等复杂企业实现从数据洞察到一线业务操作的完美闭环。
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">发展历程</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mox-cyan/20" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-mox-cyan mt-2" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <span className="text-mox-cyan font-mono font-bold text-lg">{milestone.year}</span>
                    <h4 className="text-lg font-bold mt-1 mb-2">{milestone.title}</h4>
                    <p className="text-mox-text text-sm">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
