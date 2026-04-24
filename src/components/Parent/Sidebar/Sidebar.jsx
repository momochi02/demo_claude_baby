import './Sidebar.css'

const navItems = [
  { id: 'dashboard', label: 'Tổng Quan', icon: '📊' },
  { id: 'meals', label: 'Nhật Ký Ăn', icon: '🍽️' },
  { id: 'growth', label: 'Tăng Trưởng', icon: '📈' },
  { id: 'planner', label: 'Kế Hoạch Ăn', icon: '📅' },
  { id: 'settings', label: 'Cài Đặt', icon: '⚙️' }
]

export default function ParentSidebar({ activeNav, setActiveNav }) {
  return (
    <aside className="parent-sidebar">
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={() => setActiveNav(item.id)}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}