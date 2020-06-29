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
            <div className="tags">
              <span className="tag is-large is-primary">HTML</span>
              <span className="tag is-large is-primary">CSS</span>
              <span className="tag is-large is-primary">JavaScript</span>
              <span className="tag is-large is-primary">React</span>
              <span className="tag is-large is-primary">SASS</span>
              <span className="tag is-large is-primary">Bulma CSS</span>
              <span className="tag is-large is-primary">Node.js</span>
              <span className="tag is-large is-primary">Express.js</span>
              <span className="tag is-large is-primary">GIT/GitHub</span>

            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
