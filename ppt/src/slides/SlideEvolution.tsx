import { MessageSquare, Database, Shield, Network } from 'lucide-react'

const stages = [
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    subtitle: '指令工程',
    color: 'var(--accent-warm)',
    desc: '如何给模型下指令',
    details: ['语气与风格控制', '输出格式规范', 'Few-shot 示例', 'Chain-of-Thought'],
    focus: '怎么说',
  },
  {
    icon: Database,
    title: 'Context Engineering',
    subtitle: '上下文工程',
    color: 'var(--accent-ochre)',
    desc: '给模型看什么信息',
    details: ['RAG 检索增强', '代码库索引', '长期记忆管理', '窗口压缩策略'],
    focus: '给什么',
  },
  {
    icon: Shield,
    title: 'Harness Engineering',
    subtitle: '运行时外壳工程',
    color: 'var(--accent-rose)',
    desc: '模型如何安全地行动',
    details: ['工具注册与调用', '会话状态管理', '权限控制与沙箱', '错误恢复与日志'],
    focus: '怎么动',
  },
  {
    icon: Network,
    title: 'Coordination Engineering',
    subtitle: '协作编排工程',
    color: 'var(--accent-sage)',
    desc: '多个 Agent 如何协同',
    details: ['Planner-Worker 架构', 'Multi-Agent Handoff', '并发调度', '结果合并与冲突'],
    focus: '怎么协作',
  },
]

export default function SlideEvolution() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            演进主线
          </span>
          <h2 className="text-4xl font-bold mb-4">从指令到协作：四层工程化演进</h2>
          <div className="divider" />
        </div>

        {/* Evolution flow */}
        <div className="grid grid-cols-4 gap-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < stages.length - 1 && (
                  <div className="absolute top-10 left-full w-6 h-px bg-[var(--border-medium)] z-0" />
                )}

                <div className="card h-full flex flex-col">
                  {/* Icon & title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">{stage.title}</h3>
                      <p className="text-sm text-[var(--text-tertiary)]">{stage.subtitle}</p>
                    </div>
                  </div>

                  {/* Focus tag */}
                  <div
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: `${stage.color}15`,
                      color: stage.color,
                    }}
                  >
                    核心问题：{stage.focus}
                  </div>

                  {/* Description */}
                  <p className="text-base text-[var(--text-secondary)] mb-4 font-medium">
                    {stage.desc}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mt-auto">
                    {stage.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-tertiary)]">
                        <span style={{ color: stage.color }}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom annotation */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[var(--text-tertiary)]">
          <div className="w-16 h-px bg-[var(--border-medium)]" />
          <span className="text-sm">复杂度递增，工程化程度递增</span>
          <div className="w-16 h-px bg-[var(--border-medium)]" />
        </div>
      </div>
    </div>
  )
}
