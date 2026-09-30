import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import AddProject from './pages/AddProject'
import RepoAnalysis from './pages/RepoAnalysis'
import ProjectOverview from './pages/ProjectOverview'
import AIAssistant from './pages/AIAssistant'
import TestGeneration from './pages/TestGeneration'
import TestResults from './pages/TestResults'
import Deployments from './pages/Deployments'
import Monitoring from './pages/Monitoring'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />

      {/* App shell */}
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/new" element={<AddProject />} />
        <Route path="projects/analysis" element={<RepoAnalysis />} />
        <Route path="projects/overview" element={<ProjectOverview />} />
        <Route path="assistant" element={<AIAssistant />} />
        <Route path="tests" element={<TestGeneration />} />
        <Route path="tests/results" element={<TestResults />} />
        <Route path="deployments" element={<Deployments />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
