import { Shield, Layers, ArrowRight, Target } from 'lucide-react'

export default function SlideSummary() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            小结
          </span>
          <h2 className="text-5xl font-bold mb-4">核心结论</h2>
          <div className="divider mx-auto" />
        </div>

        {/* Main thesis */}
        <div className="p-8 rounded-3xl bg-[var(--code-bg)] text-[var(--code-text)] mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-[var(--accent-rose)]" />
            <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            <Layers className="w-8 h-8 text-[var(--accent-warm)]" />
          </div>
          <p className="text-2xl text-center font-bold leading-relaxed">
            Agent 工程化的本质是
          </p>
          <p className="text-3xl text-center font-black mt-3 leading-relaxed">
            <span className="text-[var(--accent-rose)]">"把不确定的模型</span>
            <span className="text-[var(--code-text)]"> 包进 </span>
            <span className="text-[var(--accent-warm)]">确定的软件系统"</span>
          </p>
        </div>

        {/* Three key insights */}
        <div className="grid grid-cols-3 gap-6">
          <div className="card text-center p-6">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-warm)]/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-[var(--accent-warm)]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Prompt 只是起点</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              写好指令很重要，但远远不够。模型需要外部系统才能变成可靠的应用。
            </p>
          </div>

          <div className="card text-center p-6">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-rose)]/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-[var(--accent-rose)]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Harness 是桥梁</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              把传统软件工程的测试、运行时、接口、调度思想，迁移到模型为中心的新场景。
            </p>
          </div>

          <div className="card text-center p-6">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-sage)]/10 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6 text-[var(--accent-sage)]" />
            </div>
            <h3 className="text-lg font-bold mb-2">演进是自然的</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              从指令 → 上下文 → 运行时 → 协作，每一层都是工程化深化的必然结果。
            </p>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-10 text-center">
          <p className="text-lg text-[var(--text-tertiary)] italic">
            "以前被 Harness 包裹的是函数、模块、服务；现在被 Harness 包裹的是 LLM、Tool Calls、Agent Loop。"
          </p>
        </div>
      </div>
    </div>
  )
}
