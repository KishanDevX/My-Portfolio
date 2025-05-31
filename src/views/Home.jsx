import React from 'react'

import '../stylesheets/nav.css'

import Header from '../components/Header'

import FrontSec from './sections/FrontSec'
import AboutSec from './sections/AboutSec'
import ProjectSec from './sections/ProjectSec'
import ServiceSec from './sections/ServiceSec'
import ContactSec from './sections/ContactSec'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <FrontSec />
        <AboutSec />
        <ProjectSec />
        <ServiceSec />
        <ContactSec />
      </main>
    </>
  )
}

export default Home