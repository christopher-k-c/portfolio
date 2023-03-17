import React from 'react'
import { GalleryCarousel } from './GalleryCarousel'
export const GalleryContainer = () => {
    return (  
        <>
        <div className=' relative   flex justify-center items-center'>
            


            <GalleryCarousel>
                
            </GalleryCarousel>

        <div className='absolute bottom-0 w-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6653ff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,122.7C640,160,800,224,960,208C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" opacity={0.05}></path></svg>
        </div>

            
        </div>
    </>
    )
  }

