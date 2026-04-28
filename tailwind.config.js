/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mox: {
          dark: '#0B0C10',
          'dark-light': '#1F2833',
          cyan: '#66FCF1',
          'cyan-dim': '#45A29E',
          gold: '#FFC107',
          'gold-dark': '#E5AC00',
          text: '#C5C6C7',
          'text-dim': '#8D8E8F',
          surface: 'rgba(31, 40, 51, 0.6)',
          'surface-border': 'rgba(102, 252, 241, 0.15)',
          danger: '#E74C3C',
        },
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"思源黑体"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        display: ['"PingFang SC"', '"思源黑体"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'metric': ['48px', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(102, 252, 241, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(102, 252, 241, 0.6), 0 0 60px rgba(102, 252, 241, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
