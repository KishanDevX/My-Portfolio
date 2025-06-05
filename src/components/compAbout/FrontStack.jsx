import React from 'react'
import ToolsList from '../../components/common/ToolsList'

const FrontStack = () => {

  const techSet = [
    { name: 'HTML5', icon: '/My-Portfolio/icons/html5.svg' },
    { name: 'CSS', icon: '/My-Portfolio/icons/css.svg' },
    { name: 'JavaScript', icon: '/My-Portfolio/icons/javascript.svg' },
    { name: 'React', icon: '/My-Portfolio/icons/react.svg' },
    { name: 'Sass' , icon: '/My-Portfolio/icons/sass.svg' },
  ]
  
  return (
    <div id="frontStack">
        <h2>For frontend</h2>
        <ToolsList tools={techSet} />
    </div>
  )
}

export default FrontStack