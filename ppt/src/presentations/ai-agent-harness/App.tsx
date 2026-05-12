import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import SlideCover from '../../slides/SlideCover'
import SlideIntro from '../../slides/SlideIntro'
import SlideEvolution from '../../slides/SlideEvolution'
import SlideBoundaries from '../../slides/SlideBoundaries'
import SlideHarnessDef from '../../slides/SlideHarnessDef'
import SlideHarnessDetail from '../../slides/SlideHarnessDetail'
import SlideCaseWhy from '../../slides/SlideCaseWhy'
import SlideNanobotArch from '../../slides/SlideNanobotArch'
import SlideNanobotHarness from '../../slides/SlideNanobotHarness'
import SlidePiCompare from '../../slides/SlidePiCompare'
import SlideSummary from '../../slides/SlideSummary'
import SlideQnA from '../../slides/SlideQnA'

const slides = [
  SlideCover,
  SlideIntro,
  SlideEvolution,
  SlideBoundaries,
  SlideHarnessDef,
  SlideHarnessDetail,
  SlideCaseWhy,
  SlideNanobotArch,
  SlideNanobotHarness,
  SlidePiCompare,
  SlideSummary,
  SlideQnA,
]

export default function AiAgentHarness() {
  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goNext = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'f') {
        toggleFullscreen()
      } else if (e.key === 'Escape') {
        setCurrent(0)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  const CurrentSlide = slides[current]
  const progress = ((current + 1) / slides.length) * 100

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--bg-primary)]">
      <div className="grain-overlay" />

      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--border-light)] z-50">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent-warm), var(--accent-rose))',
          }}
        />
      </div>

      <div className="w-full h-full">
        <CurrentSlide />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
            title="返回首页"
          >
            <Home className="w-5 h-5 text-[var(--text-secondary)]" />
          </Link>
          <span className="mono text-sm text-[var(--text-tertiary)]">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <span className="text-sm text-[var(--text-tertiary)]">
            按 → 翻页 · F 全屏 · Esc 回首页
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
          <div className="w-px h-5 bg-[var(--border-medium)] mx-1" />
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-[var(--text-secondary)]" />
            ) : (
              <Maximize2 className="w-5 h-5 text-[var(--text-secondary)]" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute top-6 right-8 z-40">
        <span className="mono text-xs tracking-widest text-[var(--text-tertiary)] uppercase">
          Slide {current + 1}
        </span>
      </div>
    </div>
  )
}
