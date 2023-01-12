import React from 'react'
import {motion} from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

// import GA from './assets/ga.png'
import Capture from './assets/captureone.png'

import Jojo from './assets/jojo.png'
import GA from './assets/ga.png'

export const Experience = () => {

    const experience = [
        
        {
            'image': 'jojo',
            'title': 'Retouch Manger', 
            'company': 'Jojo Maman Bebe', 
            'dates': 'May 2015 - May 2022',
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
            'image': 'captureone',
            'title': 'Retouch Manger', 
            'company': 'Jojo Maman Bebe', 
            'dates': 'May 2015 - May 2022',
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
           
        }
    ]




    const listExperience = experience.map((project, index) => (


        <>
        
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

                    <h4 className='text-4xl font-bold uppercase mt-2 '>{project.title}</h4>
                    <p className='text-2xl font-semibold mt-1'>{project.company}</p>
                    <div className='flex space-x-2 py-3'>
                
                        <img className='w-10 h-10 z-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
                        <img className='w-10 h-10 z-20' src={Capture} alt="" />
                        <img className='w-10 h-10 z-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="" />
                        <img className='w-10 h-10 z-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" />
                        <img className='w-10 h-10 z-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" />
                
                        {/* Tech/Skills */}
                    </div>
                    <p className='uppercase py-2 text-slate-500'>Started.... Finished....</p>
                    <ul className='list-disc ml-5 space-y-4 text-lg'>
                        <li>Summary of points</li>
                        <li>Summary of points</li>
                        <li>Summary of points</li>
                        <li>Summary of points</li>
                        <li>Summary of points</li>
                    </ul>

                </div>

            </motion.article>
        </>
    ))

  return (
    <>    
    
    <div className='relative h-screen flex flex-col overflow-hidden text-left max-w-full px-10 justify-evenly items-center mx-auto'>

        {/* TOP SVG */}
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
        className='z-10'
        >
            <h3 className=' mt-20 pt-20 pl-5 uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'>Experience</h3>

        </motion.div>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory z-10 no-scrollbar '>
            <ExperienceCard card={listExperience}/>
        </div>

    
        
    {/* BOTTOM SVG */}
    <div className='absolute bottom-0 w-full z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,245.3C320,277,400,299,480,277.3C560,256,640,192,720,144C800,96,880,64,960,74.7C1040,85,1120,139,1200,160C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" opacity="0.05"></path></svg>
    </div>

    </div>


    
    </>
  )
}
