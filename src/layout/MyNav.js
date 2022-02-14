import React from "react";
import "./MyNav.css";

export default function MyNav() {
  return (
    <div id="wholeNav">
    <div className="navcontainer">
    <div className="nav">
    <div className="navballs">
      <a href="/" className="links">Home</a>
      </div>
      <div className="navballs">
      <a href="/aboutme" className="links">About Me</a>
      </div>
      <div className="navballs">
      <a href="/projects" className="links">Projects</a>
      </div>
    </div>
    </div>
    <hr></hr>
    </div>

  );

}


