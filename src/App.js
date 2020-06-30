import React from 'react';
import Hero from './sections/header/Hero'
import Navbar from './sections/header/Navbar'
import About from './sections/main-content/about/About'
import Projects from './sections/main-content/projects/Projects'
import Contact from './sections/main-content/contact/Contact'

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
