import React from "react";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="projectsPage">
            <h1>Projects</h1>
            <div className="projects">
            <div className="eachProject">
                <div className="projectLinks">
                <h4><a href="https://reservations-client-ml.herokuapp.com">Restaurant Reservation System - </a></h4><a className="git" href="https://github.com/makennalehnert/capstone-reservations"> Github Repo</a>
                </div>
                <hr></hr>
                <ul className="projectList">
                <li>Full Stack Web App</li>
                <li>React.js on Front-End </li>
                <li>Node.js and Express on Back-End</li>
                <li>PostgreSQL for Database</li>
                </ul>
            </div>
            </div>
        </div>
    )
}