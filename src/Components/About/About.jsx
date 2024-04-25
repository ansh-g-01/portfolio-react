import React from 'react'
import './About.css'
import profile_img from '../../assets/ansh.jpg'

//import theme_pattern from '../../assets/theme_pattern.jpg'

const About = () => {
  return (
    <div  id='about' className='about'>
        <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img}   style={{height:"300px" ,width:"280px" }}alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I have dedicated 2 years to learn Development and have succes</p>
                    <p> Yeah , you heard it right , we can discuss all the things later</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Development</p>< hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Anchoring</p>< hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>Machine Learning</p>< hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p>< hr style={{width:"60%"}}/></div>

                </div>
            </div>
           
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
             <h1>3+</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
             <h1>98%</h1>
            <p>Boards</p>
        </div>
      </div>
    </div>
   
  )
}

export default About
