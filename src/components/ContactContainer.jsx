import React from 'react'
import { ContactForm } from './ContactForm'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const ContactContainer = () => {
  return (
    <>
      <div className=' relative   flex justify-center items-center'>
        

        <div className='absolute top-0 w-full z-0'>
          
        </div>



          <ContactForm className="z-40 "></ContactForm>




        <div className='absolute bottom-0 w-full z-0'>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center items-center gap-6 py-8">
        <a 
          href="https://github.com/christopher-k-c/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a 
          href="http://www.linkedin.com/in/chriskcarey/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </>
  )
}
