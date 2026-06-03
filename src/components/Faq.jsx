import React, { useState } from 'react'
import { faqData } from '../assets'

const FAQ = () => {
  const [openId, setOpenId] = useState(null)

  return (
    <section
      id='about'
      className='w-full bg-black flex flex-col py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 items-center overflow-hidden'
    >

      {/* Heading */}
      <div className='flex flex-col items-center gap-3 mb-10 sm:mb-12 lg:mb-14 text-center'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          Got Questions?
        </span>
        <p className='text-white text-3xl sm:text-4xl md:text-[45px] lg:text-5xl font-space font-bold'>
          Frequently Asked <span className='text-green-400'>Questions</span>
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base max-w-md'>
          Everything you need to know. Can't find an answer? Reach out to our team.
        </p>
      </div>

      {/* FAQ Items */}
      <div className='flex flex-col gap-4 sm:gap-5 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>
        {faqData.map((item) => {
          const isOpen = openId === item.id
          return (
            <div
              key={item.id}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`
                flex flex-col w-full rounded-2xl cursor-pointer
                border px-5 sm:px-6 py-4 overflow-hidden
                transition-all duration-300 ease-in-out
                ${isOpen
                  ? 'bg-green-500/10 border-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.08)] max-h-60'
                  : 'bg-white/5 border-green-500/20 hover:border-green-500/40 hover:bg-white/8 max-h-16'}
              `}
            >
              {/* Question row */}
              <div className='flex justify-between items-center gap-4'>
                <p className={`text-[15px] sm:text-[17px] font-space font-semibold transition-colors duration-200 ${isOpen ? 'text-green-300' : 'text-white'}`}>
                  {item.title}
                </p>

                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300
                  ${isOpen ? 'bg-green-400 border-green-400' : 'bg-transparent border-green-500/40'}`}>
                  <i className={`text-base transition-transform duration-300
                    ${isOpen ? 'ri-subtract-line text-black' : 'ri-add-line text-green-400'}`}
                  />
                </div>
              </div>

              {/* Answer */}
              <p className={`
                text-green-200/55 text-[13px] sm:text-[15px] font-space font-normal tracking-tight leading-relaxed
                overflow-hidden transition-all duration-300
                ${isOpen ? 'opacity-100 mt-3 h-auto' : 'opacity-0 h-0'}
              `}>
                {item.para}
              </p>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default FAQ
