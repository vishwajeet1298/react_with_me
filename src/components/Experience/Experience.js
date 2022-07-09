import React from "react";
import "./Experience.css"
import ExperienceBox from "./ExperienceBox/ExperienceBox"
import react from "../images/techstack_images/react.png"
import html from "../images/techstack_images/html.png"
import firebase from "../images/techstack_images/firebase.png"





function Experience(){
    const experienceData=[
        {
            title:"Company 1",
            sentences: [
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                
            ],
            subtitle: "Tech Used",
            images: [react, html, firebase],
        
        },
        {
            title:"Company 2",
            sentences: [
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                
            ],
            subtitle: "Tech Used",
            images: [react, html, firebase],
        
        },
        {
            title:"Company 3",
            sentences: [
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                
            ],
            subtitle: "Tech Used",
            images: [react, html, firebase],
        
        }
    ]
    
        return(
    <div className="ex-container">
        <p className="ex_title">Experience</p>
        <div className="ex_experiencebox_container">
            {experienceData.map((value,key)=>
            <ExperienceBox 
            title={value.title}
            sentences={value.sentences}
            subtitle={value.subtitle}
            images={value.images}
            />
    
           )}
           
        </div>
    </div>
        );
    }
    export default Experience;