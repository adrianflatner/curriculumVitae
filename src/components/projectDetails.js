import React, {useEffect} from 'react';
import "./projectDetails.css"
import ProjectMenu from './projectMenu';
import $ from 'jquery';
 

const ProjectDetails = (props) => {
       
 
    function loadProject(){
        $(".tech").hide();
        $(".projectTitle").css('opacity',1)
    }

   

    return (

        <div className="p">
            <ProjectMenu/>
            <div className="projectTitle">{props.name}</div>
            <div className="tech">{props.techs.map(n => {return n})}</div>
            
        </div>
        
    )

}

export default ProjectDetails;