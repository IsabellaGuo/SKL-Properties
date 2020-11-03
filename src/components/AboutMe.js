import React from 'react';
import about from "../assets/about.jpg"
import "../components/AboutMe.css";

function AboutMe() {
    return (
        <div className="about">
           <div className="about__words">
            <h1 className="about__title">About Me</h1>
            <div className="about__text">
            
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient senectus commodo litora dolor taciti augue. Molestie molestie neque viverra lacinia praesent risus quis auctor. Malesuada cursus lobortis nascetur; rutrum senectus dis tempus. Cras eu class ipsum proin platea felis torquent quam. Interdum neque aenean lacinia pulvinar ligula.
                    
            </div>
           </div> 
           
            
           
           <img
           className="about__img"
           src={about}
           alt="aboutMePic"
           />
        </div>
        
    )
}

export default AboutMe
