import React from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import {ExperienceContainer} from './components/ExperienceContainer'


function App() {
  
  const experience = [
        
    {   
        'title': 'landing'
    },    
    {
        'image': 'ga',
        'title': 'Software Engineering Immersive Student', 
        'company': 'General Assembly ', 
        'dates': 'May 2022 - July 2022',
        'skills': [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"

        ],
        'summary': [

            "Received 13 weeks of training in full-stack web development",
            "Honed Fundamental skills in Javascript, CSS and HTML",
            "Built Full and MERN Stack applications",
            "Worked on group and individual projects using an agile methodology",
            "Took part in daily coding warm-ups, lectures and live coding sessions",
            "Developed good understanding of data structures and programming fundamentals",
            "Developed a good understanding of MVC Architectural pattern",
            "Implemented Full CRUD Operations in my Express and Django Applications",
            "Built and used third party RESTful APIs",
            "Used JWT Token to apply authentication and authorization to my RESTful APIs",
            "Deployed our web applications using Heroku",
            "Explored CSS Frameworks such as Tailwind and Bootstrap"
            
                
        ],
       
    },
    {
        'image': 'jojo',
        'title': 'Retouch Manger', 
        'company': 'Jojo Maman Bebe', 
        'dates': 'May 2015 - May 2022',
        'skills': [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
            require('./components/assets/captureone.png'),
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",

        ],
        'summary': [
            "Managed a team of 2 retouchers and 1 photographer",
            "Coordinated and booked freelance resources and external agencies",
            "Managed the production process from beginning to end",
            "Delegated to the team, ensured KPIs and deadlines were met",
            "Interviewed, trained and compiled personal development reviews",
            "Processing, editing, compositing and grading images using Adobe Photoshop and Capture One",
            "Automated Adobe Photoshop processes",
            "Working with Buying and Design on image amendments and colour correction",
            "Built guidelines for internal and external use"
            
                
        ],
       
    }
]





  return (
    <div className="bg-gray-900 text-slate-100 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <nav>
        <NavBar />
      </nav>
      <section id="landing" className="snap-center">
        <Landing />
      </section>

      <section id="experience" className="snap-center">
        <ExperienceContainer experience={experience}></ExperienceContainer>
      </section>

    </div>
  );
}

export default App;
