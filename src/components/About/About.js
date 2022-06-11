import React from "react";
import "./About.css";
import  githubImage from "../../components/images/github.png";
import  linkedinImage from "../../components/images/linkedin.png";
function About(){
    return(
        <div className="about_container">    
        <p className="about_text1"><span className="highlighted_text">Hi</span>
        &nbsp;My name is </p>  
        <p className="about_text2">Vishwajeet Singh</p>
        <p className="about_text3">I am an Aspiring 
        <span className="highlighted_text">&nbsp;CS Engineer</span></p>
        <p className="about_description"> Lorem Ipsum dummy text for the practice of the Portfolio Development. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.</p>
        <div>
            <a href="https://www.linkedin.com/in/vishwajeet1298" target="blank">
            <img src={linkedinImage} alt="linkedinImage" />
            </a>
            <a href="https://github.com/vishwajeet1298" target="_blank">
            <img src={githubImage} alt="githubImage" />
            </a>
            
        
        </div>
        <a href="mailto: vishwajeet1298@gmail.com">
    <button className="about_button">Get In Touch</button>
    </a>

  

        </div>
    )
}
export default About;
