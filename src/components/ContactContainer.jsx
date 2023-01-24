import React from 'react'
import { ContactForm } from './ContactForm'

export const ContactContainer = () => {
  return (

    <>
        <div className=' relative '>
            

        <div className='absolute top-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,122.7C640,160,800,224,960,208C1120,192,1280,96,1360,48L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" opacity={0.05}></path></svg>
        </div>



            <ContactForm className="z-50"></ContactForm>




        <div className='absolute bottom-0 w-full z-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,128L40,133.3C80,139,160,149,240,170.7C320,192,400,224,480,224C560,224,640,192,720,160C800,128,880,96,960,101.3C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" opacity={0.05}></path></svg>
        </div>
        </div>
    </>
    
  )
}
