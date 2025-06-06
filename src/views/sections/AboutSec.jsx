import React from 'react'

import '../../stylesheets/about.css'
import BioCard from '../../components/compAbout/BioCard'
import StatusCard from '../../components/compAbout/StatusCard'
import FrontStack from '../../components/compAbout/FrontStack'
import BackStack from '../../components/compAbout/BackStack'
import { ToolStack } from '../../components/compAbout/ToolStack'

const AboutSec = () => {
  return (
    <section id='aboutSec'>
        <BioCard />
        <StatusCard />
        <div id="techStack">
          <h2>
            <span>What I Use</span>
          </h2>
          <p>
            Here are the technologies I currently 
            work with while building frontend and backend projects.
          </p>
          <FrontStack />
          <BackStack />
          <ToolStack />
        </div>
        <div id="idCard" data-aos="zoom-in-up" data-aos-duration='8000'>
          <div id="photo">
            <img src="src/assets/images/snap2.png" alt="myself" />
          </div>
          <div id="name">Kishan Kumar</div>
          <div id="profession">Frontend Web Developer</div>
          <div className="badge-container">
            <span className="badge">Freelance Ready</span>
            <span className="badge">Responsive UI</span>
            <span className="badge">Clean Code</span>
            <span className="badge">Modern Web</span>
            <span className="badge">Self-Taught</span>
          </div>
          <a id='projectBtn' href="#projectSec">
            <i className="ri-code-s-slash-line"></i>
            <span>View Projects</span>
          </a>
        </div>
    </section>
  )
}

export default AboutSec