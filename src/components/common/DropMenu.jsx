import React from 'react'
import NavPoints from './NavPoints'

const DropMenu = ({ onClose }) => {
  return (
    <div id="dropMenu" className="animate__animated animate__fadeInRight  animate__faster">
      <NavPoints includeIcon={true}  onClose={onClose} />
    </div>
  )
}

export default DropMenu