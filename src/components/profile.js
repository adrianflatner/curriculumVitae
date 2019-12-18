import React from "react";
import "./profile.css";
import cvphoto from "./img/cvphoto.jpg";

const Profile = () => {
  return (
    <div className="contact">
      <div id="contactphoto">
        <img id="photo" src={cvphoto} />
      </div>
      <div id="contactcontent">
        <h1>Adrian Røstgård Flatner</h1>
        <h2>Informatikk</h2>
      </div>
      <div id="contactcontent2">
        <p>+47 454 86 611</p>
        <p>adrianrflatner@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
