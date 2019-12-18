import React from 'react';
import "./projectDetails.css"
import ProjectMenu from './projectMenu';
import $ from 'jquery';
 

const ProjectDetails = (props) => {

    function loadProject(){
        $(".tech").hide();
    }

    return (

        <div className="p" onScroll={() => loadProject()}>
            <ProjectMenu/>
            <div className="tech">{props.techs.map(n => {return n})}</div>
        </div>
    )

}

export default ProjectDetails;