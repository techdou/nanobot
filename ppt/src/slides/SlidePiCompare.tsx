import { GitBranch, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const comparisons = [
  {
    aspect: '架构复杂度',
    nanobot: '单仓库，模块扁平',
    pi: 'Monorepo，5+ 包',
    winner: 'nanobot',
  },
  {
    aspect: 'Harness 完整性',
    nanobot: '基础完整，够用',
    pi: '专业级，事件流丰富',
    winner: 'pi',
  },
  {
    aspect: '事件系统',
    nanobot: '基础 SSE / WebSocket',
    pi: '完整 Event Stream：agent_start → turn_start → message → tool_execution → turn_end → agent_end',
    winner: 'pi',
  },
  {
    aspect: '生命周期 Hook',
    nanobot: '基础 before/after',
    pi: 'beforeToolCall / afterToolCall、steering、follow-up queues',
    winner: 'pi',
  },
  {
    aspect: '工具执行模式',
    nanobot: '顺序执行',
    pi: 'parallel / sequential 可配置',
    winner: 'pi',
  },
  {
    aspect: '上下文管理',
    nanobot: 'transformContext + convertToLlm',
    pi: 'transformContext + convertToLlm + thinking budgets',
    winner: 'pi',
  },
  {
    aspect: '可读性',
    nanobot: 'Python，简洁直观',
    pi: 'TypeScript，类型丰富但复杂',
    winner: 'nanobot',
  },
  {
    aspect: '课堂友好度',
    nanobot: '目录即架构，一目了然',
    pi: '需要理解 monorepo 和包依赖',
    winner: 'nanobot',
  },
]

export default function SlidePiCompare() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            进阶参照
          </span>
          <h2 className="text-4xl font-bold mb-4">对比 pi：更专业、更完整的 Harness</h2>
          <div className="divider" />
        </div>

        {/* Comparison table */}
        <div className="space-y-2">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-4 p-3 rounded-xl bg-[var(--bg-tertiary)] font-semibold text-sm">
            <div className="col-span-3">对比维度</div>
            <div className="col-span-4 text-center">nanobot</div>
            <div className="col-span-4 text-center">pi</div>
            <div className="col-span-1 text-center">优胜</div>
          </div>

          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-light)] items-center"
            >
              <div className="col-span-3 font-medium text-sm">{item.aspect}</div>
              <div className="col-span-4 text-sm text-[var(--text-secondary)]">{item.nanobot}</div>
              <div className="col-span-4 text-sm text-[var(--text-secondary)]">{item.pi}</div>
              <div className="col-span-1 flex justify-center">
                {item.winner === 'nanobot' ? (
                  <div className="flex items-center gap-1 text-[var(--accent-warm)]">
                    <span className="text-xs font-bold">N</span>
                  </div>
                ) : item.winner === 'pi' ? (
                  <div className="flex items-center gap-1 text-[var(--accent-sage)]">
                    <span className="text-xs font-bold">P</span>
                  </div>
                ) : (
                  <span className="text-xs text-[var(--text-tertiary)]">平</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="card p-5 border-l-4 border-l-[var(--accent-warm)]">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-[var(--accent-warm)]" />
              <h3 className="text-lg font-bold">nanobot 适合</h3>
            </div>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• 理解 Harness 的基本概念和模块划分</li>
              <li>• 快速上手，看到"一个 Agent 怎么跑起来"</li>
              <li>• 课堂分享，代码量适中，逻辑清晰</li>
            </ul>
          </div>

          <div className="card p-5 border-l-4 border-l-[var(--accent-sage)]">
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="w-5 h-5 text-[var(--accent-sage)]" />
              <h3 className="text-lg font-bold">pi 适合</h3>
            </div>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• 深入理解 Harness 的专业设计</li>
              <li>• 学习事件流、生命周期、并发控制</li>
              <li>• 作为进阶参照，展示完整形态</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
