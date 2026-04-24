import './ModeToggle.css'

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="mode-toggle">
      <button
        className={`mode-btn parent ${mode === 'parent' ? 'active' : ''}`}
        onClick={() => setMode('parent')}
      >
        👨‍👩‍👧 Phụ Huynh
      </button>
      <button
        className={`mode-btn child ${mode === 'child' ? 'active' : ''}`}
        onClick={() => setMode('child')}
      >
        👶 Bé
      </button>
    </div>
  )
}