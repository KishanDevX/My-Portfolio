import React from 'react'

const IntroCard = () => {
  return (
    <div id="intro">
        <div id="hello">
            <span>Hello</span>
        </div>
        <div id="highLight">
            I am <span>Kishan Kumar</span>
        </div>
        <div id="job">
            <span>Web Developer</span>
        </div>
        <div id="shortIntro">
            <p>
                A passionate Frontend Web Developer who loves crafting sleek,
                user-friendly websites.
                I focus on turning ideas into engaging digital 
                experiences using clean code and modern design. 
                Let's build something amazing together!
            </p>
        </div>
        <div id="social">
            <ul>
                <li><a href=""><i className="ri-github-fill"></i></a></li>
                <li><a href=""><i className="ri-linkedin-box-fill"></i></a></li>
                <li><a href=""><i className="ri-twitter-x-line"></i></a></li>
            </ul>
        </div>
        <div id="reachBtn">
            <a href="">reach out</a>
        </div>
    </div>
  )
}

export default IntroCard