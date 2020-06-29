import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <a role="button" className="navbar-burger bruger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Projects</a>
          <a className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar