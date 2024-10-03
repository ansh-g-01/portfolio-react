//import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ansh.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""  style={{ width: '300px', height: '330px'    }}/>
      <h1><span>I'm Ansh Gandhi,</span> Tech Enthusiast and Anchor</h1>
      <p>I am studying in 3rd year VIT Vellore. I have hosted Riviera Proshows,South Asia's One of the largest cultural fest</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} target='blank'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
