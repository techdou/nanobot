import { Link } from 'react-router-dom'
import { Presentation, ArrowRight, Calendar, Tag } from 'lucide-react'

const presentations = [
  {
    id: 'ai-agent-harness',
    title: '从 Prompt 到 Harness',
    subtitle: 'AI Agent 背后的软件工程架构演进',
    description: '梳理 Prompt Engineering → Context Engineering → Harness Engineering → Coordination Engineering 的演进主线，以 nanobot 和 pi 为案例，分析 Agent Harness 的体系架构。',
    tags: ['AI Agent', 'Harness Engineering', 'nanobot', 'pi'],
    date: '2026.05',
    slides: 12,
    color: 'var(--accent-warm)',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative">
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-warm)] flex items-center justify-center">
              <Presentation className="w-5 h-5 text-white" />
            </div>
            <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
              Slides by techdou
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            Slides
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            课堂分享与技术演讲的幻灯片集合
          </p>
          <div className="divider mt-6" />
        </div>

        {/* Presentation list */}
        <div className="space-y-6">
          {presentations.map((p) => (
            <Link
              key={p.id}
              to={`/${p.id}`}
              className="block card p-8 group hover:border-[var(--accent-warm)] transition-all duration-300"
              style={{ borderLeft: `4px solid ${p.color}` }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent-warm)] transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-4">{p.subtitle}</p>
                  <p className="text-base text-[var(--text-tertiary)] leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 text-sm text-[var(--text-tertiary)]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{p.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[var(--text-tertiary)]">
                      <Presentation className="w-3.5 h-3.5" />
                      <span>{p.slides} 页</span>
                    </div>
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-warm)] group-hover:text-white transition-all duration-300 shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-[var(--text-tertiary)]">
          <p>使用 → / 空格 翻页 · F 全屏 · ← 回退</p>
        </div>
      </div>
    </div>
  )
}
