
import { useState } from 'react'
import './App.css'
import Aboutme from './components/Aboutme/Aboutme'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Portifilio from './components/Portifilio/Portifilio'
import Project from './components/Project/Project'
import Skilles from './components/Skilles/Skilles'

function App() {
  // const [progress, setProgress] = useState(80);

  return (
    <>
    <Navbar />
    <Header />
  
    <Aboutme />
   
   <Skilles  />
   {/* <Skilles  percentage={progress}/> */}
   {/* <Skilles  percentage={progress} /> */}
    <Project />
    <Portifilio />
    <Contact />
    <Footer />
    </>
  )
}

export default App
