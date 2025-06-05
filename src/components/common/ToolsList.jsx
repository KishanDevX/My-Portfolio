import React from 'react'

const ToolsList = ({tools}) => {

  return (
    <div className="stackBox">
        <ul>
            {tools.map((tool, index) => (
              <li key={index}>
                  <img src={tool.icon} alt={tool.name} />
              </li>
            ))}
        </ul>
    </div>
  )
}

export default ToolsList