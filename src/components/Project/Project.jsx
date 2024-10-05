import React, { useCallback, useEffect, useState } from 'react'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptop, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Project() {
  const [iconColors, setIconColors] = useState({});

  const handleHover = useCallback((index) => {
    setIconColors(prev => ({
      ...prev,
      [index]: 'white'
    }));
  }, []);

  const handleUnhover = useCallback((index) => {
    setIconColors(prev => ({
      ...prev,
      [index]: ''
    }));
  }, []);
 
  const data = [
    {
      id: 1,
      iconN: <FontAwesomeIcon icon={faLaptop} />,
      title: 'Custom Website Development',
      description: 'Create unique, responsive websites tailored to clients specific needs.'

    },
    {
      id: 2,
      iconN: <FontAwesomeIcon icon={faLaptop} />,
      title: 'Custom Website Development',
      description: 'Develop modern, mobile-friendly designs ,Implement CSS animations and transitions'

    },
    {
      id: 3,
      iconN: <FontAwesomeIcon icon={faUmbrella} />,
      title: ' Single Page Applications (SPAs)',
      description: 'Develop dynamic, interactive web applications without page reloads.'

    },
    {
      id: 4,
      iconN: <FontAwesomeIcon icon={faUmbrella} />,
      title: ' Single Page Applications (SPAs)',
      description: 'Implement client-side routing and navigation ,Optimize for performance and user experience'

    },
    {
      id: 5,
      iconN: <FontAwesomeIcon icon={faDesktop} />,
      title: ' Responsive Design Solutions',
      description: 'Create websites that adapt seamlessly to various devices and screen sizes.'

    },
    {
      id: 5,
      iconN: <FontAwesomeIcon icon={faDesktop} />,
      title: ' Responsive Design Solutions',
      description: 'Develop mobile-first responsive designs ,Implement flexbox and CSS grid layouts,Optimize images and assets for faster loading on mobile devices'

    },

  ]
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='projects' id='projects'>
      <h1>Servies</h1>
      <div className='containar'>
        {data.map((item, index) => {
          return (<div  data-aos="zoom-in-right"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className='package' key={index} onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleUnhover(index)} >

            <div className='circle'>       
               <FontAwesomeIcon
              icon={item.iconN.props.icon}
              style={{ color: iconColors[index] ,fontSize:'25px',transition:'0.5s' }}
            />
            </div>
            <h3 className='title-card'>{item.title}</h3>
            <p className='des-card'>{item.description}</p>




          </div>)



        })}
      </div>

    </div>
  )
}
