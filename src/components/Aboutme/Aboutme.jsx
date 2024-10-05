import React, { useEffect, useState } from 'react'
import './Aboutme.css'
import img1 from "./../../../public/imges/photo_2024-10-02_14-11-25.jpg";
import FileSaver from 'file-saver';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Aboutme() {
    const totalHeight = window.innerHeight * 2;
    const [softwareEngineerProgress, setSoftwareEngineerProgress] = useState(0);
    const [frontendDeveloperProgress, setFrontendDeveloperProgress] = useState(0);
    const [webDesignerProgress, setWebDesignerProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = Math.min(scrollTop / totalHeight, 1);

            // Software Engineer progress
            if (scrollPercentage <= 0.9) {
                setSoftwareEngineerProgress(Math.min(scrollPercentage * 180, 90));
            }

            // Front-end Developer progress
            if (scrollPercentage <= 0.8) {
                setFrontendDeveloperProgress(Math.min(scrollPercentage * 160, 80));
            }

            // Web Designer progress
            if (scrollPercentage <= 0.8) {
                setWebDesignerProgress(Math.min(scrollPercentage * 169, 85));
            }
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial call

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, [totalHeight]);

    const handleDownloadCV = () => {
        fetch('/RaghadAlali resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                FileSaver.saveAs(blob, 'RaghadAlAli_CV.pdf');
            })
            .catch(error => console.error('Error downloading CV:', error));
    };
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='about-me' id='about-me'>


            <div className='about-left' data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <img src={img1} alt="" className='about-img' />
            </div>

            <div className='about-right' data-aos="fade-left"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <h2>About Me</h2>
                <p className='info'>Front-end developer & web designer</p>
                <p className='es-info'>I am <span className='name'>Raghad Al ali</span> a software and information systems engineer with a degree from Al-Baath University (Class of 2023), I bring a strong foundation in technology and innovative problem-solving. My expertise was further honed through two valuable training experiences:
                At FocalX Company, I spent five months mastering React framework techniques to design and develop responsive front-end interfaces that seamlessly adapt across various screen sizes.
                Following these technical pursuits, I expanded my skillset by serving as a technical support specialist at Arfada Petroleum Company for three months, gaining practical experience in real-world IT challenges.
                With this blend of academic knowledge, hands-on training, and professional experience, I'm well-equipped to tackle software engineering projects while delivering user-friendly, cutting-edge solutions."
                </p>
                <div className="progress-bar">
                    <div className="progress-container" style={{ width: `${softwareEngineerProgress}%` }}>
                        <p>Software Engineer</p>
                        <p>{`${Math.round(softwareEngineerProgress)}%`}</p>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress-container" style={{ width: `${frontendDeveloperProgress}%` }}>
                        <p>Front-end developer</p>
                        <p>{`${Math.round(frontendDeveloperProgress)}%`}</p>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress-container" style={{ width: `${webDesignerProgress}%` }}>
                        <p>web designer</p>
                        <p>{`${Math.round(webDesignerProgress)}%`}</p>
                    </div>
                </div>

                <div className='buttons'>
                    <button className='Download-CV ' onClick={handleDownloadCV}>Download CV </button>
                    <a href="#contact"> <button>Contact Me </button></a>
                </div>

            </div>

        </div>
    )
}
