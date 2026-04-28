const footerLinks = {
  products: {
    title: '产品矩阵',
    links: [
      { label: '天机 Fabric', href: '#' },
      { label: '万象 Atlas', href: '#' },
      { label: '灵枢 AI2', href: '#' },
      { label: '天工 Studio', href: '#' },
    ],
  },
  solutions: {
    title: '解决方案',
    links: [
      { label: '供应链控制塔', href: '#' },
      { label: '铁前生产优化', href: '#' },
      { label: '生产模拟', href: '#' },
    ],
  },
  resources: {
    title: '资源',
    links: [
      { label: '技术文档', href: '#' },
      { label: '案例研究', href: '#' },
      { label: '博客', href: '#' },
      { label: 'API 文档', href: '#' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { label: '关于我们', href: '#' },
      { label: '加入我们', href: '#' },
      { label: '联系方式', href: '#' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-mox-dark-light/30 border-t border-mox-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-mox-gold flex items-center justify-center">
                <span className="text-mox-dark font-bold text-sm">墨</span>
              </div>
              <span className="font-bold text-lg">
                墨枢 <span className="text-mox-gold">Moxsys</span>
              </span>
            </div>
            <p className="text-sm text-mox-text leading-relaxed">
              企业级智能操作系统缔造者
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-mox-text hover:text-mox-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-mox-surface-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-mox-text-dim">
            © 2024 杭州墨枢科技有限公司 Moxsys Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-mox-text-dim hover:text-mox-cyan transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-sm text-mox-text-dim hover:text-mox-cyan transition-colors">
              服务条款
            </a>
            <a href="#" className="text-sm text-mox-text-dim hover:text-mox-cyan transition-colors">
              京ICP备XXXXXXXX号
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
