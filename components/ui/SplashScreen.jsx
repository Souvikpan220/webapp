import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <div className='fixed inset-0 flex items-center justify-center overflow-hidden bg-[#050816]'>
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 blur-3xl' />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative'
      >
        <div className='w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-glow flex items-center justify-center'>
          <span className='text-4xl font-bold text-cyan-300'>K</span>
        </div>
      </motion.div>
    </div>
  )
}
