import React from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects";



function App() {






  return (
    <div className="bg-gray-900 text-slate-100 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <nav>
        <NavBar />
      </nav>
      <section id="landing" className="snap-center">
        <Landing />
      </section>

      <section id="experience" className="snap-center">
        <Experience/>
      </section>

      <section>
        <Projects/>  
      </section>
    </div>
  );
}

export default App;
