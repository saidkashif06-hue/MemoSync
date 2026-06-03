import React from 'react'

const starterFeatures = [
  'Up to 5 team members',
  '10 meetings per month',
  'AI summaries & transcripts',
  'Basic action item detection',
  'Email support',
]

const proFeatures = [
  'Unlimited team members',
  'Unlimited meetings',
  'Advanced AI summaries',
  'Auto task assignment',
  'Calendar sync (Google & Outlook)',
  'Searchable meeting memory',
  'Priority 24/7 support',
]

const enterpriseFeatures = [
  'Everything in Pro',
  'Custom AI models',
  'Dedicated infrastructure',
  'SSO & advanced security',
  'Custom integrations & API',
  'White-label options',
  'SLA guarantee',
]

const FeatureItem = ({ text, highlight = false }) => (
  <div className="flex items-start gap-3">
    <i className={`ri-check-line text-base mt-0.5 flex-shrink-0 ${highlight ? 'text-black' : 'text-green-400'}`} />
    <p className={`text-sm sm:text-base font-space ${highlight ? 'text-black/80' : 'text-green-200/60'}`}>{text}</p>
  </div>
)

const Plans = () => {
  return (
    <section
      id="pricing"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Heading */}
      <div className='flex flex-col items-center gap-3 mb-12 sm:mb-16 text-center'>
        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-space tracking-wide'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
          Simple Pricing
        </span>
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-space font-bold">
          Invest in <span className='text-green-400'>Smarter Meetings</span>
        </p>
        <p className='text-green-200/50 font-space text-sm sm:text-base max-w-md'>
          Start free. Scale as your team grows. Cancel anytime.
        </p>
      </div>

      <div className="w-full max-w-md md:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:items-center py-4 mx-auto">

        {/* ── Starter ── */}
        <div className="bg-white/5 border border-green-500/20 hover:border-green-500/40 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 flex flex-col h-full transition-all duration-300 group">
          <h3 className="text-white text-2xl sm:text-3xl font-bold font-space">Starter</h3>
          <p className='text-green-200/40 text-xs mt-1 font-space'>For individuals & small teams</p>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-white text-4xl sm:text-5xl font-bold font-space">$19</span>
            <span className="text-green-200/50 text-sm sm:text-base font-space">/month</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1 border-t border-green-500/15 pt-6">
            {starterFeatures.map((f) => (
              <FeatureItem key={f} text={f} />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl cursor-pointer border border-green-500/40 bg-transparent text-green-300 text-sm sm:text-base hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 font-space font-medium">
            Get Started Free
          </button>
        </div>

        {/* ── Pro (featured) ── */}
        <div className="relative bg-green-400 border border-green-300 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 md:scale-105 shadow-[0_0_50px_rgba(74,222,128,0.35)] flex flex-col h-full">

          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full text-white bg-black border border-green-400/40 whitespace-nowrap font-space tracking-wide">
            ✦ Most Popular
          </span>

          <h3 className="text-black text-2xl sm:text-3xl font-bold font-space">Pro</h3>
          <p className='text-black/50 text-xs mt-1 font-space'>For growing teams & startups</p>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-black text-4xl sm:text-5xl font-bold font-space">$69</span>
            <span className="text-black/60 text-sm sm:text-base font-space">/month</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1 border-t border-black/15 pt-6">
            {proFeatures.map((f) => (
              <FeatureItem key={f} text={f} highlight />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl text-white bg-black cursor-pointer hover:bg-black/80 transition-all duration-300 text-sm sm:text-base font-space font-semibold shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            Start Free Trial →
          </button>
        </div>

        {/* ── Enterprise ── */}
        <div className="bg-white/5 border border-green-500/20 hover:border-green-500/40 rounded-3xl py-8 px-7 sm:py-10 sm:px-10 flex flex-col h-full transition-all duration-300 group">
          <h3 className="text-white text-2xl sm:text-3xl font-bold font-space">Enterprise</h3>
          <p className='text-green-200/40 text-xs mt-1 font-space'>For large orgs & custom needs</p>

          <div className="mt-4">
            <span className="text-white text-3xl sm:text-4xl font-bold font-space">Custom</span>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:gap-4 flex-1 border-t border-green-500/15 pt-6">
            {enterpriseFeatures.map((f) => (
              <FeatureItem key={f} text={f} />
            ))}
          </div>

          <button className="w-full mt-8 sm:mt-10 py-3 rounded-xl cursor-pointer border border-green-500/40 bg-transparent text-green-300 text-sm sm:text-base hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 font-space font-medium">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  )
}

export default Plans