import React from "react";
import $ from "jquery";
import "./home.css";
import Menu from "./menu";
import Footer from "./footer";
import Projects from "./projects";
import Profile from "./profile";

function App() {
  $(document).ready(function() {
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });


  return (
    <div>
      <div className="parallax">
        <div className="title">adrian røstgård flatner</div>
        <div className="nav">
          <a href="#section2">V</a>
        </div>
        <Menu />
      </div>
      <div id="section2" className="content">
        <div id="des">
          <h1>Frontend developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <Profile id="section3"/>
      <div className="splitter"></div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
