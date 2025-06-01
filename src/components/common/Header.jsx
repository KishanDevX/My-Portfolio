import React from 'react'
import { useState } from 'react';
import NavPoints from './NavPoints'
import DropMenu from './DropMenu'

const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <header>
        <div id="logo" className="animate__animated animate__fadeInLeft">
            <div id="title">Kishan<span>Dev</span>X</div>
        </div>
        <nav>
            <div id="navOptions">
              <NavPoints includeIcon={false} />
            </div>
            <ul>
                <li><a id='contactBtn' href="#contactSec">contact me</a></li> 
                <li id="hamIcon" onClick={toggleMenu}>
                  <i className={`ri-menu-3-line ham-icon ${showMenu ? 'hidden' : 'visible'}`}></i>
                  <i className={`ri-close-line ham-icon ${showMenu ? 'visible' : 'hidden'}`}></i>
                </li>
            </ul>
        </nav>
        {showMenu && <DropMenu  onClose={() => setShowMenu(false)} />}
    </header>
  )
}

export default Header