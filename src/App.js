import React from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import {ExperienceContainer} from './components/ExperienceContainer'
import { ProjectContainer } from "./components/ProjectContainer";
import experienceData from './experienceData.json'
import projectData from './projectsData.json'





function App() {

  return (
    <div className="bg-gray-900 text-slate-100 h-screen snap-y snap-mandatory overflow-scroll relative z-50">
      <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-darkRoast bg-opacity-30 w-full z-30">
        <NavBar />
      </nav>
      <section id="landing" className="snap-center">
        <Landing />
      </section>
      <section id="experience" className="snap-center">
        <ExperienceContainer data={experienceData}></ExperienceContainer>
      </section>
      <section id="projects" className="snap-start">
        <ProjectContainer data={projectData}></ProjectContainer>
      </section>
    </div>
  );
}

export default App;
