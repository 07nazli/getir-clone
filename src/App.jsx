import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Campaigns from './components/Campaigns'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className='container mx-auto grid gap-y-6'>
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  )
}
