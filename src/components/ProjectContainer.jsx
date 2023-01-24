import React from 'react'
import { ProjectGrid } from './ProjectGrid'
import {motion} from 'framer-motion'

export const ProjectContainer = ({data}) => {


  return (
    <>


    <div className=' relative flex flex-col items-center z-10 '>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
            <h3 className='  my-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-lg font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text '>Projects</h3>
        </motion.div>
        <div className='z-50 mx-8 '>
            <ProjectGrid projects={data}></ProjectGrid>
        </div>
        <div className='absolute top-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.05}></path></svg>
        </div>
        <div className='absolute bottom-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,122.7C640,160,800,224,960,208C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" opacity={0.05}></path></svg>
        </div>
    </div>
    </>
  )
}
