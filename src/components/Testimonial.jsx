import React from 'react'
import { index } from '../assets'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechVision',
    avatar: index.pic_2,
    text: 'This platform transformed how we handle automation. The AI capabilities are truly next-generation and have saved us countless hours.',
    stars: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering at CloudScale',
    avatar: index.pic_1,
    text: 'Exceptional performance and reliability. The real-time analytics give us insights we never had before. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Emily Thompson',
    role: 'Product Lead at InnovateLabs',
    avatar: index.pic_3,
    text: 'The workflow management features are intuitive and powerful. Our team productivity increased by 40% in the first month.',
    stars: 5,
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black py-16 w-full sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <div className='flex flex-col items-center gap-3 mb-12 lg:mb-16 text-center'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          What People Say
        </span>
        <p className='font-space font-bold text-white text-[30px] sm:text-[38px] md:text-[42px] lg:text-5xl'>
          Teams That <span className='text-green-400'>Never Forget Us</span>
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base max-w-md'>
          See why thousands of teams choose us to power their workflow.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-md md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="relative group bg-white/5 border border-green-500/20 hover:border-green-400/50 hover:bg-green-500/5 cursor-pointer rounded-3xl p-7 sm:p-8 flex flex-col gap-5 transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow */}
            <div className='absolute -top-8 -right-8 w-24 h-24 rounded-full bg-green-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

            {/* Stars */}
            <div className='flex gap-1'>
              {Array.from({ length: t.stars }).map((_, s) => (
                <svg key={s} className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>

            {/* Quote mark */}
            <svg className='w-8 h-8 text-green-400/25' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
            </svg>

            {/* Quote text */}
            <p className="text-green-200/60 text-sm sm:text-base leading-relaxed flex-1 font-space">
              {t.text}
            </p>

            {/* Divider */}
            <div className='w-full h-px bg-green-500/15' />

            {/* Author */}
            <div className='flex items-center gap-3'>
              <div className='w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-green-500/30 group-hover:border-green-400/60 transition-all duration-300 flex-shrink-0'>
                <img src={t.avatar} className='w-full h-full object-cover' alt={t.name} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base font-space group-hover:text-green-300 transition-colors duration-200">{t.name}</p>
                <p className="text-green-200/40 text-xs sm:text-sm mt-0.5 font-space">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials
