import React from 'react'
import Salym from '../../images/salym-sq-img.jpg'

const Card = () => {
  return (
    <div className="card">
    <div className="card-image">
      <figure className="image is-150x150">
        <img src={Salym} alt='Salym Akhmedov' />
      </figure>

      <div className="card-content">
        <div className="media">
          <div className="media-content has-text-centered">
            <h1 className="title is-2">Who Am <strong className="has-text-primary">I</strong>?</h1>
          </div>
        </div>

        <div className="content">
          I'm a fast learner and highly motivated frontend web developer with almost two years of experience. 
          Passionate about learning and coding, with a desire 
          to apply my skills on larger development teams. Eager to tackle more complex 
          projects and continue to find ways to maximize user experience.
        </div>

      </div>
    </div>
  </div>
  )
}

export default Card