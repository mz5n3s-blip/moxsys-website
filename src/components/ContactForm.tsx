import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-mox-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-mox-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">提交成功</h3>
        <p className="text-mox-text">我们的团队将在 24 小时内与您联系</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">公司名称</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-mox-dark border border-mox-surface-border rounded-lg focus:border-mox-cyan focus:outline-none focus:ring-1 focus:ring-mox-cyan/50 transition-all"
            placeholder="请输入公司名称"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">联系人</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-mox-dark border border-mox-surface-border rounded-lg focus:border-mox-cyan focus:outline-none focus:ring-1 focus:ring-mox-cyan/50 transition-all"
            placeholder="请输入联系人姓名"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">手机号</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-mox-dark border border-mox-surface-border rounded-lg focus:border-mox-cyan focus:outline-none focus:ring-1 focus:ring-mox-cyan/50 transition-all"
          placeholder="请输入手机号"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">需求描述</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-mox-dark border border-mox-surface-border rounded-lg focus:border-mox-cyan focus:outline-none focus:ring-1 focus:ring-mox-cyan/50 transition-all resize-none"
          placeholder="请描述您的业务需求或问题"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            提交中...
          </>
        ) : (
          '预约演示'
        )}
      </button>
    </motion.form>
  )
}
