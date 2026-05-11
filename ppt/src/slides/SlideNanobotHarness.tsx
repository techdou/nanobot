import { Shield, Wrench, MessageCircle, Lock, Clock, Puzzle } from 'lucide-react'

const harnessPoints = [
  {
    icon: MessageCircle,
    title: '会话管理',
    color: 'var(--accent-warm)',
    what: 'session/ 模块',
    details: [
      '消息历史持久化（JSONL 格式）',
      '上下文窗口自动压缩（token-based）',
      '归档摘要（archived summary）注入 system prompt',
      'Session ID 与 KV cache 复用',
    ],
  },
  {
    icon: Wrench,
    title: '工具封装',
    color: 'var(--accent-ochre)',
    what: 'skills/ + tools/ 模块',
    details: [
      'Skill 注册表：动态发现与加载',
      'MCP 协议支持：多 Server 连接',
      '工具 Schema 自动生成与校验',
      '执行结果格式化回传 LLM',
    ],
  },
  {
    icon: Lock,
    title: '权限与安全',
    color: 'var(--accent-rose)',
    what: 'security/ 模块',
    details: [
      'bwrap sandbox（Linux 沙箱）',
      'Workspace path guard（路径白名单）',
      'allowed_commands 配置',
      '敏感操作确认（ask_user）',
    ],
  },
  {
    icon: Clock,
    title: '部署与调度',
    color: 'var(--accent-sage)',
    what: 'cron/ + Docker',
    details: [
      '自然语言 Cron 表达式解析',
      '定时提醒与任务调度',
      'Docker + docker-compose 部署',
      'macOS LaunchAgent / Linux systemd',
    ],
  },
  {
    icon: Puzzle,
    title: '扩展机制',
    color: 'var(--accent-warm)',
    what: 'MCP + plugins',
    details: [
      'Model Context Protocol 标准接口',
      'Channel 插件化（插件注册表）',
      'Provider 两步骤扩展机制',
      'Jinja2 响应模板自定义',
    ],
  },
  {
    icon: Shield,
    title: '可观测性',
    color: 'var(--accent-rose)',
    what: 'logging + Langfuse',
    details: [
      '结构化日志（loguru）',
      'Langfuse 集成（trace & span）',
      'Channel 上下文注入 logger',
      'SSE streaming 事件追踪',
    ],
  },
]

export default function SlideNanobotHarness() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            Harness 视角
          </span>
          <h2 className="text-4xl font-bold mb-4">用 Harness Engineering 分析 nanobot</h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-3 gap-5">
          {harnessPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="card p-5"
                style={{ borderTop: `3px solid ${point.color}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${point.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: point.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{point.title}</h3>
                    <p className="text-xs text-[var(--text-tertiary)] mono">{point.what}</p>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {point.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span style={{ color: point.color }} className="mt-1.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom insight */}
        <div className="mt-6 p-5 rounded-2xl bg-[var(--code-bg)] text-[var(--code-text)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-rose)]/20 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[var(--accent-rose)]" />
            </div>
            <div>
              <p className="text-base font-semibold mb-1">关键洞察</p>
              <p className="text-sm text-[var(--text-tertiary)]">
                nanobot 的目录结构本身就是 Harness Engineering 的教科书式映射：
                每一个目录对应一个传统软件工程概念在 Agent 场景下的重新实现。
                agent/ 是运行时控制，session/ 是状态管理，security/ 是沙箱与权限，
                skills/ 是工具封装，channels/ 是接口抽象，cron/ 是任务调度。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
