import { useState } from 'react'
import { AppProvider } from './context/AppContext'
import ModeToggle from './components/ModeToggle/ModeToggle'
import ParentSidebar from './components/Parent/Sidebar/Sidebar'
import ParentDashboard from './components/Parent/Dashboard/Dashboard'
import ChildHome from './components/Child/ChildHome/ChildHome'
import './App.css'

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

function AppContent() {
  const [mode, setMode] = useState('parent')
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo">
          <span>🧒</span>
          <span>Bé Ăn Ngon</span>
        </div>
        <ModeToggle mode={mode} setMode={setMode} />
      </header>
      <div className="app-main">
        {mode === 'parent' ? (
          <div className="parent-layout">
            <ParentSidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className="parent-content">
              {activeNav === 'dashboard' && <ParentDashboard />}
              {activeNav === 'meals' && <div className="placeholder">🍽️ Nhật Ký Ăn - Đang phát triển</div>}
              {activeNav === 'growth' && <div className="placeholder">📈 Tăng Trưởng - Đang phát triển</div>}
              {activeNav === 'planner' && <div className="placeholder">📅 Kế Hoạch Ăn - Đang phát triển</div>}
              {activeNav === 'settings' && <div className="placeholder">⚙️ Cài Đặt - Đang phát triển</div>}
            </div>
          </div>
        ) : (
          <ChildHome />
        )}
      </div>
    </div>
  )
}

export default App