import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import ProductCard from './components/ProductCard'
import SolutionCard from './components/SolutionCard'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import AboutSection from './components/AboutSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


const products = [
  {
    name: '天机',
    englishName: 'Fabric',
    tagline: '异构数据集成总线',
    description: '软件定义的超级集成，无缝抽取汇聚 IT 与 OT 数据，构建极高安全级别的企业级数据血缘网络。',
    tags: ['海量协议适配', 'IT/OT 融合', '数据血缘'],
  },
  {
    name: '万象',
    englishName: 'Atlas',
    tagline: '业务本体与数据操作系统',
    description: '突破传统数据湖局限，将底层冷数据重塑为"业务对象"，为您构建包罗万象、实时运转的数字孪生微缩宇宙。',
    tags: ['数据底座重塑', '业务对象构建', '数字孪生'],
  },
  {
    name: '灵枢',
    englishName: 'AI2',
    tagline: '企业级人工智能中枢',
    description: '深度绑定专属数据本体的大脑，支持自然语言对话与机理模型结合，在沙盒中进行假设推演（What-If），直接生成最优决策。',
    tags: ['自然语言交互', '智能体 Agent', 'What-If 推演沙盒'],
  },
  {
    name: '天工',
    englishName: 'Studio',
    tagline: '零代码操作闭环工作台',
    description: '提供敏捷搭建工具，通过强大的回写机制，将决策指令通过 API 直接下发至生产系统，实现完美的闭环控制。',
    tags: ['零/低代码拖拽', '回写机制 Write-back', '操作闭环'],
  },
]

const solutions = [
  {
    title: '供应链控制塔',
    painPoints: ['全球供应链断裂', '信息滞后', '突发事件响应慢'],
    solution: '借由天机汇聚全链条数据，在万象(Atlas)中构建覆盖供应商、物流和客户的全局图谱。面临缺料风险时，灵枢(AI2)瞬间推演数十种调拨方案的成本影响，业务员在天工(Studio)工作台上确认最优解后，系统自动向ERP下发采购指令。',
    value: '将供应链异常响应时间从数天缩短至数分钟，极大提升企业抗风险韧性。',
  },
  {
    title: '铁前生产精益优化',
    painPoints: ['原料成分波动大，配矿配煤成本高', '过度依赖人工经验', '高炉炉况不稳定，综合能耗巨大'],
    solution: '天机(Fabric)汇聚原料检测、烧结、焦化及高炉的实时OT数据；万象(Atlas)构建铁前全流程物质流与能量流本体；灵枢(AI2)结合冶金机理模型进行动态配比寻优；最终通过天工(Studio)生成精准配料单并直接下发至执行系统。',
    value: '有效降低综合铁水成本，稳定高炉运行，助力千万吨级钢企实现节能降碳与精益生产。',
  },
  {
    title: '生产模拟',
    painPoints: ['生产排程僵化', '突发情况缺乏预见性', '物理产线试错成本极高'],
    solution: '基于万象(Atlas)的数字孪生能力，在数字空间1:1还原物理产线网络；灵枢(AI2)提供强大的What-If假设推演沙盒，对各种插单或停机场景进行分钟级的未来模拟推演与瓶颈分析；最优策略通过天工(Studio)一键回写下发。',
    value: '实现排产调度的"未卜先知"，大幅降低试错成本，将全局设备综合效率（OEE）提升至行业领先水平。',
  },
]

function App() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  return (
    <div className="min-h-screen bg-mox-dark text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-hero-mobile md:text-hero text-white mb-4">
              企业级智能操作系统缔造者
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-bold text-gradient-cyan mb-6"
          >
            墨承匠心，枢驭未来
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-mox-text text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            摒弃传统的"只看不动"，通过构建数字本体与 AI 智能体，帮助复杂企业实现从数据洞察到业务操作的完美闭环。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="btn-primary">
              预约演示
            </a>
            <a href="#products" className="btn-ghost">
              了解全栈产品
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-mox-text-dim rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-mox-cyan rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-mox-dark-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-4">
              全栈产品矩阵：企业的数字生命体
            </h2>
            <p className="text-mox-text text-lg max-w-3xl mx-auto">
              四大核心引擎相互交融，完成从数据接入、本体重塑、AI决策到业务执行的全链路覆盖
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-mox-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-4">核心行业解决方案</h2>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.title} {...solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="section-padding bg-mox-dark-light/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-4">自下而上的技术路线</h2>
          </motion.div>

          <ArchitectureDiagram />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Bottom CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Starfield background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at bottom, #1F2833 0%, #0B0C10 70%)',
            }}
          />
          {/* Stars */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              用万象构建世界，以灵枢驱动未来
            </h2>
            <p className="text-mox-text text-lg mb-10">
              预约演示，了解墨枢如何为您的企业构建数字生命体
            </p>
            <a href="#" className="btn-primary inline-block text-lg px-12 py-5">
              预约演示
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App