import React from "react";
import "./TechStack.css"
import react from "../images/techstack_images/react.png"
import html from "../images/techstack_images/html.png"
import css from "../images/techstack_images/css.png"
import c from "../images/techstack_images/c.png"
import github from "../images/techstack_images/github.png"
import javascript from "../images/techstack_images/javascript.png"
import firebase from "../images/techstack_images/firebase.png"
import TechStackIcon from "./TechStackIcon/TechStackIcon";

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
   
 /*function A(name){
    console.log("Hello "+name+", "+"Good Morning!")
}
A("Vishwajeet")
A("Mr. Serious")
*/

//Create function showIcon()  


/*function showIcon(param){
    return(
        <div className="techstack_image_element_container"> 
        <img src={param.iconImage} alt={param.iconAltProperty} />
        <p>{param.iconName}</p>
    </div>

    )
}*/


    return(
     <div className="techstack_container"> 
                 <p className="techstack_title">TechStack</p>
        <div className="techstack_image_rows_container">
            {/*  Tech Stack Row 1   */}
                <div className="techstack_image_container_row1">
                    {techstackData.map((value,key)=>(
                    /*    showIcon(value) */
                       <TechStackIcon data={value}  /> 
                    ))}                                              
                 </div>
{/*  Div two or Row two for Techstack data 2  */}
                <div className="techstack_image_container_row1">
                {techstackData2.map((value,key)=>(
                       //Method 1. Using showIcon function() and return html from it 
                      /*  showIcon(value) */


                    // Method 2. Create componet, pass props to make it work according to need.
                        <TechStackIcon data={value}  /> 
                    ))}
                 </div>  
        </div>
        
     </div>
    )
    
}
export default TechStack;