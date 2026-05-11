import { MessageCircleQuestion, Mail, Github, ExternalLink } from 'lucide-react'

export default function SlideQnA() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-4xl text-center">
        {/* Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="300" x2="600" y2="300" stroke="currentColor" strokeWidth="0.5" />
            <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-[var(--accent-rose)]/10 flex items-center justify-center mx-auto mb-8">
            <MessageCircleQuestion className="w-10 h-10 text-[var(--accent-rose)]" />
          </div>

          {/* Title */}
          <h1 className="text-6xl font-black mb-6">Q & A</h1>
          <div className="divider mx-auto" />

          <p className="text-2xl text-[var(--text-secondary)] mt-8 mb-12">
            欢迎提问与讨论
          </p>

          {/* Resources */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://github.com/techdou/nanobot"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-[var(--accent-warm)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-warm)]/10 flex items-center justify-center group-hover:bg-[var(--accent-warm)]/20 transition-colors">
                <Github className="w-5 h-5 text-[var(--accent-warm)]" />
              </div>
              <div className="text-left">
                <p className="text-base font-bold">nanobot</p>
                <p className="text-sm text-[var(--text-tertiary)]">github.com/techdou/nanobot</p>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--text-tertiary)] ml-auto" />
            </a>

            <a
              href="https://github.com/earendil-works/pi"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-[var(--accent-sage)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center group-hover:bg-[var(--accent-sage)]/20 transition-colors">
                <Github className="w-5 h-5 text-[var(--accent-sage)]" />
              </div>
              <div className="text-left">
                <p className="text-base font-bold">pi</p>
                <p className="text-sm text-[var(--text-tertiary)]">github.com/earendil-works/pi</p>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--text-tertiary)] ml-auto" />
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 flex items-center justify-center gap-6 text-[var(--text-tertiary)]">
            <span className="mono text-sm">高级软件工程 · 课堂分享</span>
            <div className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
            <span className="text-sm">2026.05</span>
          </div>
        </div>
      </div>
    </div>
  )
}
