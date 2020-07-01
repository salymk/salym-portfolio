import React from 'react'
import Card from './Card'
import Skills from './Skills'
import Salym2 from '../../../images/mountain-salym.jpg'


const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4">
            <Card />
          </div>
          <div className="column is-6">
            <p className="text-size">
              A fast learner and highly motivated frontend web developer with almost two years of experience. 
              Passionate about learning and coding, with a desire 
              to apply his skills on larger development teams. Eager to tackle more complex 
              projects and continue to find ways to maximize user experience.
              <a classNameName="has-text-primary"> Let's create something great together!</a> 
            </p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default About
