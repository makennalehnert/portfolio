import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <p>Get in Touch!</p>
      <div className="balls">
        <div className="icon">
          <a href="mailto:makennaiklehnert@gmail.com">Email</a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/makenna-lehnert/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="icon">
          <a href="https://www.github.com/makennalehnert" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}
