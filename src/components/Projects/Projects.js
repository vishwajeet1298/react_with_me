import React from "react";
import "./Projects.css"
import ProjectBox from "./ProjectBox/ProjectBox"
import project_image1 from "../images/techstack_images/project_image1.png";
import project_image2 from "../images/techstack_images/project_image2.png";


function Projects(){

const projectsData=[
{
    image: project_image1,
    title:"Company 1",
    description: [
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                
            ],
    link: "https://google.com",

},
{
    image: project_image2,
    title:"Company 2",
    description: [
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                
            ],
    link: "https://google.com",

}
];
    return(
<div>
<p className="projects_title">Projects</p>
        <div className="project_box_container">
            {projectsData.map((value,key) =>(
            <ProjectBox 
            image={value.image}
            title={value.title}
            description={value.description}
            link={value.link}
            />
            ))}

        </div>
        </div>

    );
}
export default Projects;