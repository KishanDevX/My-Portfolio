import React from 'react'
import ToolsList from '../../components/common/ToolsList'

export const ToolStack = () => {
  
  const techSet = [
    { name: 'git', icon: '/My-Portfolio/icons/git.svg' },
    { name: 'github', icon: '/My-Portfolio/icons/github.svg' },
    { name: 'vscode', icon: '/My-Portfolio/icons/vscode.svg' },
    { name: 'python', icon: '/My-Portfolio/icons/python.svg' },
    { name: 'netlify', icon: '/My-Portfolio/icons/netlify.svg' },
  ]

  return (
    <div id="frontStack" data-aos="fade-right" data-aos-duration="1000">
        <h2>Tools</h2>
        <ToolsList tools={techSet} />
    </div>
  )
}
