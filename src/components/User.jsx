import React from 'react'
import { index } from '../assets'

const stats = [
  { value: '10K+',  label: 'Active Users'      },
  { value: '99.9%', label: 'Uptime'             },
  { value: '150+',  label: 'Integrations'       },
  { value: '4.9★',  label: 'Average Rating'     },
]

const User = () => {
  return (
    <section className='w-full bg-black py-16 lg:py-24 flex flex-col items-center gap-14 overflow-hidden'>

      {/* Heading */}
      <div className='flex flex-col items-center gap-3 px-6 text-center'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          Loved by Teams Worldwide
        </span>
        <p className='text-white font-space font-bold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px] leading-tight'>
          Trusted by <span className='text-green-400'>10,000+</span> professionals
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base max-w-xl'>
          From startups to Fortune 500s — teams rely on us every day to automate, scale, and grow.
        </p>
      </div>

      {/* Dashboard image with glow frame */}
      <div className='relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-6 sm:px-10'>
        {/* Glow behind image */}
        <div className='absolute inset-0 rounded-2xl bg-green-400/10 blur-3xl scale-95 pointer-events-none' />

        {/* Border frame */}
        <div className='relative rounded-2xl border border-green-500/25 overflow-hidden shadow-[0_0_60px_rgba(74,222,128,0.1)]'>
          {/* Top bar decoration */}
          <div className='flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-green-500/20'>
            <span className='w-3 h-3 rounded-full bg-red-500/70'></span>
            <span className='w-3 h-3 rounded-full bg-yellow-500/70'></span>
            <span className='w-3 h-3 rounded-full bg-green-500/70'></span>
            <span className='ml-4 text-green-400/60 font-space text-xs tracking-widest'>MemoSync — Dashboard</span>
          </div>
          <img
            src={index.IMG_2}
            className='w-full object-cover'
            alt="Dashboard preview"
          />
        </div>
      </div>

      {/* Stats row */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 px-10 w-full max-w-4xl'>
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className='flex flex-col items-center gap-1 p-4 rounded-xl border border-green-500/20 bg-white/5 hover:border-green-400/40 hover:bg-green-500/5 transition-all duration-300'
          >
            <span className='text-green-400 font-space font-bold text-2xl sm:text-3xl'>{value}</span>
            <span className='text-green-200/50 font-space text-xs sm:text-sm tracking-wider uppercase text-center'>{label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default User
