import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import "../components/AboutMe.css";

function AboutMe() {
    return (
        <div className="about">
           <div className="about__text">
            {LoremIpsum()}
        </div>
        </div>
        
    )
}

export default AboutMe
