import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "./NotFound";
import MyNav from "./MyNav";
import "./Layout.css"

function Layout() {
    return (
        <div className="wholesite">
        <div>
            <MyNav/>
        </div>
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/aboutme" element={<AboutMe/>}/>
                <Route exact path="/Projects" element={<Projects/>}/>
                <Route exact path="/Contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        </div>
    )
}

export default Layout;