import React from "react";
import { motion } from "motion/react"
import "./About.css";
import SkillBlocks from "../other/SkillBlocks";
import EmptySkillBlocks from "../other/EmptySkillBlocks";


export default function AboutMe() {
  return (
    <div className="about">
      <div className="general">
        <h1>About Me</h1>
        <p>
          Hi, I'm Makenna! I'm a front-end developer with around four years of experience
          building and maintaining client facing web and mobile applications. I specialize
          in creating responsive, user-focused interfaces using JavaScript, HTML, and 
          CSS. 
        </p>
        <p>
          In my previous role, I worked within a proprietary platform to
          implement and debug application features, workflows, and UI components for client 
          applications. I also served as the mobile app subject matter expert and led the 
          development of a client mobile application. 
        </p>
        <p>
          Before transitioning into software development, 
          I worked in motion design, which continues to influence how I approach interface design
          — focusing on clarity, usability, and visually engaging interactions.
          I enjoy building intuitive digital experiences and am always looking to improve my 
          skills, explore new technologies, and create products that people enjoy using.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skillLevels">
          <ul className="code">
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Javascript</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
               <EmptySkillBlocks />
               <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>React</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>HTML</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>CSS</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
             <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Git</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
             <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Bootstrap</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
               <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Node.js</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>npm (Node Package Manager)</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Knex</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Express</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks/>
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>PostgreSQL</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
               <EmptySkillBlocks />
               <EmptySkillBlocks />
              </div>
            </motion.div>
          </ul>
          <hr></hr>
          <ul className="ani">
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Premiere</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>After Effects</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Illustrator</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
               <EmptySkillBlocks />
                <EmptySkillBlocks />
                <EmptySkillBlocks />
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Procreate</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks/>
                <EmptySkillBlocks/>
              </div>
            </motion.div>
            <motion.div className="skillnlevel"
            whileHover={{ backgroundColor: "#262630"}}
            >
              <li>Maya</li>
              <div id="blocks">
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <SkillBlocks />
                <EmptySkillBlocks />
               <EmptySkillBlocks />
               <EmptySkillBlocks />
               <EmptySkillBlocks />
               <EmptySkillBlocks/>
               <EmptySkillBlocks/>
              </div>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
}
