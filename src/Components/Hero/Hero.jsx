import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile_img from '../../assets/homa.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" className='profile-img'/>
        <h1><span>I'm Allen Homa,</span> a web developer based in  Nigeria.</h1>
        <p>I'm a full-stack web developer based in Lagos state, Nigeria with 3 years of experience in freelance and also with working as part of a team</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero