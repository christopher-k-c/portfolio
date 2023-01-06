import React from 'react'
import Jojo from './assets/jojo.png'
import GA from './assets/ga.png'

export const About = () => {

  return (
    <div className='w-full  py-16 px-20 bg-gray-900 '>

        <div className='max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-2 order-first bg-gray-800 rounded-xl bg-gradient-to-b from-gray-800  via--gray-900 to-gray-900 m-10 border border-indigo-600'>    
            <img className=' w-[500px] md:justify-self-start m-4 mx-auto' src={Jojo} alt="Jojo logo" />
            <div className='flex flex-col justify-center p-4'>
                <p className='text-indigo-600 font-bold font-mono p-4'>May 2015 - May 2022</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-100 p-4 '>Retouch Manager</h1>
                <p className='text-slate-100  font-mono p-4'>
                During my time at Jojo, I was promoted to Senior Retoucher, where I built an efficient team and implemented an agile-inspired workflow. 
                Regularly communicated at all levels across the company to ensure my team delivered on short and long-term deadlines.
                </p>
            </div>
        </div>



        <div className='max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-2 order-first bg-gray-800 rounded-xl bg-gradient-to-b from-gray-800  via--gray-900 to-gray-900 m-10 border border-indigo-600'>    
            <img className=' w-[500px] md:justify-self-start m-4 mx-auto' src={GA} alt="Jojo logo" />
            <div className='flex flex-col justify-center p-4'>
                <p className='text-indigo-600 font-bold font-mono p-4'>May 2022 - July 2022</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-100 p-4 '>Software Engineer Student</h1>
                <p className='text-slate-100  font-mono p-4'>
                    The Software Engineering Immersive course with General Assembly has exposed me to industry-standard methodologies, 
                    technologies and more. Working in groups and on our own, we participated in daily stand-ups, lectures and project presentations.    
                </p>
            </div>
        </div>



{/* <div className='h-[600px] bg-gray-600 rounded-3xl mx-auto'>
            
            <img className=' w-[500px] md:justify-self-start m-4' src={Jojo} alt="Jojo logo" />

        </div> */}
    </div>
  )
}
