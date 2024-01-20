import React from "react";
import "../styles/Contents.css";
import avatar from "/src/assets/avatar.jpg";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";



function Contents({click}) {
  
  return (
    <>
      <div className="body-container">
        <div className="transparent">
            {click === "default" && <img src={avatar} alt="" id="avatar"/>}
            {click === "about" && <About/>}
            {click === "skills" && <Skills/>}
            {click === "projects" && <Projects/>}
            {click === "resume" && <Resume/>}
        </div>
      </div>
      
      
    </>
  );
}

export default Contents;
