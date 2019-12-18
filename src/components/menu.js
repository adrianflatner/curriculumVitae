import React from 'react';
import "./menu.css"
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div className="menu">
            <div className="label">More</div>
            <div className="spacer"></div>
            <div className="item"><Link to="/projects/1"><span>Portfolio</span></Link></div>
            <div className="item"><span>Design</span></div>
            <div className="item"><a target="blank" href="http://www.github.com/adrianflatner"><span>Github</span></a></div>
            <div className="item"><a target="blank" href="https://www.linkedin.com/in/adrian-r%C3%B8stg%C3%A5rd-flatner-438358193/"><span>LinkedIn</span></a></div>
        </div>
    )

}

export default Menu;