import React from "react";
import "../styles/Contents.css";
import avatar from "/src/assets/avatar.jpg";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function Contents({ click }) {
  function defContent() {
    return (
      <>
        <div className="intro-default">
          <h1>Hello! I am Rhezel</h1>
          <p>
            A passionate frontend developer with a love for crafting seamless
            and visually appealing websites. My journey revolves around turning
            ideas into engaging online experiences through HTML, CSS, and
            JavaScript. Dive into my portfolio to explore my coding adventures
            and discover how I bring digital visions to life. Let's connect and
            explore the possibilities of creating something amazing together!
          </p>
        </div>
        <div className="avatar-container">
          <img src={avatar} id="avatar" />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="body-container">
        <div className="transparent">
          {click === "default" && defContent()}
          {click === "about" && <About />}
          {click === "skills" && <Skills />}
          {click === "projects" && <Projects />}
          {click === "resume" && <Resume />}
        </div>
      </div>
    </>
  );
}

export default Contents;
