import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <section className="section">
      <div className="columns">
        
        <div className="column">
          <h1 className="title has-text-centered is-2">About</h1>
          <div className="columns is-centered px-6 mt-4">
            <div className="column is-two-fifths px-6">
              <Card />
            </div>
            <div className="column is-half">
  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
