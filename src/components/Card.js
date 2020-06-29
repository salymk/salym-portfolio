import React from 'react'
import Salym from '../images/salym2.jpg'

const Card = () => {
  return (
    <div className="container">
      <figure className="image is-288x250">
        <img src={Salym} alt="Placeholder image" />
      </figure>

      <div className="media-content has-text-centered pt-5">
        <p className="title is-4">Who Am I?</p>
      </div>

      <div className="content pt-5">
        I'm a fast learner and highly motivated frontend web developer with almost two years of experience. 
        Passionate about learning and coding, with a desire 
        to apply my skills on larger development teams. Eager to tackle more complex 
        projects and continue to find ways to maximize user experience. 
      </div>

    </div>
  )
}

export default Card


// <div className="card">
//       <div className="card-image">
//         <figure className="image is-128x128">
//           <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
//         </figure>

//         <div className="card-content">
//           <div className="media">
//             <div className="media-content has-text-centered">
//               <p className="title is-4">Who Am I?</p>
//             </div>
//           </div>

//           <div className="content">
//             I'm a fast learner and highly motivated frontend web developer with almost two years of experience. 
//             Passionate about learning and coding, with a desire 
//             to apply my skills on larger development teams. Eager to tackle more complex 
//             projects and continue to find ways to maximize user experience. 
//           </div>

//         </div>
//       </div>
//     </div>