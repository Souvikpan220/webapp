import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlowInput from '../components/inputs/GlowInput'
import GlowButton from '../components/buttons/GlowButton'
import { fetchTikTokProfile } from '../services/tiktokApi'

export default function Setup() {
  const [discord, setDiscord] = useState('')
  const [tiktok, setTiktok] = useState('')
  const navigate = useNavigate()

  const submit = async () => {
    const profile = await fetchTikTokProfile(tiktok)

    localStorage.setItem(
      'profile',
      JSON.stringify({
        discord,
        tiktok,
        profile
      })
    )

    navigate('/home')
  }

  return (
    <div className='min-h-screen p-5 flex items-center justify-center'>
      <div className='w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6'>
        <h2 className='text-2xl font-semibold mb-6'>Setup Account</h2>

        <GlowInput
          placeholder='Discord Username'
          value={discord}
          onChange={(e) => setDiscord(e.target.value)}
        />

        <div className='mt-4'>
          <GlowInput
            placeholder='TikTok Profile URL'
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />
        </div>

        <GlowButton className='mt-6' onClick={submit}>
          Continue
        </GlowButton>
      </div>
    </div>
  )
}
