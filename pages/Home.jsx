import { useState } from 'react'
import GlowButton from '../components/buttons/GlowButton'
import FreeServiceModal from '../components/modals/FreeServiceModal'
import PremiumServiceModal from '../components/modals/PremiumServiceModal'
import AnimatedCounter from '../components/ui/AnimatedCounter'

export default function Home() {
  const profile = JSON.parse(localStorage.getItem('profile'))

  const [freeOpen, setFreeOpen] = useState(false)
  const [premiumOpen, setPremiumOpen] = useState(false)

  return (
    <div className='p-5 pb-24 max-w-md mx-auto'>
      <div className='rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl'>
        <div className='flex items-center gap-4'>
          <img
            src={profile?.profile?.avatar}
            className='w-20 h-20 rounded-2xl object-cover'
          />

          <div>
            <h2 className='text-2xl font-bold'>
              {profile?.profile?.nickname}
            </h2>
            <p className='text-gray-400'>
              @{profile?.profile?.username}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3 mt-6'>
          <StatCard title='Followers' value={123456} />
          <StatCard title='Following' value={845} />
          <StatCard title='Likes' value={928372} />
          <StatCard title='Videos' val
