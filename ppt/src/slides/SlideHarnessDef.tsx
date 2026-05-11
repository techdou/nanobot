import { Shield, History, TestTube, Layers } from 'lucide-react'

export default function SlideHarnessDef() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-2">
            核心概念
          </span>
          <h2 className="text-4xl font-bold mb-4">
            什么是 <span className="accent-rose">Harness Engineering</span>？
          </h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: Traditional SE */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center">
                <History className="w-5 h-5 text-[var(--accent-sage)]" />
              </div>
              <h3 className="text-xl font-bold">传统软件工程中的 Harness</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Test Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  包裹被测程序，提供输入、捕获输出、管理依赖、模拟外部服务
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Runtime Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  运行时控制：启动、停止、监控、资源限制、日志收集
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Integration Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  接口抽象、适配器模式、服务封装、协议转换
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-[var(--border-medium)]">
              <p className="text-sm text-[var(--text-tertiary)] text-center">
                核心思想：<span className="font-semibold text-[var(--text-primary)]">包裹程序，让程序可测试、可控制、可集成</span>
              </p>
            </div>
          </div>

          {/* Right: AI Agent Harness */}
          <div className="card border-l-4 border-l-[var(--accent-rose)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-rose)]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--accent-rose)]" />
              </div>
              <h3 className="text-xl font-bold">AI Agent 中的 Harness</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Tool Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  注册、封装、执行工具；解析模型输出的工具调用；管理工具权限
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Session Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  维护多轮对话状态、消息历史、上下文窗口、记忆持久化
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Execution Harness</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Agent Loop 控制、错误恢复、并发调度、事件流、可观测性
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-[var(--accent-rose)]/30 bg-[var(--accent-rose)]/5">
              <p className="text-sm text-center">
                核心思想：<span className="font-semibold accent-rose">包裹模型，让模型可调用工具、可执行任务、可恢复状态、可观测、可组合</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Engineering object shift */}
        <div className="mt-8 p-6 rounded-2xl bg-[var(--code-bg)] text-[var(--code-text)]">
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <TestTube className="w-6 h-6 mx-auto mb-2 text-[var(--accent-sage)]" />
              <p className="text-sm font-medium">函数 / 模块 / 服务 / 程序</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">被 Harness 包裹的对象</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-[var(--text-tertiary)]" />
              <Layers className="w-5 h-5 text-[var(--accent-ochre)]" />
              <div className="w-12 h-px bg-[var(--text-tertiary)]" />
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-[var(--accent-rose)]" />
              <p className="text-sm font-medium">LLM / Tool Calls / Agent Loop / 上下文</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">新的被包裹对象</p>
            </div>
          </div>
          <p className="text-center text-sm mt-4 text-[var(--text-tertiary)]">
            这不是简单的概念搬运，而是一次"工程对象的替换"
          </p>
        </div>
      </div>
    </div>
  )
}
