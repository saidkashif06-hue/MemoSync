import React from 'react'
import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import Features from '../components/Features'
import User from '../components/User'
import Plans from '../components/Plans'


import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonial'
import FAQ from '../components/Faq'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trusted/>
      <Features/>
      <User/>
      <Plans/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
