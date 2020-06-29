import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <section className="section">
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title has-text-centered is-2">About</h1>
          <div className="columns is-centered px-6 mt-4">
            <div className="column is-two-fifths px-6">
              <Card />
            </div>
            <div className="column is-half">
              <h1 className="title is-2">Who Am I?</h1>
              <div className="content is-4">
                I'm a fast learner and highly motivated frontend web developer with almost two years of experience. 
                Passionate about learning and coding, with a desire 
                to apply my skills on larger development teams. Eager to tackle more complex 
                projects and continue to find ways to maximize user experience.
              </div>

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
