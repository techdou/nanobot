import { Wrench, Activity, Lock, RotateCcw, Eye, Puzzle, Zap, Clock } from 'lucide-react'

const components = [
  {
    icon: Wrench,
    title: '工具注册与调用',
    desc: 'Tool Registry、Schema 定义、参数校验、执行分发',
    detail: '模型输出 tool_call → Harness 解析 → 路由到具体工具 → 执行 → 结果回传',
    color: 'var(--accent-warm)',
  },
  {
    icon: Activity,
    title: 'Agent Loop 控制',
    desc: '多轮交互循环、turn 管理、终止条件、流式输出',
    detail: 'user → LLM → tool_call → execute → tool_result → LLM → ... → done',
    color: 'var(--accent-rose)',
  },
  {
    icon: Lock,
    title: '权限控制与沙箱',
    desc: '文件访问白名单、命令执行限制、网络隔离、敏感操作审批',
    detail: 'bwrap sandbox、workspace path guard、allowed_commands 配置',
    color: 'var(--accent-sage)',
  },
  {
    icon: RotateCcw,
    title: '错误恢复与重试',
    desc: '工具失败处理、网络超时重试、状态回滚、优雅降级',
    detail: 'try-catch → error classification → retry strategy → fallback → report',
    color: 'var(--accent-ochre)',
  },
  {
    icon: Eye,
    title: '可观测性与日志',
    desc: '事件流、Langfuse 集成、结构化日志、执行轨迹',
    detail: 'agent_start → turn_start → message → tool_execution → turn_end → agent_end',
    color: 'var(--accent-warm)',
  },
  {
    icon: Puzzle,
    title: '插件与扩展机制',
    desc: 'MCP 协议、Skill 注册、自定义 Provider、生命周期 Hook',
    detail: 'beforeToolCall / afterToolCall hooks、自定义 convertToLlm、stream proxy',
    color: 'var(--accent-rose)',
  },
  {
    icon: Zap,
    title: '并发与调度',
    desc: '并行工具执行、顺序依赖、信号量控制、取消机制',
    detail: 'parallel mode: preflight sequential → execute concurrent → emit in order',
    color: 'var(--accent-sage)',
  },
  {
    icon: Clock,
    title: '会话与状态管理',
    desc: '消息历史、上下文压缩、记忆持久化、Session ID',
    detail: 'message[] → transformContext → convertToLlm → KV cache optimization',
    color: 'var(--accent-ochre)',
  },
]

export default function SlideHarnessDetail() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            Harness 详解
          </span>
          <h2 className="text-4xl font-bold mb-4">Harness Engineering 的八大组件</h2>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-5">
          {components.map((comp, i) => {
            const Icon = comp.icon
            return (
              <div
                key={i}
                className="card p-5 flex flex-col"
                style={{ borderTop: `3px solid ${comp.color}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${comp.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: comp.color }} />
                  </div>
                  <h3 className="text-base font-bold">{comp.title}</h3>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {comp.desc}
                </p>

                <div className="mt-auto p-3 rounded-lg bg-[var(--code-bg)]">
                  <p className="text-xs text-[var(--code-text)] mono leading-relaxed">
                    {comp.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[var(--text-tertiary)]">
            这些组件共同构成 Agent 的"运行时外壳"，让不确定的模型输出变成确定的软件行为
          </p>
        </div>
      </div>
    </div>
  )
}
