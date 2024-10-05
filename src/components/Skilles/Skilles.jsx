import React, { useEffect, useState } from 'react'
import './Skilles.css'
import { Circle, Line } from 'rc-progress';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Skilles() {
  const totalHeight = window.innerHeight * 2;
  const [softwareEngineerProgress, setSoftwareEngineerProgress] = useState(0);
  const [frontendDeveloperProgress, setFrontendDeveloperProgress] = useState(0);
  const [webDesignerProgress, setWebDesignerProgress] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [c, setC] = useState(0);
  const [java, setJava] = useState(0);
  const [python, setPython] = useState(0);


  const calculateProgress = (scrollPercentage, maxProgress) => {
    return Math.min(scrollPercentage * maxProgress, maxProgress);
  };

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = Math.min(scrollTop / totalHeight, 1);

      setSoftwareEngineerProgress(calculateProgress(scrollPercentage, 95));
      setFrontendDeveloperProgress(calculateProgress(scrollPercentage, 90));
      setWebDesignerProgress(calculateProgress(scrollPercentage, 85));
      setJavascript(calculateProgress(scrollPercentage, 80));
      setC(calculateProgress(scrollPercentage, 50))
      setJava(calculateProgress(scrollPercentage, 65))
      setPython(calculateProgress(scrollPercentage, 60))

    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, [totalHeight]);
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='skilles' id='skilles'
    >
      <h1>Skilles</h1>
      <div className='contain'>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={softwareEngineerProgress} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            HTML({softwareEngineerProgress}%)
          </span>
        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">

          <Circle percent={frontendDeveloperProgress} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            CSS ({frontendDeveloperProgress}%)
          </span>
        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">

          <Circle percent={frontendDeveloperProgress} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            BOOTSTRAP ({webDesignerProgress}%)
          </span>
        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={javascript} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            JAVASCRIPT({javascript}%)
          </span>

        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={javascript} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            REACT JS({javascript}%)
          </span>

        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={c} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            C++({c}%)
          </span>

        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={java} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4} />
          <span className='progress-bar-text'>
            JAVA({java}%)
          </span>

        </div>
        <div className='progress-bar-circle' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <Circle percent={python} strokeWidth={4} strokeColor="rgb(30, 62, 98)" trailWidth={4}
            style={{ position: 'relative' }} />
          <span
            className='progress-bar-text'
          >
            PAYTHON({python}%)
          </span>

        </div>
      </div>

    </div>
  )
}