import React from 'react'
import { TestCardGrid } from './TestCardGrid'
import {motion} from 'framer-motion'

export const TestContainer = ({data}) => {


  return (
    <>
    <div className=' relative flex flex-col items-center z-10'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
            <h3 className=' mt-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-lg font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text '>Projects</h3>
        </motion.div>
        <div className='z-50'>
            <TestCardGrid projects={data}></TestCardGrid>
        </div>
        <div className='absolute top-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,101.3C672,107,768,181,864,229.3C960,277,1056,299,1152,309.3C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" opacity={0.05}></path></svg>
        </div>
    </div>
    </>
  )
}
