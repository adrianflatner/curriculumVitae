import React from 'react';
import "./projectMenu.css"
import { Link } from "react-router-dom";

const ProjectMenu = () => {

    return (
        <div>
            <div class="projectMenu">
                <div class="pLabel">Projects</div>
                <div class="pSpacer"></div>
                <div class="pItem"><Link to="/projects/1"><span>1</span><p>vinmonopol</p></Link></div>
                <div class="pItem"><Link to="/projects/2"><span>2</span><p>album search</p></Link></div>
                <div class="pItem"><Link to="/projects/3"><span>3</span><p>media player</p></Link></div>
                <div class="pItem"><Link to="/projects/4"><span>4</span><p>article publisher</p></Link></div>
                <div class="pItem"><Link to="/projects/5"><span>5</span><p>vexi</p></Link></div>
                <div class="pItem"><Link to="/projects/6"><span>6</span><p>shoppinglist</p></Link></div>
            </div>
            <div className="homeButton"><Link to="/">Home</Link></div>
        </div>
    )

}

export default ProjectMenu;