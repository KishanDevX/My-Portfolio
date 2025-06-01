import React from 'react'

const PicCard = () => {
  return (
    <div id='pic'>
      <lottie-player
          id="codeAnim"
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