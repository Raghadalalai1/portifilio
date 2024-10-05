import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGoogle, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TypewriterEffect from 'react-typewriter-effect';
import { Cursor } from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect';
export default function Header() {
  // console.log('TypewriterEffect props:', {
  //   text: ['Software and Information Systems Engineer', 'Web Designer and Developer', 'Front-end developer'],
  //   startDelay: 200,
  //   endDelay: 4000,
  //   typeSpeed: 60,
  //   deleteSpeed: 50,
  //   loop: true
  // })

  return (
    <div className='hero' id='hero'>
      <h1 className='title'>Hello Everyone</h1>
      <h2  className='title1'>
        I am 

        <span className='change'>
          <Typewriter
            options={{
              strings: ['Raghad Yousef Alali','Software Engineer', 'Web Designer and Developer', 'Front-end developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

      </h2>

      <div style={{zIndex:'6'}}>
        <div className='list-icon'>
        <a href="https://www.facebook.com/raghad.alali.5245?mibextid=ZbWKwL" target='blank'><div><FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} /></div></a>
        <a href="https://www.instagram.com/raghad.alali.5245?igsh=MWtmN2Ixcmo3dWc2eg==" target='blank'>  <div><FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} /></div></a>
        <a href="https://www.linkedin.com/in/raghad-alali-00885a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>  <div><FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white' }} /></div></a>
        <a href="https://github.com/Raghadalalai1/" target='blank'><div><FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} /></div></a>
        <a href="mailto:raghadalali63@gamil.com" target='blank'>  <div><FontAwesomeIcon icon={faGoogle} style={{ color: 'white' }} /></div></a>
        {/* <a href="">  <div><FontAwesomeIcon icon={faTelegram}  style={{ color: 'white' }}/></div></a> */}
        </div>
      </div>
    </div>
  )
}
