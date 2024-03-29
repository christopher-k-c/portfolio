import React from "react";
import { NavBar } from "./components/NavBar";
import { LandingContainer } from "./components/LandingContainer";
import {ExperienceContainer} from './components/ExperienceContainer'
import { ProjectContainer } from "./components/ProjectContainer";
import experienceData from './experienceData.json'
import projectData from './projectsData.json'
import { ContactContainer } from "./components/ContactContainer";
import { GalleryContainer } from "./components/GalleryContainer"







function App() {

  return (
    <div className="bg-gray-900 text-slate-100 snap-y snap-mandatory overflow-scroll relative z-40">


      <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-darkRoast bg-opacity-30 w-full z-50">
        <NavBar />
      </nav>
      <section id="landing"  className="snap-center ">
        <LandingContainer />
      </section>
      <section id="experience"  className="snap-center">
        <ExperienceContainer data={experienceData}></ExperienceContainer>
      </section>
      <section id="project"  className="snap-start">
        <ProjectContainer data={projectData}></ProjectContainer>
      </section>
      <section>
        <GalleryContainer></GalleryContainer>
      </section>
      <footer id="contact" className="snap-center ">
        <ContactContainer></ContactContainer>
      </footer>
    </div>
  );
}

export default App;
