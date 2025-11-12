import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
