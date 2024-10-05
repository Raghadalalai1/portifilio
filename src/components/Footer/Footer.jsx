import React from 'react'
import './Footer.css'
// import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
export default function Footer() {
  return (
    <div className='footer'>
      <p>copyRight 2024 <FontAwesomeIcon icon={faCopyright} /> by Raghad alali all rights reserved</p>
    </div>
  )
}
