import React from 'react'
import Portrait from './assets/portrait-with-filter-01.jpg'
import Typed from 'react-typed'

export const About = () => {
  return (
    <div className='w-full bg-slate-800 py-16 px-20'>

        <div className='max-w-[2240px] mx-auto grid grid-cols-1 xl:grid-cols-2'>



            <div>
                <h1 className='md:text-9xl sm:text-7xl text-4xl font-bold md:py-6 py-4 text-slate-100 '>
                    I'm a Junior <Typed 
                    className=' bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'
                    strings={['Software Engineer']}
                    typeSpeed={40} 
                    /> 
                </h1>
                <p className='md:text-3xl sm:text-2xl text-1xl font-mono md:py-6 py-4 text-slate-100'>2022 General Assembly Graduate based in London with a background in E-commerce post-production and management</p>

                <button className='drop-shadow-lg w-[200px] rounded-md mx-auto p-2 mt-4 font-bold text-1xl bg-indigo-600 text-black z-0'>Contact</button>
            </div>
            <div className='justify-self-end'>
            <img className='w-[400px]  p-4'  src={Portrait} alt="Portrait of Chris" />
            </div>
        </div>

    </div>
  )
}
