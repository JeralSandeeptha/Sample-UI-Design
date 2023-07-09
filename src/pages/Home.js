import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import HeaderDownSection from '../components/HeaderDownSection'
import HeroSection from '../components/HeroSection'
import Slider from '../components/Slider'
import Team from '../components/Team'
import UnderFeatures from '../components/UnderFeatures'

function Home() {
  return (
    <div>
      <HeroSection />
      <HeaderDownSection />
      <Features />
      <Slider />
      <UnderFeatures />
      <Team />
      <Footer />
    </div>
  )
}

export default Home
