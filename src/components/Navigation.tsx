import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '产品矩阵', href: '#products' },
    { label: '解决方案', href: '#solutions' },
    { label: '技术架构', href: '#architecture' },
    { label: '关于我们', href: '#about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mox-dark/80 backdrop-blur-xl border-b border-mox-surface-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - SVG */}
          <a href="#" className="flex items-center gap-2 group">
            <svg width="120" height="45" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#66FCF1" />
                  <stop offset="100%" stop-color="#45A29E" />
                </linearGradient>
                <linearGradient id="goldHub" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFC107" />
                  <stop offset="100%" stop-color="#F2A900" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g transform="translate(30, 35)">
                <path d="M10,60 L30,20 L50,55 L70,20 L90,60" fill="none" stroke="url(#cyanGlow)" stroke-width="4" stroke-linejoin="round"/>
                <path d="M10,60 L50,85 L90,60" fill="none" stroke="url(#cyanGlow)" stroke-width="4" stroke-linejoin="round"/>
                <line x1="50" y1="35" x2="50" y2="85" stroke="#45A29E" stroke-width="2" stroke-dasharray="4,2" opacity="0.8"/>
                <circle cx="10" cy="60" r="4.5" fill="#66FCF1"/>
                <circle cx="30" cy="20" r="4.5" fill="#66FCF1"/>
                <circle cx="70" cy="20" r="4.5" fill="#66FCF1"/>
                <circle cx="90" cy="60" r="4.5" fill="#66FCF1"/>
                <circle cx="50" cy="85" r="5" fill="#66FCF1"/>
                <polygon points="50,22 60,35 50,48 40,35" fill="url(#goldHub)" filter="url(#glow)"/>
              </g>
              <g transform="translate(145, 75)">
                <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="900" fill="#FFFFFF" letter-spacing="3">MOXSYS</text>
                <text x="2" y="30" font-family="'PingFang SC', 'Microsoft YaHei', sans-serif" font-size="16" font-weight="bold" fill="#45A29E" letter-spacing="5">墨枢科技</text>
              </g>
            </svg>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-mox-text hover:text-mox-cyan transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mox-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-mox-gold text-mox-dark text-sm font-bold rounded-lg hover:bg-mox-gold-dark transition-all hover:glow-gold"
            >
              预约演示
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-mox-surface-border"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-mox-text hover:text-mox-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-5 py-2.5 bg-mox-gold text-mox-dark text-sm font-bold rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              预约演示
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
