import React from 'react'
import Navbar from '../components/Navbar'
import HeroAbout from '../components/HeroAbout'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Container from '../components/ui/Container'

const About = () => {
  return (
    <div className='min-h-screen bg-[#0f0d1a] overflow-x-hidden'>
      <Navbar />
      
      <div className='h-24 md:h-32' /> 
      
      <main>
        
        <HeroAbout />
      </main>
      <Container/>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default About