import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Williams,</span> back-end developer.</h1>
      <p>Mi nombre es Williams y soy desarrollador Back-end de Madrid, España con conocimientos en Front-end.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contacta conmigo</AnchorLink></div>
        <Link to="/resume" target='_blank' className='hero-link'>
          <div className="hero-resume">Curriculum</div>
        </Link>
      </div>
    </div>
  )
}
