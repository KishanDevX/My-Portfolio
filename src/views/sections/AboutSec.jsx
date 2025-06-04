import React from 'react'

import '../../stylesheets/about.css'

const AboutSec = () => {
  return (
    <section id='aboutSec'>
        <h2>About Me</h2>
        <div id="para">
          <p>
            I'm a 16-year-old developer focused on building clean, 
            responsive, and user-friendly frontend interfaces using HTML, 
            CSS, JavaScript, and React. I turn ideas into functional, 
            visually appealing websites that perform smoothly across all devices.            
          </p>
          <p>
            While I currently specialize in frontend development, 
            I'm actively learning backend technologies to expand my skills toward full-stack development in the future. 
            If you're looking for a reliable 
            developer to bring your website or web app to life, I'm ready to help.
          </p>
        </div>
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
    </section>
  )
}

export default AboutSec