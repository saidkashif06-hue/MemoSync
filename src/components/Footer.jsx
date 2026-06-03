import React, { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const productLinks = [
  { label: 'AI Summaries' },
  { label: 'Action Items' },
  { label: 'Voice Transcripts' },
  { label: 'Calendar Sync' },
  { label: 'Team Analytics' },
]

const stats = [
  { value: '10K+', label: 'Teams' },
  { value: '98%', label: 'Accuracy' },
  { value: '2 min', label: 'Avg Summary' },
  { value: '50M+', label: 'Mins Recorded' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="relative bg-black border-t border-green-500/15 px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col items-center gap-12 overflow-hidden">

      {/* CTA Banner */}
      <div className="relative w-full max-w-5xl rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-sm px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold text-xl sm:text-2xl">
            Never forget a meeting again.
          </p>
          <p className="text-green-200/50 text-sm">
            Start your free trial — no credit card required.
          </p>
        </div>

        <button className="px-6 py-3 rounded-xl bg-green-400 text-black font-semibold text-sm">
          Start Free Trial
        </button>
      </div>

      {/* Stats */}
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-green-500/15 rounded-2xl py-5 bg-white/5 text-center">
            <p className="text-green-400 font-bold text-2xl">{s.value}</p>
            <p className="text-green-200/40 text-xs uppercase">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <p className="text-white text-2xl font-bold">
            Memo<span className="text-green-400">Sync</span>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-white font-semibold mb-2">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-green-200/50 text-sm hover:text-green-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Product */}
        <div>
          <p className="text-white font-semibold mb-2">Product</p>
          {productLinks.map((item) => (
            <p key={item.label} className="text-green-200/50 text-sm">
              {item.label}
            </p>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-white font-semibold mb-2">Stay Updated</p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-2 text-white text-sm"
          />

          <button
            onClick={handleSubscribe}
            className="mt-2 w-full bg-green-400 text-black py-2 rounded-xl text-sm"
          >
            {subscribed ? 'Done!' : 'Subscribe'}
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="w-full max-w-5xl flex justify-between text-xs text-green-200/35">
        <p>© {new Date().getFullYear()} MemoSync</p>

        <div className="flex gap-4">
          {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-green-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer