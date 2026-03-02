import React, { useEffect } from 'react'
import HeroContact from '../components/HeroContact.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Container from '../components/ui/Container.jsx'

const Contact = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full min-h-screen  bg-[#0f0d1a]  items-center overflow-x-hidden">
      
     
      <Navbar/>
      <HeroContact />

     
      <ContactSection />
      <Container/>

     
      <Newsletter/>
      <Footer />

      
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--nexura-purple)] opacity-10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[var(--nexura-yellow)] opacity-5 blur-[120px] pointer-events-none -z-10"></div>

    </main>
  )
}

export default Contact