import React from 'react'

const NavPoints = ({includeIcon, onClose}) => {
  const homeIcon = <i className="ri-home-4-line"></i>;
  const aboutIcon = <i className="ri-user-received-2-line"></i>;
  const projectIcon = <i className="ri-folder-3-line"></i>;
  const serviceIcon = <i className="ri-service-line"></i>;

  return (
    <ul  onClick={onClose}>
        <li><a href="#frontSec">{includeIcon && homeIcon}home</a></li>
        <li><a href="#aboutSec">{includeIcon && aboutIcon}about</a></li>
        <li><a href="#projectSec">{includeIcon && projectIcon}projects</a></li>
        <li><a href="#serviceSec">{includeIcon && serviceIcon}services</a></li>
    </ul>
  )
}

export default NavPoints