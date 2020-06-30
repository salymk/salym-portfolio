import React from 'react'

const Hero = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title mb-0">
            Hello, I'm <strong className="has-text-primary">Salym Akhmedov</strong>.
          </h1>
          <h1 className="title">
            I'm a frontend web developer.
          </h1>

          <button className="button is-primary is-outlined">
            <span>Find out more</span>
            <span className="icon is-small">
              <i className="fas fa-arrow-down"></i>
            </span>
        </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
