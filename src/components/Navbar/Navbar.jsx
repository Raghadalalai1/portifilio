import React, { useState } from 'react'
import './Navbar.css'
export default function Navbar() {
    const [menu,setMenu]=useState("Home");
    const[active,setActive]=useState("list")
    
    const[toggleIcon,setToggleIcon]=useState("nav-toggle")

    const navToggle= ()=>{
        active==="list"?setActive("list nav-active"):setActive("list")
        toggleIcon==="nav-toggle"?setToggleIcon("nav-toggle toggle"):setToggleIcon("nav-toggle")
    }


    return (
        <div className='navbar'>

      
   
            <div>
                <h3 className='logo'>Raghad Yousef Alali</h3>
     
            </div>
            <ul  className={active}>
                <li onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}><a href="#hero">Home</a></li>
                <li onClick={()=>setMenu('About Me')} className={menu==='About Me'?'active':''}><a href="#about-me">About Me</a> </li>
                <li onClick={()=>setMenu('Skilles')} className={menu==='Skilles'?'active':''}> <a href="#skilles">Skilles</a></li>

                <li onClick={()=>setMenu('Servies')} className={menu==='Servies'?'active':''}> <a href="#projects">Servies</a></li>
               
                <li onClick={()=>setMenu('Projects')} className={menu==='Projects'?'active':''}> <a href="#portifolio">Portifilio</a></li>
                <li onClick={()=>setMenu('Contact Me')} className={menu==='Contact Me'?'active':''}><a href="#contact">Contact Me</a></li>
            </ul>
            <div className={toggleIcon} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>
        </div>
    )
}
