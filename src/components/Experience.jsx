import React from 'react'
import {motion} from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

// import GA from './assets/ga.png'
import Capture from './assets/captureone.png'
import gif from './assets/terminal.gif'

import test from './assets/test.png'
import GA from './assets/ga.png'

export const Experience = () => {

    const experience = [
        
        {   
            'image': 'captureone',
            'title': 'landing', 
            'company': 'Jojo Maman Bebe', 
            'dates': 'Past and Present',
            'skills': [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
                {Capture},
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
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
                require('./assets/captureone.png'),
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
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


    const experOne = [
        
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        {Capture},
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
        
    ]

    const one = experOne.map((item, index) => (
        <img className='w-10 h-10 z-20' src={item} key={index}/>
    ))




    const listExperience = experience.map((project, index) => (



        <>
        {project.title === 'landing' ? 

        <>
        
            <motion.article key={index} className='relative rounded-lg flex-shrink-0 w-full bg-slate-800 bg-opacity-20 backdrop-blur-xl snap-center p-10 overflow-y-scroll no-scrollbar flex  '>
                <div className='absolute'>
                    <h3 className=' xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold  text-slate-100 bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'> Previously the Retouch Manager for Jojomamanbebe, now a General Assembly Software Engineer looking for my first role in the tech industry  </h3>
                    <p className='w-1/2 pt-10 flex items-end xl:text-4xl md:text-2xl sm:text-2xl text-1xl font-mono'>
                    I am a recent General Assembly, Software Engineering Immersive Graduate with ten years of combined experience in e-commerce post-production and management. 
                    My affinity for coding began with automation in Adobe Photoshop, sparking my ambition to pursue a career in development and, ultimately, my enrolment with General Assembly. 
                </p>
                
                </div>

            <div className=' w-full h-full  '>


                <img className='object-cover  h-full mix-blend-luminosity opacity-20 blur' src={gif} alt="" />


            </div>


            

 

        
            </motion.article>
        </>


        :
            <motion.article key={index} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full bg-slate-800 bg-opacity-20 backdrop-blur-xl snap-center p-10 overflow-y-scroll no-scrollbar '>

                <motion.div 
                    initial={{
                        y:-100
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{
                        one: true
                    }}
                    className=' w-60 h-60 rounded-full bg-gray-900 object-contain object-center p-4 mt-4 flex items-center justify-center border-2 border-indigo-700 '>
                    <img 
                    className=' '
                    key={index}
                    src={require('./assets/' + project.image + '.png')} alt="" />
                    
                </motion.div>



                <div className='px-0 md:px-10 text-slate-300'>

                    <h4 className='text-4xl font-bold mt-2 '>{project.title}</h4>
                    
                    <p className='text-2xl font-semibold mt-1'>{project.company}</p>

                    <div className='grid grid-cols-5 space-x-2 py-3'>

                        {project.skills.map((skill) => (
                            <img className='w-10 h-10 z-20' src={skill} />
                        ))}

                    </div>
                    <p className='uppercase py-2 text-slate-500'>{project.dates}</p>
                    <ul className='list-disc ml-5 space-y-4 text-lg'>

                        {project.summary.map((nestedSkills) => (
                            <li>{nestedSkills}</li>
                        ))}

                    </ul>

                </div>

            </motion.article>
            
            }
        </>
    ))

  return (
    <>    
    
    <div className='relative h-screen flex flex-col overflow-hidden text-left max-w-full px-10 justify-evenly items-center mx-auto'>

        <div className='absolute top-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,160C672,171,768,245,864,234.7C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity="0.05"></path></svg>
        </div>

        <motion.div
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:2
            }}

        className='z-10'>

            <h3 className=' mt-20 pt-20 pl-5 uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'>Experience</h3>

        </motion.div>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory z-10 no-scrollbar '>
            <ExperienceCard card={listExperience}/>
        </div>

    
        
    <div className='absolute bottom-0 w-full z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,245.3C320,277,400,299,480,277.3C560,256,640,192,720,144C800,96,880,64,960,74.7C1040,85,1120,139,1200,160C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" opacity="0.05"></path></svg>
    </div>

    </div>


    
    </>
  )
}
