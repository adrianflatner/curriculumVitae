import React from "react";
import "./App.css";
import Home from './components/home'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ProjectDetails from './components/projectDetails'

function App() {
  
  
  
  return (
      <div>
        <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects/1' component={() => <ProjectDetails techs={['react native ', "graphql "]}/>}/>
          <Route exact path='/projects/2' component={() => <ProjectDetails techs={['react  ', "rest api "]}/>}/>
          <Route exact path='/projects/3' component={() => <ProjectDetails techs={['react ']}/>}/>
          <Route exact path='/projects/4' component={() => <ProjectDetails techs={['django ']}/>}/>
          <Route exact path='/projects/5' component={() => <ProjectDetails techs={['html ', "css ", 'javascript ']}/>}/>
          <Route exact path='/projects/6' component={() => <ProjectDetails techs={['react ', "django rest api "]}/>}/>
        </Router>
      </div>
  );
}

export default App;
