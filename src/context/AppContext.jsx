import { createContext, useContext, useState, useEffect } from 'react'
import { loadData, saveData } from '../utils/storage'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [data, setData] = useState(loadData)
  const [mode, setMode] = useState('parent')
  const [activeNav, setActiveNav] = useState('dashboard')

  useEffect(() => {
    saveData(data)
  }, [data])

  const value = {
    data,
    setData,
    mode,
    setMode,
    activeNav,
    setActiveNav
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}