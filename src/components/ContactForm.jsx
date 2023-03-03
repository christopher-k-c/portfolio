import React from 'react'
import {motion} from 'framer-motion'

export const ContactForm = () => {
  return (

    <>



        <div className=' w-3/5 sm:w-full flex justify-center items-center p-4 '>

            <form method='POST' action='https://getform.io/f/b1862744-26e4-4283-b5ac-d25f972fcc56' className='flex flex-col  z-40'>
                <div className='pb-8 text-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
                    <h3 className=' mt-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-7xl md:text-6xl sm:text-4xl text-lg font-bold    bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text mt-30'>Contact</h3>
                </motion.div>
                    <p className='text-gray-300 pt-4 font-bold'> Drop me a message!</p>

                </div>
                <input className='mb-2 p-2 bg-slate-500' type="text" placeholder='Name' name='name'/>
                <input className='my-2 p-2 bg-slate-500' type="email" placeholder='Email Address' name='email'/>
                <textarea className='my-2 p-2 bg-slate-500' name='message' rows="10" placeholder='Message'></textarea>

                <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center z-20'>Let's Collaborate</button>
                
            </form>
        </div>


    </>
  
  )
}
