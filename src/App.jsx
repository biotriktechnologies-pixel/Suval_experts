import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/home/Home.jsx'
import Opportunities from './components/Opportunities.jsx'
import About from './components/AboutUs.jsx'
import Testimonials from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Language from './components/LanguageService.jsx'
import Colaborator from './components/Creator_colborator.jsx'

function App() {
  

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path='/aboutus' element = {<About/>} />
          <Route path='/Testimonials' element = {<Testimonials/>} />
          <Route path='/Contact' element = {<Contact/>} />
          <Route path='/Language_service' element = {<Language/>} />
          <Route path='/Creator_colborator' element = {<Colaborator/>} />

        </Routes>

      </main>

      <Footer/>

     

    </div>
  )
}

export default App
