import React from 'react'
import Card from '../../components/Card'

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">About</h1>

        <div className="columns">
          <div className="column">
          About me

          <Card />
          
          </div>
          <div className="column">Skills</div>
        </div>
      </div>
    </section>
  )
}

export default About
