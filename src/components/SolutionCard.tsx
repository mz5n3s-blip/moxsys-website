import { motion } from 'framer-motion'

interface SolutionCardProps {
  title: string
  painPoints: string[]
  solution: string
  value: string
  index: number
}

export default function SolutionCard({ title, painPoints, solution, value, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-mox-surface-border"
    >
      {/* Before - Pain Points */}
      <div className="bg-mox-danger/5 p-8 border-b md:border-b-0 md:border-r border-mox-surface-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-mox-danger" />
          <span className="text-sm font-mono text-mox-danger uppercase tracking-wider">Before · 痛点</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-3">
          {painPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-mox-text">
              <svg className="w-5 h-5 text-mox-danger flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* After - Solution & Value */}
      <div className="bg-mox-cyan/5 p-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-mox-cyan animate-pulse-glow" />
          <span className="text-sm font-mono text-mox-cyan uppercase tracking-wider">After · 墨枢方案</span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-semibold text-mox-cyan mb-2">解决方案</p>
          <p className="text-mox-text leading-relaxed">{solution}</p>
        </div>
        
        <div className="pt-4 border-t border-mox-surface-border">
          <p className="text-sm font-semibold text-mox-cyan mb-2">核心价值</p>
          <p className="text-mox-text leading-relaxed">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}
