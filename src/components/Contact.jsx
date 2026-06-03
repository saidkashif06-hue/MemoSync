import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <div className='flex flex-col items-center gap-3 mb-10 sm:mb-14 text-center'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          Reach Out
        </span>
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-space font-bold">
          Get In <span className='text-green-400'>Touch</span>
        </p>
        <p className="text-green-200/50 font-space text-sm sm:text-base max-w-md">
          Have a question or want to work together? Fill out the form and we'll get back to you shortly.
        </p>
      </div>

      {/* Form card */}
      <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">

        {/* Glow behind card */}
        <div className='absolute inset-0 rounded-3xl bg-green-400/5 blur-2xl scale-95 pointer-events-none' />

        <div className="relative bg-white/5 border border-green-500/20 rounded-3xl p-7 sm:p-10">

          <div className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-green-300/80 text-sm font-space font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-green-200/20 outline-none focus:border-green-400/60 focus:bg-green-500/5 transition-all duration-300 font-space"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-green-300/80 text-sm font-space font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-green-200/20 outline-none focus:border-green-400/60 focus:bg-green-500/5 transition-all duration-300 font-space"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-green-300/80 text-sm font-space font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows={5}
                className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-green-200/20 outline-none focus:border-green-400/60 focus:bg-green-500/5 transition-all duration-300 resize-none font-space"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className={`w-full py-3 rounded-xl font-space font-semibold text-sm sm:text-base
                active:scale-[0.98] transition-all duration-300 cursor-pointer mt-1 flex items-center justify-center gap-2
                ${sent
                  ? 'bg-green-500/20 border border-green-400/50 text-green-300'
                  : 'bg-green-400 hover:bg-green-300 text-black shadow-[0_0_20px_rgba(74,222,128,0.35)] hover:shadow-[0_0_28px_rgba(74,222,128,0.55)]'
                }`}
            >
              {sent ? (
                <>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </>
              )}
            </button>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
