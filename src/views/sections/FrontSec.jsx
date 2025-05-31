import React from 'react'

import '../../stylesheets/front.css'

import IntroCard from '../../components/compFront/IntroCard'
import PicCard from '../../components/compFront/PicCard'

export const FrontSec = () => {
  return (
    <section id='frontSec'>
        <IntroCard />
        <PicCard />
    </section>
  )
}

export default FrontSec
