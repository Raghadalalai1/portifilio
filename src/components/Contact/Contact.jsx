import React, { useEffect } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Contact() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='contact' id='contact'>
        <h1>Contact Me</h1>
        <div className="tree">
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <div className='round'><FontAwesomeIcon icon={faLocationArrow}  style={{color:'white'}}/></div>
            <h3>Adress</h3>
            <p>Al-Zahraa-Homs-Syria</p>
            </div>
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <div className='round'><FontAwesomeIcon icon={faEnvelope}  style={{color:'white'}}/></div>
            <h3>Email</h3>
            <p>raghadalali63@gmail.com</p>
            </div>
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <div className='round'><FontAwesomeIcon icon={faPhone}  style={{color:'white'}}/></div>
            <h3>Phone</h3>
            <p>+963 994 782 811</p>
            </div>
        </div>

<div className='con'>
<form action="">
        <div className='inputes'>
          <input type="text" placeholder='Name' />
          <input type="email"  placeholder='Email'/>
        </div>
        <textarea name="" id="" placeholder='Message'></textarea>
   
        </form>
       <div className='but'> <button>submit</button></div>
</div>

   
    </div>
  )
}
