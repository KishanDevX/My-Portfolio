import React from 'react'

const Header = () => {
  return (
    <header>
        <div id="logo" className="animate__animated animate__fadeInLeft">
            <div id="title">Kishan<span>Dev</span>X</div>
        </div>
        <nav>
            <div id="navOptions">
              <ul>
                <li><a href="#frontSec">home</a></li>
                <li><a href="#aboutSec">about</a></li>
                <li><a href="#projectSec">projects</a></li>
                <li><a href="#serviceSec">services</a></li>
              </ul>
            </div>
            <ul>
                <li><a id='contactBtn' href="#contactSec">contact me</a></li> 
                <li id='hamIcon'><i className="ri-menu-3-line"></i></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header