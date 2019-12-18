import React from 'react';
import "./projects.css"
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer'
import $ from 'jquery';
 

const Projects = () => {

    /*
        const [ref, inView] = useInView({
          rootMargin: '-100px 0px',
        })
    
        const props = { opacity: inView ? 1 : 0 }
        $(ref).css({"opacity":props.opacity});
    */
   

    return (
        <div className="poster">
            <div className="grid">
                <div className="children"><Link to="/projects/1"><h1>VINMONOPOL SEARCH ENGINE</h1></Link><p>react native</p><p>graphql</p></div>
                <div className="children"><Link to="/projects/2"><h1>ALBUM SEARCH ENGINE</h1></Link><p>react</p><p>rest api</p></div>
                <div className="children"><Link to="/projects/3"><h1>MEDIA PLAYER</h1></Link><p>react</p></div>
                <div className="children"><Link to="/projects/4"><h1>ARTICLE PUBLISHER</h1></Link><p>django</p></div>
                <div className="children"><Link to="/projects/5"><h1>VEXI</h1></Link><p>javascript</p><p>html</p><p>css</p></div>
                <div className="children"><Link to="/projects/6"><h1>SHOPPINGLIST</h1></Link><p>react</p><p>django rest api</p></div>
            </div>
            
        </div>
    )

}

export default Projects;