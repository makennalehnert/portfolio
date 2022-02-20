import React from "react";
import "./MyNav.css";

export default function MyNav() {
  return (
    <div id="wholeNav">
      <div className="navcontainer">
        <div className="nav">
          <a className="balllink" href="/">
          <div className="navballs">
            <a href="/" className="links">
              Home
            </a>
          </div>
          </a>
          <a className="balllink" href="/aboutme">
          <div className="navballs">
            <a href="/aboutme" className="links">
              About Me
            </a>
          </div>
          </a>
          <a className="balllink" href="/projects">
          <div className="navballs">
            <a href="/projects" className="links">
              Projects
            </a>
          </div>
          </a>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
