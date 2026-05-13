import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Setup from './pages/Setup'
import Home from './pages/Home'
import SplashScreen from './components/ui/SplashScreen'
import { useEffect, useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <SplashScreen />

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/setup' element={<Setup />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
