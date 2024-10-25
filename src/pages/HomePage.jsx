import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Products from '../components/Products'
import Programs from '../components/Programs'
import Portfolio from '../components/Portfolio'
import ClientSection from '../components/Client'
import OurTeam from '../components/OurTeam'
import Testimonials from '../components/Testimonial'
import CareersSection from '../components/Careers'
import WriteToUsForm from '../components/WriteToUs'
import Footer from '../components/Footer'


export default function HomePage() {
  return (
    <div className="Home">
      <Header />
      <MainBanner />
      <AboutUs />
      <Services />
      <Products />
      <Programs />
      <Portfolio />
      <ClientSection />
      <OurTeam />
      <Testimonials />
      <CareersSection />
      <WriteToUsForm />
      <Footer />
    </div>
  )
}
