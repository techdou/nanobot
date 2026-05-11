import { ArrowRight, MessageSquare, Database, Shield, Network } from 'lucide-react'

const boundaries = [
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    color: 'var(--accent-warm)',
    scope: '指令层面',
    what: '怎么写指令让模型输出更好',
    examples: ['角色设定', '输出格式', '思维链提示', 'Few-shot 示例'],
    boundary: '不解决模型能否执行动作的问题',
  },
  {
    icon: Database,
    title: 'Context Engineering',
    color: 'var(--accent-ochre)',
    scope: '信息层面',
    what: '给模型看什么信息、怎么看',
    examples: ['RAG 检索', '代码索引', '记忆压缩', '上下文注入'],
    boundary: '不解决信息获取后的执行问题',
  },
  {
    icon: Shield,
    title: 'Harness Engineering',
    color: 'var(--accent-rose)',
    scope: '运行时层面',
    what: '模型外部的执行系统怎么设计',
    examples: ['工具注册', 'Agent Loop', '权限沙箱', '错误恢复'],
    boundary: '不解决多 Agent 协作问题',
  },
  {
    icon: Network,
    title: 'Coordination Engineering',
    color: 'var(--accent-sage)',
    scope: '系统层面',
    what: '多个 Agent / 工具链 / 系统如何协同',
    examples: ['任务分解', 'Planner-Worker', 'Handoff', '并发调度'],
    boundary: '不解决单个 Agent 的内部执行问题',
  },
]

export default function SlideBoundaries() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            概念边界
          </span>
          <h2 className="text-4xl font-bold mb-4">四个概念的边界与分工</h2>
          <div className="divider" />
        </div>

        {/* Comparison table */}
        <div className="space-y-4">
          {boundaries.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-stretch gap-4 p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] hover:border-[var(--border-medium)] transition-colors"
              >
                {/* Icon column */}
                <div className="flex flex-col items-center justify-center w-16 shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <span
                    className="text-xs font-bold text-center leading-tight"
                    style={{ color: item.color }}
                  >
                    {item.title.split(' ')[0]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${item.color}12`,
                        color: item.color,
                      }}
                    >
                      {item.scope}
                    </span>
                  </div>

                  <div className="col-span-3">
                    <p className="text-base font-medium text-[var(--text-primary)]">{item.what}</p>
                  </div>

                  <div className="col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((ex, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 rounded-md text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-3">
                    <p className="text-sm text-[var(--text-tertiary)] italic">
                      边界：{item.boundary}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div className="mt-8 p-6 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-light)]">
          <div className="flex items-center justify-center gap-4 text-lg">
            <span className="font-medium">指令</span>
            <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            <span className="font-medium">上下文</span>
            <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            <span className="font-bold accent-rose">运行时外壳</span>
            <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            <span className="font-medium">协作系统</span>
          </div>
          <p className="text-center text-sm text-[var(--text-tertiary)] mt-3">
            每一层都建立在前一层之上，但解决的是完全不同的问题域
          </p>
        </div>
      </div>
    </div>
  )
}
