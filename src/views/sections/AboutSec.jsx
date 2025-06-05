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
    </section>
  )
}

export default AboutSec