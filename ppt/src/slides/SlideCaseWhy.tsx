import { GitBranch, Star, BookOpen, Target } from 'lucide-react'

export default function SlideCaseWhy() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            案例选择
          </span>
          <h2 className="text-4xl font-bold mb-4">为什么选择 nanobot 作为主案例？</h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: nanobot */}
          <div className="card border-l-4 border-l-[var(--accent-warm)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-warm)]/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--accent-warm)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">nanobot（主案例）</h3>
                <p className="text-sm text-[var(--text-tertiary)]">HKUDS / techdou · Python · Ultra-lightweight</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Star className="w-4 h-4 text-[var(--accent-warm)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">小而可读的核心</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    核心 agent loop 精简，适合课堂讲清楚主线逻辑
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-4 h-4 text-[var(--accent-warm)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">完整的 Harness 映射</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    agent / channels / providers / session / skills / security / cron / tools
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-4 h-4 text-[var(--accent-warm)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">多通道与部署</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    CLI / Telegram / Discord / Feishu / WebUI / API / Docker
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-4 h-4 text-[var(--accent-warm)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">MCP 与 Skill 机制</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    支持 Model Context Protocol 和自定义 Skill 扩展
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[var(--accent-warm)]/5 border border-[var(--accent-warm)]/20">
              <p className="text-sm text-center">
                <span className="font-semibold">适合课堂：</span>
                架构清晰、模块边界明确、对新手友好
              </p>
            </div>
          </div>

          {/* Right: pi */}
          <div className="card border-l-4 border-l-[var(--accent-sage)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-[var(--accent-sage)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">pi（进阶参照）</h3>
                <p className="text-sm text-[var(--text-tertiary)]">earendil-works · TypeScript · Monorepo</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-sage)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">更专业的 Harness 设计</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    state management、event streaming、context transform、parallel execution
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-sage)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">丰富的生命周期 Hook</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    beforeToolCall / afterToolCall、steering、follow-up queues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-sage)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">Monorepo 架构</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    pi-ai / pi-agent-core / pi-coding-agent / pi-tui / pi-web-ui
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-sage)] mt-1 shrink-0" />
                <div>
                  <p className="text-base font-medium">概念密度高</p>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    适合证明 Harness Engineering 的专业性，但对小白容易陷入细节
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[var(--accent-sage)]/5 border border-[var(--accent-sage)]/20">
              <p className="text-sm text-center">
                <span className="font-semibold">定位：</span>
                结尾做进阶参照，展示 Harness 的完整形态
              </p>
            </div>
          </div>
        </div>

        {/* Bottom comparison */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <p className="text-2xl font-bold accent-warm">Python</p>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">nanobot 技术栈</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <p className="text-2xl font-bold accent-rose">~2,400</p>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">nanobot Commits</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <p className="text-2xl font-bold accent-sage">TypeScript</p>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">pi 技术栈</p>
          </div>
        </div>
      </div>
    </div>
  )
}
