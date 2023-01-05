import React from 'react'
import Typed from 'react-typed'

export const Landing = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[120px] w-full h-screen mx-auto text-center flex flex-col '>

          <h1 className='md:text-9xl sm:text-7xl text-4xl font-bold md:py-6 py-4 text-slate-100 '>
            I'm a Junior <Typed 
            className=' bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'
            strings={['Software Engineer']}
            typeSpeed={40} 
            /> 
          </h1>

          <p className='md:text-3xl sm:text-2xl text-1xl font-mono py-4 px-4 text-slate-100'>2022 General Assembly Graduate based in London with a background in E-commerce post-production and management</p>
 
          {/* <p className='text-1xl font-mono py-4 md:text-xl '>Check out my projects</p> */}

          <button className='drop-shadow-lg w-[200px] rounded-md mx-auto p-2 mt-4 font-bold text-1xl bg-indigo-600 text-black z-0'>Contact</button>

        </div> 
    </div>
  )
}
