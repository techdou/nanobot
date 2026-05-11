import { Lightbulb, AlertTriangle } from 'lucide-react'

export default function SlideIntro() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent-warm)]/10 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-[var(--accent-warm)]" />
          </div>
          <div>
            <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-1">
              问题引入
            </span>
            <h2 className="text-4xl font-bold">为什么 AI Agent 不只是一个 Prompt？</h2>
          </div>
        </div>

        <div className="divider" />

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-10 mt-8">
          {/* Left: The misconception */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-[var(--accent-ochre)]" />
              <h3 className="text-xl font-bold">常见误解</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                很多人认为 AI Agent = <span className="accent-warm font-semibold">写好 Prompt</span>，
                只要给模型足够聪明的指令，它就能自动完成所有任务。
              </p>
              <p>
                但现实中，模型裸跑是没法构成可靠应用的。它不会自己调用工具、
                不会管理会话、不会处理错误、不会控制权限。
              </p>
              <div className="code-block mt-6">
                <p className="text-[var(--accent-ochre)] mb-2">// 这种幻想不成立</p>
                <p>const result = await llm.prompt("帮我写代码、部署、测试、发邮件");</p>
                <p className="text-[var(--text-tertiary)] mt-2">// 模型没有 shell、没有文件系统、没有网络</p>
              </div>
            </div>
          </div>

          {/* Right: The reality */}
          <div className="card border-l-4 border-l-[var(--accent-sage)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-sage)]" />
              <h3 className="text-xl font-bold">工程现实</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                模型本身是 <span className="accent-sage font-semibold">核心智能单元</span>，
                但它需要一整套外部系统来管理：
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  '给它上下文（Context Engineering）',
                  '定义工具并解析工具调用（Tool Registry）',
                  '执行 shell、读写文件、调用 API（Sandbox）',
                  '维护 session 和状态（State Management）',
                  '处理失败、记录轨迹、控制权限（Observability）',
                  '管理多轮循环和并发（Scheduling）',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-sm text-[var(--accent-warm)] mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-10 p-6 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-light)]">
          <p className="text-xl text-center font-medium text-[var(--text-primary)]">
            这一整套"把 LLM 包起来并让它可运行"的东西，就是{' '}
            <span className="accent-rose font-bold">Agent Harness</span>
          </p>
        </div>
      </div>
    </div>
  )
}
