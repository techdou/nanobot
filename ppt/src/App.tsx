import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AiAgentHarness from './presentations/ai-agent-harness/App'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-agent-harness" element={<AiAgentHarness />} />
      </Routes>
    </HashRouter>
  )
}
