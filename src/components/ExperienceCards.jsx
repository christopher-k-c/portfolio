import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight, BsChevronDoubleDown} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import gif from './assets/experienceImages/terminal.gif'
import {motion} from 'framer-motion'

export const ExperienceCards = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)

    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

  return (



    // <div className='fixed bottom-0 bg-black/20 w-full flex justify-center items-center md:text-7xl text-2xl '> 
    //     <BsChevronDoubleDown></BsChevronDoubleDown>
    //     </div>

    // MAIN CONTAINER

    
    <div className='h-4/5 w-full py-20 px-10 relative group z-10'>

        
        

        

        {/* IMAGE DIV CONTAINER */}
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500  bg-slate-800 bg-opacity-20 backdrop-blur-xl overflow-y-scroll no-scrollbar '>
        
        <motion.div
        
        

        className=' w-full sticky top-0 flex justify-center items-center md:text-7xl text-2xl  z-20 bg-gradient-to-b from-gray-900  to-transparent w-full'> 
        
        <motion.div
        initial={{opacity:0 }}
        animate={{opacity:1}}
        exit={{ opacity: 0}}
        transition={{ ease: "easeInOut", duration: 3, repeat: Infinity, delay:0.1}}   
        
        className=''>
        
        <BsChevronDoubleDown>
        </BsChevronDoubleDown>
        
        </motion.div>

        </motion.div>
                {data[currentIndex].title === 'landing' ? 
                


                    <>

                        <div className='absolute flex flex-col lg:p-20 p-4 '>
                            <h3 className=' xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold  text-slate-100 bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'> 
                            Previously the Retouch Manager for Jojomamanbebe, now a General Assembly Software Engineer looking for my first role in the tech industry  </h3>
                            <p className='w-full sm:w-1/2 pt-10 flex items-end xl:text-2xl text-1xl font-mono'>
                                I am a recent General Assembly, Software Engineering Immersive Graduate with ten years of combined experience in e-commerce post-production and management. 
                                My affinity for coding began with automation in Adobe Photoshop, sparking my ambition to pursue a career in development and, ultimately, my enrolment with General Assembly. 
                            </p>
                            <p className='w-1/2 pt-10 flex items-end xl:text-4xl md:text-2xl sm:text-2xl text-1xl font-mono'>                            
                            </p>
                        </div>
                        <div className=' w-full h-full  '>
                            <img className='object-cover w-full h-full mix-blend-luminosity opacity-10 blur' src={gif} alt="" />
                        </div>

                    </>
                :
                <>


                <div className='grid grid-cols-1 place-items-center  '>

                    


                    <motion.div
                    
                    initial={{
                        y:-200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{
                        one: true
                    }}
                    
                    className='pt-10 pb-10' key={data[currentIndex].title}>

                        <img className='md:w-60 md:h-60 w-32 h-32 rounded-full bg-gray-900 object-contain object-center p-4 mt-4 flex items-center justify-center border-2 border-indigo-700 ' src={require('./assets/experienceImages/' + data[currentIndex].image + '.png')} alt="" />
                    </motion.div>

                    <div className='pr-10 pl-10'>
                        <h4 className='xl:text-6xl md:text-5xl sm:text-4xl text-3xl pb-2 font-bold mt-2 bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text '>{data[currentIndex].title}</h4>
                        
                        <p className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl pb-2 font-semibold mt-1 text-indigo-600 '>{data[currentIndex].company}</p>
        
                        <div className='grid grid-cols-5 pt-2 '>
                            {data[currentIndex].skills.map((skill) => (
                                console.log(skill, "skill"),
                                <img className='w-10 h-10 z-10 ' src={skill} />
                            ))}
                        </div>
                            <p className='uppercase  text-slate-500 pt-4'>{data[currentIndex].dates}</p>
        
                        <ul className='list-disc ml-5 space-y-4  sm:text-2xl text-xs  font-mono'>
        
                            {data[currentIndex].summary.map((nestedSkills) => (
                                <li className='pt-2'>{nestedSkills}</li>
                            ))}
        
                        </ul>
                    </div>

                    </div>


                    
                    </>
                }

                


                





        </div>


            {/* LEFT BUTTON */}
            <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 md:text-7xl text-2xl rounded-full p-2  text-white cursor-pointer z-20'>
                <BsChevronCompactLeft  ></BsChevronCompactLeft>
            </div>
            {/* RIGHT BUTTON */}
            <div onClick={nextSlide} className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 md:text-7xl text-2xl rounded-full p-2  text-white cursor-pointer z-20'>
                <BsChevronCompactRight  ></BsChevronCompactRight>
            </div>

        {/* DOTS */}
        
        <div className='flex top-4 justify-center py-2'>
            {data.map((slides, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer flex justify-center items-center'>
                    {slideIndex === currentIndex ? 
                    <RxDotFilled className='text-indigo-600 text-6xl'></RxDotFilled> :
                    <RxDotFilled className='text-4xl m-2 '></RxDotFilled>}
                </div>
            ))}
        </div>


    </div>
  )
}
