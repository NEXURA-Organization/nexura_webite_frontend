import React from 'react'
import ServiceDetails from '../components/ServiceDetails'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroServices from '../components/HeroServices'
import Container from '../components/ui/Container'

const Services = () => {
  return (
    <div className='min-h-screen bg-[#0f0d1a] overflow-x-hidden'>
          
          {/* Spacer for fixed navbar */}
          <div className='h-24 md:h-32' /> 
          
          <main>
            <Navbar/>
            <HeroServices/>
            <ServiceDetails/>
          </main>
          <Container/>
          <Newsletter/>
          <Footer />
        </div>
  )
}

export default Services