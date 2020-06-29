import React from 'react'
import Salym from '../../images/salym-sq-img.jpg'

const Card = () => {
  return (
    <div className="card">
    <div className="card-image">
      <figure className="image is-125x125">
        <img src={Salym} alt='Salym Akhmedov' />
      </figure>
    </div>
  </div>
  )
}

export default Card