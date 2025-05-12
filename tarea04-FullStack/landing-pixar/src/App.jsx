import { useState } from 'react'

import '@/css/App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Hero from '@/componentes/Hero'
import Privacy from './componentes/Privacy'
import MovieSection from './componentes/MovieSection'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <MovieSection />

      <Footer />
      <Privacy />
    </>
  )
}

export default App
