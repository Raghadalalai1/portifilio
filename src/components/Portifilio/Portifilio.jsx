import React, { useEffect, useState } from 'react'
import './Portifilio.css'
import img2 from "./../../../public/imges/task1.png";
import img3 from "./../../../public/imges/task2.png";
import img5 from "./../../../public/imges/task4.png";
import img7 from "./../../../public/imges/task6.png";
import img8 from "./../../../public/imges/task7.png";
import img9 from "./../../../public/imges/task8.png";
import img10 from "./../../../public/imges/task9.png";
import img11 from "./../../../public/imges/task10.png";
import img12 from "./../../../public/imges/task11.png";
import img13 from "./../../../public/imges/task12.png";
import img14 from "./../../../public/imges/task13.png";
import img15 from "./../../../public/imges/task14.png";
import img16 from "./../../../public/imges/task15.png";
import img17 from "./../../../public/imges/task16.png";
import img18 from "./../../../public/imges/task17.png";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Portifilio() {

  

  
  const dataPortifilio = [

    {
      id: 1,
      image: img2,
      title: 'React js',
      line: 'https://raghadalalai1.github.io/nodes-workflow/',
      line1: 'https://github.com/Raghadalalai1/nodes-workflow'



    },
    {
      id: 2,
      image: img3,
      title: 'React js',
      line: 'https://raghadalalai1.github.io/Eduvi-project/',
      line1: 'https://github.com/Raghadalalai1/Eduvi-project'


    },

    {
      id: 4,
      image: img5,
      title: 'React js',
      line: 'https://raghadalalai1.github.io/task8/',
      line1: 'https://github.com/Raghadalalai1/task8'



    },
    {
      id: 5,
      image: img7,
      title: 'HTML & CSS & JS Pure',
      line: 'https://raghadalalai1.github.io/CRUD/',
      line1: 'https://github.com/Raghadalalai1/CRUD'



    },
    {
      id: 6,
      image: img8,
      title: 'Bootstrap',
      line: 'https://raghadalalai1.github.io/Techie-/',
      line1: 'https://github.com/Raghadalalai1/Techie-'



    },
    {
      id: 7,
      image: img9,
      title: 'HTML&CSS',
      line: 'https://raghadalalai1.github.io/burgers/',
      line1: 'https://github.com/Raghadalalai1/burgers'



    },
    {
      id: 8,
      image: img10,
      title: 'React js',
      line: 'https://raghadalalai1.github.io/Tomato-Res/',
      line1: 'https://github.com/Raghadalalai1/Tomato-Res'



    },
    {
      id: 9,
      image: img11,
      title: 'HTML & CSS & JS Pure',
      line: 'https://raghadalalai1.github.io/js-app/',
      line1: 'https://github.com/Raghadalalai1/js-app'



    },
    {
      id: 10,
      image: img12,
      title: 'HTML&CSS',
      line: ' https://raghadalalai1.github.io/task-5/',
      line1: 'https://github.com/Raghadalalai1/task-5'



    },
    {
      id: 11,
      image: img13,
      title: 'HTML&CSS',
      line: 'https://raghadalalai1.github.io/task2-1/',
      line1: 'https://github.com/Raghadalalai1/task2-1'



    },
    {
      id: 12,
      image: img14,
      title: 'HTML&CSS',
      line: ' https://raghadalalai1.github.io/task3/',
      line1: 'https://github.com/Raghadalalai1/task3'



    },
    {
      id: 13,
      image: img15,
      title: 'HTML&CSS',
      line: 'https://raghadalalai1.github.io/task2-2/',
      line1: 'https://github.com/Raghadalalai1/task2-2'



    },
    {
      id: 14,
      image: img16,
      title: 'HTML & CSS & JS Pure',
      line: 'https://raghadalalai1.github.io/slider/',
      line1: 'https://github.com/Raghadalalai1/slider'



    },
    {
      id: 15,
      image: img17,
      title: 'React js',
      line: 'https://raghadalalai1.github.io/Task-9/',
      line1: 'https://github.com/Raghadalalai1/Task-9'



    },
    {
      id: 16,
      image: img18,
      title: 'HTML & CSS & JS Pure',
      line: 'https://raghadalalai1.github.io/Task-9/',
      line1: 'https://github.com/Raghadalalai1/Task-9'



    },



  ]
  const [menu, setMenu] = useState("All");
  useEffect(() => {
    Aos.init()
  }, [])
 

  return (

    <div className='portifolio' id='portifolio'>
      <h1>Portifilio</h1>
      <ul>
        <li onClick={() => setMenu('All')} className={menu === 'All' ? 'active1' : ''}>All</li>
        <li onClick={() => setMenu('HTML&CSS')} className={menu === 'HTML&CSS' ? 'active1' : ''}>HTML&CSS</li>
        <li onClick={() => setMenu('Bootstrap')} className={menu === 'Bootstrap' ? 'active1' : ''}>Bootstrap</li>
        <li onClick={() => setMenu('HTML & CSS & JS Pure')} className={menu === 'HTML & CSS & JS Pure' ? 'active1' : ''}>HTML & CSS & JS Pure</li>
        <li onClick={() => setMenu('REACT js')} className={menu === 'REACT js' ? 'active1' : ''}>REACT js</li>
      </ul>
      <div className='cards'>

        {
          dataPortifilio.map((item, index) => {
            const shouldDisplay = menu === 'All' || item.title.toLowerCase().includes(menu.toLowerCase());
            return shouldDisplay && (


              <div    key={index}  className='card' data-aos="zoom-in"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000">

                <img src={item.image} alt="" className='card-img'/>

                <div className="hide">
                  <h3 className='titel-pro'>{item.title}</h3>
                  <div className='icons'>
                    <a href={item.line} style={{ color: 'rgb(30, 62, 98)' }} target='blank'><FontAwesomeIcon icon={faLink} style={{ fontSize: '20px' }} /></a>
                    <a href={item.line1} style={{ color: 'rgb(30, 62, 98)' }} target='blank'><FontAwesomeIcon icon={faGitAlt} style={{ fontSize: '27px' }} /></a>
                  </div>
                </div>
              </div>



            )
          })
        }

      </div>

    </div>
  )
}
