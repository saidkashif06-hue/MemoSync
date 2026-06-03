import React from 'react'
import { index } from '../assets'

const Hero = () => {
  return (
    <section id='hero' className='relative flex w-full h-140 sm:h-130 lg:h-160 bg-black overflow-hidden'>

      {/* Dual radial glow — green left, cyan right */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_20%_55%,rgba(74,222,128,0.07),transparent)] pointer-events-none z-0' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_80%_45%,rgba(56,189,248,0.08),transparent)] pointer-events-none z-0' />

      {/* Left Content */}
      <div className='flex flex-col gap-3 sm:flex-col lg:gap-10 sm:gap-5 md:gap-7 sm:w-1/2 z-10 lg:py-25 sm:py-18'>
        <div className='flex flex-col gap-4 sm:px-0 py-8 px-13 sm:py-0 lg:gap-5 sm:gap-3 md:gap-3 w-full lg:ml-25 md:ml-15 sm:ml-12'>

          {/* Badge */}
          <span className='inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
            <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
            AI Meeting Memory Assistant
          </span>

          {/* Headline */}
          <p className='text-white font-space text-[42px] leading-[1.1] sm:text-[32px] sm:leading-[1.1] md:text-[42px] lg:text-[60px] font-bold tracking-tighter'>
            Every Meeting,<br />
            <span className='text-green-400'>Instantly</span><br />
            Organized.
          </p>

          {/* Subtext */}
          <p className='text-green-200/65 font-space text-[15px] font-normal tracking-tight md:text-[16px] sm:text-[14px] lg:text-[17px] leading-relaxed max-w-sm'>
            Turn conversations into action. AI-generated summaries,
            auto-assigned tasks & searchable transcripts —
            your team's second brain.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 sm:gap-3 lg:ml-25 md:ml-15 sm:ml-12 px-12 sm:px-0 items-center'>
          <button className='
            relative group overflow-hidden
            px-5 py-2.5 lg:px-7 lg:py-3.5 md:px-5 md:py-2.5 sm:px-3 sm:py-2
            rounded-xl sm:rounded-lg bg-green-400 text-black
            font-space font-semibold lg:text-lg md:text-[17px] text-[15px]
            cursor-pointer transition-all duration-300
            hover:bg-green-300 hover:scale-105
            shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_28px_rgba(74,222,128,0.65)]
          '>
            <span className='relative z-10 flex items-center gap-2'>
              Start Free Trial
              <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </span>
          </button>

          <button className='
            flex items-center gap-2
            px-5 py-2.5 lg:px-7 lg:py-3.5 md:px-5 md:py-2.5 sm:px-3 sm:py-2
            rounded-xl sm:rounded-lg border border-green-500/50 bg-transparent
            text-green-300 font-space font-medium lg:text-lg md:text-[17px] text-[15px]
            cursor-pointer transition-all duration-300
            hover:bg-green-500/10 hover:border-green-400 hover:scale-105
          '>
            <span className='flex items-center justify-center w-6 h-6 rounded-full border border-green-400 bg-green-400/10'>
              <svg className='w-3 h-3 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M8 5v14l11-7z' />
              </svg>
            </span>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className='flex gap-6 lg:ml-25 md:ml-15 sm:ml-12 px-12 sm:px-0'>
          {[['10K+', 'Teams'], ['98%', 'Accuracy'], ['2 min', 'Avg Summary']].map(([val, label]) => (
            <div key={label} className='flex flex-col'>
              <span className='text-green-400 font-space font-bold text-lg lg:text-xl'>{val}</span>
              <span className='text-green-200/50 font-space text-xs tracking-wider uppercase'>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — image with cyan/blue decorative frame */}
      <div className='relative py-10 sm:w-1/2 flex items-center justify-center'>

        {/* Ambient glow behind image */}
        <div className='absolute inset-4 rounded-3xl bg-cyan-500/8 blur-3xl pointer-events-none' />

        {/* Corner bracket decorations */}
        <div className='absolute top-10 right-4 lg:top-12 lg:right-6 w-7 h-7 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg' />
        <div className='absolute bottom-10 left-4 lg:bottom-12 lg:left-4 w-7 h-7 border-b-2 border-l-2 border-green-400/60 rounded-bl-lg' />
        <div className='absolute top-10 left-4 lg:top-12 lg:left-4 w-7 h-7 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg' />
        <div className='absolute bottom-10 right-4 lg:bottom-12 lg:right-6 w-7 h-7 border-b-2 border-r-2 border-green-400/30 rounded-br-lg' />

        {/* Image card */}
        <div className='relative hidden sm:block'>

          {/* Multi-layer glow */}
          <div className='absolute -inset-3 rounded-2xl bg-gradient-to-tr from-cyan-500/15 via-transparent to-green-500/15 blur-xl pointer-events-none' />
          <div className='absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-sky-500/5 to-green-400/15 pointer-events-none' />

          {/* Glowing border frame */}
          <div className='relative rounded-2xl border border-cyan-400/30 overflow-hidden
                          shadow-[0_0_40px_rgba(56,189,248,0.15),0_0_80px_rgba(56,189,248,0.07),inset_0_0_40px_rgba(56,189,248,0.03)]'>

            {/* Fake browser top bar */}
            <div className='flex items-center gap-2 px-3 py-2 bg-black/70 border-b border-cyan-500/20 backdrop-blur-sm'>
              <span className='w-2.5 h-2.5 rounded-full bg-red-500/70'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-yellow-400/70'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-green-500/70'></span>
              <span className='ml-3 text-cyan-400/50 font-space text-[10px] tracking-widest'>MemoSync — Live Dashboard</span>
              <span className='ml-auto flex items-center gap-1.5 text-green-400 text-[10px] font-space font-semibold'>
                <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
                LIVE
              </span>
            </div>

            <img
              src={index.HeroImg}
              className='lg:w-[520px] md:w-[360px] sm:w-[280px] object-cover'
              alt="MemoSync dashboard"
            />

            {/* Scanline overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.015] to-cyan-400/[0.04] pointer-events-none' />
          </div>

          {/* Floating pill — Calendar Synced */}
          <div className='absolute -top-4 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black border border-cyan-400/45 shadow-[0_0_14px_rgba(56,189,248,0.3)]'>
            <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse'></span>
            <span className='text-cyan-400 text-[11px] font-space font-medium tracking-wide'>Calendar Synced</span>
          </div>

          {/* Floating card — Summary Ready */}
          <div className='absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-black border border-green-500/35 shadow-[0_0_14px_rgba(74,222,128,0.2)]'>
            <div className='w-6 h-6 rounded-full bg-green-400/15 border border-green-400/30 flex items-center justify-center'>
              <svg className='w-3 h-3 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
              </svg>
            </div>
            <div className='flex flex-col'>
              <span className='text-green-300 text-[11px] font-space font-semibold'>Summary Ready</span>
              <span className='text-green-200/40 text-[10px] font-space'>Q4 Review · 2 min ago</span>
            </div>
          </div>

          {/* Floating chip — Team Velocity (desktop only) */}
          <div className='absolute top-1/2 -left-5 -translate-y-1/2 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black border border-sky-500/35 shadow-[0_0_12px_rgba(56,189,248,0.2)]'>
            <div className='w-5 h-5 rounded-full border-2 border-sky-400/60 flex-shrink-0 bg-sky-400/10' />
            <div className='flex flex-col'>
              <span className='text-sky-300 text-[11px] font-space font-semibold'>Team Velocity</span>
              <span className='text-green-400 text-[10px] font-space'>+18% this week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background glows */}
      <img src={index.Herobg1} className='absolute w-90 opacity-15 right-45 bottom-40 sm:w-80 md:w-100 lg:-ml-7 lg:-mt-10 lg:w-150' alt="" />
      <img src={index.Herobg2} className='absolute hidden sm:block sm:w-70 sm:ml-90 sm:mt-25 md:w-90 lg:w-150 md:ml-90 lg:ml-170 md:mt-13 lg:mt-20 -z-10 opacity-15' alt="" />

    </section>
  )
}

export default Hero