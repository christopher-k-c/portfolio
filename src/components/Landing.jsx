import React from 'react'
import Typed from 'react-typed'
import Portrait from './assets/portrait-with-filter-01.jpg'

export const Landing = () => {
  return (

    <>

    
    <div className='w-full py-16 px-20'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-2'>
            <div className='text-center xl:text-start'>
                <h1 className='xl:text-9xl md:text-7xl sm:text-5xl text-4xl font-bold  text-slate-100 '>
                    I'm a Junior <Typed 
                    className=' bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'
                    strings={['Software Engineer']}
                    typeSpeed={70} 
                    /> 
                </h1>
                <p className=' md:text-3xl sm:text-2xl text-1xl font-mono md:py-6 py-4 text-slate-100'>2022 General Assembly Graduate based in London with a background in E-commerce post-production and management</p>
                <button className='drop-shadow-lg w-[200px] rounded-md mx-auto p-2 mt-4 font-bold text-1xl bg-indigo-600 text-black z-0'>Contact</button>
            </div>
            <div className='justify-self-center xl:justify-self-end order-first xl:order-last  '>
                <img className='rounded-full h-40 w-40 m-4 drop-shadow-4xl border-2 border-indigo-600 object-cover custom-position md:hidden'  src={Portrait} alt="Portrait of Chris" />
                <img className='hidden md:block md:w-[300px] lg:w-[500px] rounded-full drop-shadow-4xl border-2 border-indigo-600 m-10 xl:m-0'  src={Portrait} alt="Portrait of Chris" />
            </div>
        </div>

        
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,245.3C672,267,768,245,864,208C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,160C672,171,768,245,864,234.7C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}
