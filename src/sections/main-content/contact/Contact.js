import React from 'react'

const Contact = () => {
  return (
    <div className="section has-background-primary">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title has-text-white has-text-centered is-1">Contact</h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            
          <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>
        
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Message"></textarea>
          </div>
        </div>

        <div className="control">
          <button className="button">Submit</button>
        </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact