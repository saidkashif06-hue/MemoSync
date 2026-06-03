import React from 'react'
import { cards } from '../assets'

const logoSizes = {
  1:  'w-[120px] h-[50px]',   // Google
  2:  'w-[250px] h-[150px]',   // Linear
  3:  'w-[130px] h-[28px]',  // Microsoft
  4:  'w-[150px] h-[120px]',  // Notion
  5:  'w-[100px] h-[28px]',  // OpenAI
  6:  'w-[100px] h-[30px]',  // Spotify
  7:  'w-[80px] h-[34px]',   // Stripe
  8:  'w-[200px] h-[150px]',  // Supabase
  9:  'w-[90px] h-[22px]',   // Vercel
  10: 'w-[90px] h-[32px]',   // Adobe
  11: 'w-[100px] h-[26px]',  // Cursor
  12: 'w-[150px] h-[110px]',  // Framer
}

const Trusted = () => {
  return (
    <section className='bg-black lg:py-10 py-8 flex flex-col gap-10 overflow-hidden border-y border-green-500/15'>

      {/* Heading */}
      <div className='flex flex-col items-center gap-2'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          Trusted Worldwide
        </span>
        <p className='text-white font-space font-semibold text-[27px] sm:text-[32px] md:text-[35px] lg:text-[40px] text-center'>
          Powering <span className='text-green-400'>Smarter</span> Meetings
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base text-center'>
          10,000+ teams use MemoSync to turn conversations into action
        </p>
      </div>

      {/* Scrolling logo strip */}
      <div className='relative'>
        <div className='absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none' />

        <div className='flex gap-4 w-max animate-scroll'>
          {[...cards, ...cards].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className='flex w-52 h-20 rounded-xl items-center justify-center shrink-0
                         border border-green-500/20 bg-white/5 backdrop-blur-sm
                         shadow-[0_0_12px_rgba(34,197,94,0.06)]
                         hover:border-green-400/60 hover:bg-green-500/10
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.18)]
                         transition-all duration-300 group cursor-pointer'
            >
              <img
                src={item.image}
                alt={item.name}
                className={`object-contain invert brightness-75 group-hover:brightness-110 transition-all duration-300 ${logoSizes[item.id]}`}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Trusted