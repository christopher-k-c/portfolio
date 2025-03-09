import React from 'react'
import { ProjectGrid } from './ProjectGrid'
import {motion} from 'framer-motion'

export const ProjectContainer = ({data}) => {
  return (
    <section className="relative flex flex-col items-center z-10">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
        <h3 className='my-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-6xl md:text-6xl sm:text-4xl text-lg font-bold bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'>
          Projects
        </h3>
      </motion.div>
      
      <div className="container mx-auto px-4 pb-20 z-50 relative">
        <ProjectGrid projects={data} />
      </div>
    </section>
  )
}
