import './ChildHome.css'

export default function ChildHome() {
  const childProfile = {
    name: 'Bé',
    avatar: '🐼'
  }

  const todaysMeals = [
    { type: 'Sáng', icon: '🥛', done: true },
    { type: 'Trưa', icon: '🍜', done: true },
    { type: 'Chiều', icon: '🍎', done: false },
    { type: 'Tối', icon: '🍚', done: false }
  ]

  const stars = 3

  return (
    <div className="child-home">
      <div className="child-welcome">
        <div className="child-avatar">{childProfile.avatar}</div>
        <div className="child-greeting">
          <h1>Chào {childProfile.name}! 👋</h1>
          <p>Hôm nay bé ăn ngon lắm!</p>
        </div>
      </div>

      <div className="child-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < stars ? 'filled' : ''}`}>⭐</span>
        ))}
      </div>

      <div className="child-meals-card">
        <h3>Hôm Nay Ăn Gì?</h3>
        <div className="child-meals-grid">
          {todaysMeals.map((meal, i) => (
            <div key={i} className={`child-meal-item ${meal.done ? 'done' : ''}`}>
              <div className="child-meal-icon">{meal.icon}</div>
              <div className="child-meal-type">{meal.type}</div>
              {meal.done && <div className="child-meal-check">✓</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="child-actions">
        <button className="btn btn-primary btn-lg">
          🍽️ Đánh Dấu Ăn Xong!
        </button>
      </div>
    </div>
  )
}