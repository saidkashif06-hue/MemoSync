import React from 'react'
import { features } from '../assets'

const memoFeatures = [
  { id: 1, title: "AI Meeting Summaries",     para: "Instantly generate concise, accurate summaries after every meeting — no more manual note-taking or missed details."       },
  { id: 2, title: "Auto Action Items",         para: "MemoSync detects tasks, deadlines, and owners from conversations and assigns them automatically to your team."            },
  { id: 3, title: "Voice Transcription",       para: "Real-time transcription powered by advanced speech recognition — every word captured with 98% accuracy."                 },
  { id: 4, title: "Searchable Memory",         para: "Search across all your past meetings instantly. Find any decision, quote, or discussion in seconds."                     },
  { id: 5, title: "Calendar Sync",             para: "Seamlessly integrates with Google Calendar, Outlook, and more — summaries land in your calendar automatically."          },
  { id: 6, title: "Team Collaboration",        para: "Share meeting notes, tag teammates, and collaborate on action items in one unified workspace."                           },
]

const Features = () => {
  return (
    <section id='features' className='w-full bg-black lg:h-210 md:h-180 h-160 py-30 flex flex-col items-center overflow-hidden'>

      {/* Heading */}
      <div className='flex flex-col items-center gap-3'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          What We Offer
        </span>
        <p className='text-white text-[30px] md:text-[33px] lg:text-4xl font-space font-bold text-center'>
          Your Team's <span className='text-green-400'>Second Brain</span>
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base text-center'>
          Everything you need to turn conversations into action
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-3 gap-y-10 place-items-center -ml-10 py-20'>
        {memoFeatures.map((item, index) => (
          <div
            key={item.id}
            className='relative group flex flex-col lg:gap-2
                       w-40 h-30 sm:w-50 sm:h-35 md:w-60 md:h-45 lg:w-75 lg:h-60
                       bg-white/5 border border-green-500/20
                       hover:border-green-400/50 hover:bg-green-500/5
                       rounded-xl ml-10 px-6 py-2 md:py-4
                       transition-all duration-300 cursor-pointer overflow-hidden'
          >
            {/* Hover glow corner */}
            <div className='absolute -top-6 -right-6 w-20 h-20 rounded-full bg-green-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

            {/* Bottom glow line on hover */}
            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

            {/* Icon with green tint — reuse from features array by index */}
            <div className={`flex items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300
              ${item.id === 1 ? 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-13 lg:h-13' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15'}`}>
              <img
                src={features[index]?.icon}
                className={`${item.id === 1 ? 'w-3.5 sm:w-4 md:w-5 lg:w-7' : 'w-4 sm:w-5 md:w-6 lg:w-8'} filter brightness-150 group-hover:brightness-200 transition-all duration-300`}
                alt=""
              />
            </div>

            <div className='flex flex-col gap-.5 md:gap-1 lg:gap-2'>
              <p className={`text-white text-[10px] sm:text-[13px] md:text-md lg:text-lg font-space font-semibold group-hover:text-green-300 transition-colors duration-200
                ${item.id === 1 ? 'mt-2.5 md:mt-4 lg:mt-5.5' : ''}`}>
                {item.title}
              </p>
              <p className='text-green-200/50 text-[9px] sm:text-[11px] md:text-[13px] tracking-tighter lg:text-[15px] font-space font-normal md:leading-5 lg:leading-5.5'>
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Features