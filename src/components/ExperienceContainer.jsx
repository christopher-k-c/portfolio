import React from 'react'
import { ExperienceCards } from './ExperienceCards'
import {motion} from 'framer-motion'

export const ExperienceContainer = ({experience}) => {
  return (
    <div className='h-screen relative flex flex-col items-center'>

        <div className='absolute top-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" 
            fill-opacity="1" 
            d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,160C672,171,768,245,864,234.7C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
            opacity="0.05"></path></svg>
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
        >
            <h3 className=' mt-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text z-20'>Experience</h3>
        </motion.div>

        <ExperienceCards className='z-10 ' experience={experience}></ExperienceCards>


        <div className='absolute bottom-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" 
            fill-opacity="1" 
            d="M0,128L40,149.3C80,171,160,213,240,245.3C320,277,400,299,480,277.3C560,256,640,192,720,144C800,96,880,64,960,74.7C1040,85,1120,139,1200,160C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" 
            opacity="0.05"></path></svg>
        </div>

    </div>
  )
}
