import React from "react";
import "./ProjectBox.css"

function ProjectBox(props){
    return(
<div className="projects_box_container">
         {/*Project image */}
        <div className="project_box_image_container">
            <img src={props.image} />
        </div>
    <div className="project_box_details">  
    {/*Project Title*/}
    <p className="project_box_title">{props.title}</p>
    {/*Project Description*/}
    <div className="project_box_description">
        {props.description.map((value,key)=>
        <p>{value}</p>
        )}
    </div>
    {/*Project Hosting Link*/}
    <p className="project_box_link">
    {/* <span>Link</span> 
            - <a href={link} target="_blank">{link}</a> */}
        <span>Link - {props.link}</span></p>
</div>
</div>


    )
}

export default ProjectBox;