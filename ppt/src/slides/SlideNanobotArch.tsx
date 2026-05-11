import { ArrowRight, MessageCircle, Brain, Settings, Shield, Wrench, Clock, Globe } from 'lucide-react'

const modules = [
  { name: 'channels', icon: MessageCircle, desc: '多通道输入', color: 'var(--accent-warm)' },
  { name: 'agent', icon: Brain, desc: 'Agent Loop', color: 'var(--accent-rose)' },
  { name: 'providers', icon: Settings, desc: 'LLM Provider', color: 'var(--accent-ochre)' },
  { name: 'session', icon: Clock, desc: '会话管理', color: 'var(--accent-sage)' },
  { name: 'skills', icon: Wrench, desc: '工具与技能', color: 'var(--accent-warm)' },
  { name: 'security', icon: Shield, desc: '权限与安全', color: 'var(--accent-rose)' },
  { name: 'cron', icon: Clock, desc: '定时任务', color: 'var(--accent-ochre)' },
  { name: 'api / webui', icon: Globe, desc: '输出接口', color: 'var(--accent-sage)' },
]

export default function SlideNanobotArch() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            架构拆解
          </span>
          <h2 className="text-4xl font-bold mb-4">nanobot 架构：输入 → 处理 → 输出</h2>
          <div className="divider" />
        </div>

        {/* Architecture diagram */}
        <div className="flex items-center justify-center gap-4">
          {/* Input Channels */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-center text-[var(--text-tertiary)] mb-1 uppercase tracking-wider">输入</p>
            <div className="card p-4 w-40 text-center">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-[var(--accent-warm)]" />
              <p className="text-sm font-bold">channels</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">CLI / IM / Web</p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)]" />

          {/* Core Agent */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-center text-[var(--text-tertiary)] mb-1 uppercase tracking-wider">核心</p>
            <div className="card p-4 w-40 text-center border-2 border-[var(--accent-rose)]">
              <Brain className="w-6 h-6 mx-auto mb-2 text-[var(--accent-rose)]" />
              <p className="text-sm font-bold">agent</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent Loop</p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)]" />

          {/* LLM Provider */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-center text-[var(--text-tertiary)] mb-1 uppercase tracking-wider">模型</p>
            <div className="card p-4 w-40 text-center">
              <Settings className="w-6 h-6 mx-auto mb-2 text-[var(--accent-ochre)]" />
              <p className="text-sm font-bold">providers</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">OpenAI / Claude / ...</p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)]" />

          {/* Tools */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-center text-[var(--text-tertiary)] mb-1 uppercase tracking-wider">工具</p>
            <div className="card p-4 w-40 text-center">
              <Wrench className="w-6 h-6 mx-auto mb-2 text-[var(--accent-warm)]" />
              <p className="text-sm font-bold">skills / tools</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">MCP / 自定义</p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)]" />

          {/* Output */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-center text-[var(--text-tertiary)] mb-1 uppercase tracking-wider">输出</p>
            <div className="card p-4 w-40 text-center">
              <Globe className="w-6 h-6 mx-auto mb-2 text-[var(--accent-sage)]" />
              <p className="text-sm font-bold">api / webui</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">SSE / WebSocket</p>
            </div>
          </div>
        </div>

        {/* Supporting modules */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-sage)]/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-[var(--accent-sage)]" />
            </div>
            <div>
              <p className="text-sm font-bold">session</p>
              <p className="text-xs text-[var(--text-tertiary)]">记忆与上下文</p>
            </div>
          </div>

          <div className="w-px h-8 bg-[var(--border-medium)]" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-rose)]/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[var(--accent-rose)]" />
            </div>
            <div>
              <p className="text-sm font-bold">security</p>
              <p className="text-xs text-[var(--text-tertiary)]">权限与沙箱</p>
            </div>
          </div>

          <div className="w-px h-8 bg-[var(--border-medium)]" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-ochre)]/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-[var(--accent-ochre)]" />
            </div>
            <div>
              <p className="text-sm font-bold">cron</p>
              <p className="text-xs text-[var(--text-tertiary)]">定时任务</p>
            </div>
          </div>

          <div className="w-px h-8 bg-[var(--border-medium)]" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-warm)]/10 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-[var(--accent-warm)]" />
            </div>
            <div>
              <p className="text-sm font-bold">bus</p>
              <p className="text-xs text-[var(--text-tertiary)]">消息总线</p>
            </div>
          </div>
        </div>

        {/* Directory structure */}
        <div className="mt-8 code-block">
          <p className="text-[var(--accent-ochre)] mb-2"># nanobot 目录结构</p>
          <p>nanobot/</p>
          <p className="ml-4">├── agent/          <span className="text-[var(--text-tertiary)]"># Agent Loop 核心</span></p>
          <p className="ml-4">├── channels/       <span className="text-[var(--text-tertiary)]"># 多通道输入 (Telegram/Discord/Feishu)</span></p>
          <p className="ml-4">├── providers/      <span className="text-[var(--text-tertiary)]"># LLM Provider 抽象</span></p>
          <p className="ml-4">├── session/        <span className="text-[var(--text-tertiary)]"># 会话管理与记忆</span></p>
          <p className="ml-4">├── skills/         <span className="text-[var(--text-tertiary)]"># 工具注册与 Skill 机制</span></p>
          <p className="ml-4">├── security/       <span className="text-[var(--text-tertiary)]"># 权限控制与沙箱</span></p>
          <p className="ml-4">├── cron/           <span className="text-[var(--text-tertiary)]"># 定时任务调度</span></p>
          <p className="ml-4">├── api/            <span className="text-[var(--text-tertiary)]"># OpenAI-compatible API</span></p>
          <p className="ml-4">└── web/            <span className="text-[var(--text-tertiary)]"># WebUI</span></p>
        </div>
      </div>
    </div>
  )
}
