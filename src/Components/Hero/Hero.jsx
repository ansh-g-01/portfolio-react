import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ansh.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""  style={{ width: '300px', height: '330px'    }}/>
      <h1><span>I'm Ansh Gandhi,</span> Anchor and Tech Enthusiast</h1>
      <p>I am studying in 2nd year VIT Vellore. I have hosted Riviera Proshows,South Asia's One of the largest cultural fest</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
