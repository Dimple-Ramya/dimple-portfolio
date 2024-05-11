import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/content/home/Home'
import SideLinks from './components/content/sidelinks/SideLinks'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import About from './components/content/about/About';
import { Outlet } from 'react-router-dom';
import Skills from './components/content/skills/Skills';
import Projects from './components/content/projects/Projects'
import ContactForm from './components/content/contact form/ContactForm'

const App = () => {
  return (
    <div className='h-dvh w-dvw'>
      <Header/>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section id='contactform'>
        <ContactForm />
      </section>
    </div>
  )
}


export default App