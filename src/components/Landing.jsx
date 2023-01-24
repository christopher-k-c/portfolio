import React from 'react'
import Typed from 'react-typed'
import Portrait from './assets/landingImages/portrait-with-filter-01.jpg'
import {motion} from 'framer-motion'

export const Landing = () => {
  return (

    <>
    <div className=' relative flex items-center justify-center text-center overflow-hidden px-4 '>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-2'>
            <div className='text-center xl:text-start w-full'>
                
                <h1 className='xl:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold  text-slate-100 '>
                    I'm a Junior <Typed 
                    className=' bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'
                    strings={['Software Engineer']}
                    typeSpeed={70} 
                    /> 
                </h1>

                <motion.div
                            initial={{
                                opacity: 0,
                                scale: 1
                            }}
                            animate={{
                                y:0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: 1

                            }}
                >
                <p className=' sm:text-sm lg:text-3xl text-sm font-mono md:py-6 py-4 text-slate-100'>2022 General Assembly Graduate based in London with a background in E-commerce post-production and management</p>
                <a href="#contact" className='cursor-pointer'>
                    <button className='drop-shadow-lg w-[200px] rounded-md mx-auto p-2 mt-4 font-bold text-1xl bg-indigo-600 text-black z-0 cursor-pointer'>Contact</button>
                </a>
                </motion.div>
            </div>

            <motion.div 
            
            initial={{
                x: 1500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.4,
                type: "spring", 
                bounce: 0.4,
            }}
            className='justify-self-center xl:justify-self-end order-first xl:order-last  '>
                <img className='rounded-full h-40 w-40   drop-shadow-xl border-2 border-indigo-600 object-cover custom-position md:hidden m-4'  src={Portrait} alt="Portrait of Chris" />
                <img className='rounded-full hidden md:block md:w-40 lg:w-40 xl:w-[400px]  drop-shadow-xl border-2 border-indigo-600 m-10 xl:m-0'  src={Portrait} alt="Portrait of Chris" />
            </motion.div>
        </div>
    </div>

    
    </>
  )
}
