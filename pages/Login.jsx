import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlowButton from '../components/buttons/GlowButton'
import GlowInput from '../components/inputs/GlowInput'

export default function Login() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!valid.test(email)) {
      setError('Invalid Email')
      return
    }

    localStorage.setItem('email', email)
    navigate('/setup')
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-5'>
      <div className='w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-glow'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold'>Kaddu Panel</h1>
          <p className='text-gray-400 mt-2'>Premium TikTok Utility</p>
        </div>

        <GlowInput
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && (
          <p className='text-red-400 text-sm mt-2'>{error}</p>
        )}

        <GlowButton className='mt-5' onClick={handleLogin}>
          Sign In
        </GlowButton>
      </div>
    </div>
  )
}
