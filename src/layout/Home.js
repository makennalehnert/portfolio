import React from "react";
import "./Home.css"
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <div className="home">

    <div className="name">
    <h5>Hi, my name is</h5>
      <h1 id="name">Makenna Lehnert</h1>
    </div>
      <div>
        <ul>
            <li id="title">Software Developer & Engineer</li>
            <li>With a background in animation & motion design</li>
        </ul>
      </div>

      <Contact />

    </div>
  );
}
