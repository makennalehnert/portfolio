import React from "react";
import "./About.css";
export default function AboutMe() {
  return (
    <div className="about">
      <div className="general">
        <h1>About Me</h1>
        <p>
          Hi, I'm Makenna! I used to study animation, but I have always had an
          interest in coding and software development. In 2020 I decided to get
          online and finally try to teach myself some Javascript. I loved it!
          After a couple months of teaching myself, I decided to look more into
          how I could actually become a Software Developer. </p> 
          <p>I didn't know if it was a possibility for me at the time, but I ended up finding and
          enrolling in a six month full-time software engineering bootcamp.
          During those six months I built out both the frontend and backend of several applications, while also
          getting experience with working in teams, deployment and project
          managment.
        </p>

      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skillLevels">
          <ul className="code">
            <li>Javascript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Knex</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
          <hr></hr>
          <ul className="ani">
            <li>Adobe Premiere</li>
            <li>Adobe After Effects</li>
            <li>Adobe Illustrator</li>
            <li>Procreate</li>
            <li>Maya</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
