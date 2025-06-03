import React from 'react'

const PicCard = () => {
  return (
    <div id='pic'>
      <lottie-player
          id="codeAnim"
          className="animate__animated animate__fadeInUp"
          src="public/animations/codingAnimation.json"
          background="transparent"
          speed="1"
          loop
          autoplay>
      </lottie-player>
    </div>
  )
}

export default PicCard