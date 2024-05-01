import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/images/navlogo.svg"
import avatar from "../../assets/images/avatar.jpg"
function Navbar() {
  return (
    <header className='nav-heder'>
      <div className="nav-container">
        <div className="nav-left-container">
          <div className="nav-logo-img">
            <img src={navlogo} alt="navlogo" />
          </div>
          <a href="./">Apps</a>
        </div>

        <div className="nav-right-container">
          <div className="nav-user-img">
            <img src={avatar} alt="user-profile" />
          </div>
          <div className="nav-user-info">
            <p>sophiya Brown</p>
            <a href="mailto:sophiyabrown@gmil.com">sophiyabrown@gmil.com</a>
          </div>
        </div>

      </div>
    </header >
  )
}

export default Navbar