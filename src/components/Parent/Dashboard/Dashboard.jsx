import Card from '../../common/Card/Card'
import './Dashboard.css'

export default function ParentDashboard() {
  const stats = [
    { label: 'Bữa ăn hôm nay', value: '3/4', icon: '🍽️', color: 'var(--color-primary)' },
    { label: 'Cân nặng', value: '15.5 kg', icon: '⚖️', color: 'var(--color-secondary)' },
    { label: 'Chiều cao', value: '95 cm', icon: '📏', color: 'var(--color-accent)' },
    { label: 'Calo hôm nay', value: '850 kcal', icon: '🔥', color: 'var(--color-warning)' }
  ]

  const recentMeals = [
    { time: 'Sáng', food: 'Bánh mì + sữa', timeText: '7:30' },
    { time: 'Trưa', food: 'Cơm + cá + rau', timeText: '11:30' },
    { time: 'Chiều', food: 'Trái cây', timeText: '15:00' }
  ]

  return (
    <div className="parent-dashboard">
      <div className="dashboard-header">
        <h1>Xin Chào! 👋</h1>
        <p>Đây là tổng quan về bé hôm nay</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <Card key={i} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-grid">
        <Card className="recent-meals-card">
          <h3>🍽️ Bữa ăn gần đây</h3>
          <div className="meal-list">
            {recentMeals.map((meal, i) => (
              <div key={i} className="meal-item">
                <div className="meal-time">{meal.time}</div>
                <div className="meal-food">{meal.food}</div>
                <div className="meal-time-text">{meal.timeText}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="growth-summary-card">
          <h3>📈 Tăng Trưởng</h3>
          <div className="growth-placeholder">
            <p>Biểu đồ tăng trưởng sẽ hiển thị ở đây</p>
            <small>(Chart.js integration)</small>
          </div>
        </Card>

        <Card className="nutrition-summary-card">
          <h3>🥗 Dinh Dưỡng Hôm Nay</h3>
          <div className="nutrition-bars">
            <div className="nutrition-item">
              <span>Protein</span>
              <div className="progress-bar"><div className="progress" style={{ width: '60%' }}></div></div>
            </div>
            <div className="nutrition-item">
              <span>Carbs</span>
              <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
            </div>
            <div className="nutrition-item">
              <span>Fat</span>
              <div className="progress-bar"><div className="progress" style={{ width: '45%' }}></div></div>
            </div>
            <div className="nutrition-item">
              <span>Vitamin</span>
              <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}