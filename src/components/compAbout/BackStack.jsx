import React from 'react'
import ToolsList from '../common/ToolsList'

const BackStack = () => {

  const techSet = [
    { name: 'Node.js', icon: '/My-Portfolio/icons/node-js.svg' },
    { name: 'Express', icon: '/My-Portfolio/icons/express.svg' },
    { name: 'MongoDB', icon: '/My-Portfolio/icons/mongodb.svg' },
    { name: 'postman', icon: '/My-Portfolio/icons/postman.svg' },
    { name: 'mongoose', icon: '/My-Portfolio/icons/mongoose.svg' },
  ]

  return (
    <div id="backStack">
        <h2>For backend</h2>
        <ToolsList tools={techSet} />
    </div>
  )
}

export default BackStack