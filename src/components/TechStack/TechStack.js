import React from "react";
import "./TechStack.css"
import react from "../images/techstack_images/react.png"
import html from "../images/techstack_images/html.png"
import css from "../images/techstack_images/css.png"
import c from "../images/techstack_images/c.png"
import github from "../images/techstack_images/github.png"
import javascript from "../images/techstack_images/javascript.png"
import firebase from "../images/techstack_images/firebase.png"

function TechStack() {

    const techstackData=[
{
    iconImage:react,
    iconAltProperty:"reactImage",
    iconName:'Reactttt'
},
{
    iconImage:javascript,
    iconAltProperty:"javascriptImage",
    iconName:'JavaScript'
},
{
    iconImage:css,
    iconAltProperty:"cssImage",
    iconName:'CSS'
},

]
const techstackData2=[
    {
        iconImage:html,
        iconAltProperty:"htmlImage",
        iconName:'HTML'
    },
    {
        iconImage:c,
        iconAltProperty:"cImage",
        iconName:'C++'
    },
    {
        iconImage:firebase,
        iconAltProperty:"firebaseImage",
        iconName:'Firebase'
    },
]
   



    return(
     <div className="techstack_container"> 
                 <p className="techstack_title">TechStack</p>
        <div className="techstack_image_rows_container">
                <div className="techstack_image_container_row1">
                    {techstackData.map((value,key)=>(
                         <div className="techstack_image_element_container"> 
                         <img src={value.iconImage} alt={value.iconAltProperty} />
                         <p>{value.iconName}</p>
                     </div>

                    ))}
                       
                        
                 </div>

                <div className="techstack_image_container_row1">

                {techstackData2.map((value,key)=>(
                         <div className="techstack_image_element_container"> 
                         <img src={value.iconImage} alt={value.iconAltProperty} />
                         <p>{value.iconName}</p>
                     </div>

                    ))}
                        
                
                 </div>
                
                
        </div>
        
     </div>
    )
    
}
export default TechStack;