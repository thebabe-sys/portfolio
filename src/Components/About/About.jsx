import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/homa.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" className='about-profile-img'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced full-stack web developer with more interest in the frontend, i have 3 years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious clients, contributing to their success and growth. </p>
                    <p>My passion for web development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Tailwind & Bootstrap</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Node js, Express & MongoDB</p><hr style={{width: "70%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About