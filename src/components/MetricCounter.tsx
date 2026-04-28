import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MetricCounterProps {
  value: string
  label: string
  index: number
}

export default function MetricCounter({ value, label, index }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(numericMatch[0])
    const prefix = value.substring(0, numericMatch.index)
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length)

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = targetNum * eased

      if (targetNum % 1 === 0) {
        setDisplayValue(`${prefix}${Math.round(current)}${suffix}`)
      } else {
        setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`)
      }

      if (currentStep >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-metric font-mono font-bold text-mox-cyan mb-2">
        {displayValue}
      </div>
      <div className="text-sm text-mox-steel-light">{label}</div>
    </motion.div>
  )
}
