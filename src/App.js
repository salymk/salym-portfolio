import React from 'react';
import Hero from './sections/header/Hero'
import Navbar from './sections/header/Navbar'
import About from './sections/main-content/about/About'
import Projects from './sections/main-content/projects/Projects'

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Projects />
    </div>
  )
}

export default App;
