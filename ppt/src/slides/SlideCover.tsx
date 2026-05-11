import { Cpu, ArrowRight } from 'lucide-react'

export default function SlideCover() {
  return (
    <div className="slide-container">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]">
        <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="100" r="300" stroke="currentColor" strokeWidth="1" />
          <circle cx="350" cy="100" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="350" cy="100" r="100" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="400" y2="400" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="400" y2="600" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Top tag */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-warm)] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="tag mono text-xs tracking-[0.2em] uppercase">
            高级软件工程 · 课堂分享
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-7xl font-black leading-[1.1] mb-6 text-balance">
          从 <span className="accent-warm">Prompt</span> 到{' '}
          <span className="accent-rose">Harness</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[var(--text-secondary)]">
          AI Agent 背后的软件工程架构演进
        </h2>

        <div className="divider mx-auto" />

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--text-tertiary)] max-w-3xl leading-relaxed mb-12">
          Prompt Engineering → Context Engineering → Harness Engineering → Coordination Engineering
        </p>

        {/* Bottom info */}
        <div className="flex items-center gap-8 text-[var(--text-tertiary)]">
          <div className="flex items-center gap-2">
            <span className="mono text-sm">2026.05</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
          <div className="flex items-center gap-2">
            <span className="text-sm">案例：nanobot & pi</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
          <div className="flex items-center gap-2">
            <span className="text-sm">GitHub 开源项目分析</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[var(--text-tertiary)] animate-pulse">
        <span className="text-sm">按空格或 → 开始</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  )
}
