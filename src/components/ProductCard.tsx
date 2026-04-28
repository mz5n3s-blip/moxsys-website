import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  englishName: string
  tagline: string
  description: string
  tags: string[]
  index: number
}

export default function ProductCard({ name, englishName, tagline, description, tags, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glow-border-effect group p-8"
    >
      <div className="relative z-10">
        {/* Product Name */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {name}
          </h3>
          <p className="text-sm font-mono text-mox-cyan-dim">
            {englishName}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg font-semibold text-mox-cyan mb-4">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-mox-text leading-relaxed mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-ghost">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
