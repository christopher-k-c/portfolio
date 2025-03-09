import React from "react";
import { NavBar } from "./components/NavBar";
import { LandingContainer } from "./components/LandingContainer";
import { ExperienceContainer } from './components/ExperienceContainer'
import { ProjectContainer } from "./components/ProjectContainer";
import experienceData from './experienceData.json'
import projectData from './projectsData.json'
import { ContactContainer } from "./components/ContactContainer";

function App() {
  return (
    <div className="bg-gray-900 text-slate-100 h-screen overflow-y-scroll overflow-x-hidden relative z-40" >
      <div id="page" className="absolute top-0 w-full h-0" />
{/* 
      <div className="absolute top-0 w-full z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.05}></path></svg> 
      </div>
      <div className="absolute top-10 w-full z-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4843D9" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.08}></path></svg> 
      </div>
      <div className="absolute top-20 w-full z-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4843D9" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.08}></path></svg> 
      </div> */}
          <div className="absolute top-0 w-full z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
              fill="#161B32" opacity="1"></path></svg>
           </div>
           <div className="absolute top-20 w-full z-0 ">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 400 1440 320"><path fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
           fill="#161B32" opacity="1"></path></svg>
           </div>
{/* 
           <div className="absolute top-0 w-full z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
              fill="#4843D9" opacity="0.5"></path></svg>
           </div>
           <div className="absolute top-20 w-full z-0 ">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
           fill="#4843D9" opacity="0.5"></path></svg>
           </div> */}
           
      <nav className="sticky top-0 backdrop-filter backdrop-blur-xl bg-darkRoast bg-opacity-30 w-full z-50" id="landing">
        <NavBar />
      </nav>

      <section className="relative">
        <LandingContainer />
        <div className="absolute top-25 w-full z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,245.3C672,267,768,245,864,208C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z," opacity="0.05"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,160C672,171,768,245,864,234.7C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity="0.05"></path></svg>
        </div>
      </section>
     
      <section id="experience" className="relative">
        <ExperienceContainer data={experienceData} />

        <div className="absolute bottom-25 w-full z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" d="M0,128L40,149.3C80,171,160,213,240,245.3C320,277,400,299,480,277.3C560,256,640,192,720,144C800,96,880,64,960,74.7C1040,85,1120,139,1200,160C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" opacity="0.05"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.05}></path></svg>  
        </div>
        
      </section>
      
      <section id="project" className="relative">
        <ProjectContainer data={projectData} />
      </section>

      <footer id="contact" className="relative">
      <div className="absolute top-0 w-full z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,128L40,133.3C80,139,160,149,240,170.7C320,192,400,224,480,224C560,224,640,192,720,160C800,128,880,96,960,101.3C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" opacity={0.05}></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.05}></path></svg>  
      </div>
        <ContactContainer />

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,245.3C672,267,768,245,864,208C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z," opacity="0.05"></path></svg> */}
      </footer>
    </div>
  );
}

export default App;
