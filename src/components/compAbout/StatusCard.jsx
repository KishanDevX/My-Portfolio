import React from 'react'

const StatusCard = () => {
  return (
    <div id="skillOverview">
        <div id="frontend">
        <div className="bar" id='frontBar'>
            <div className="inside">78%</div>
        </div>
        <div className="text">
            <h3>Frontend</h3>
            <p>Experienced in frontend development and ready to deliver clean, responsive websites for your project.</p>
        </div>
        </div>
        <div id="backend">
        <div className="bar" id='backBar'>
            <div className="inside">25%</div>
        </div>
        <div className="text">
            <h3>Backend</h3>
            <p>Currently learning backend development to offer complete full-stack solutions soon.</p>
        </div>
        </div>
    </div>
  )
}

export default StatusCard