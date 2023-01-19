import React from 'react'

import {motion} from 'framer-motion'



export const ProjectCards = ({data}) => {




    





  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-16 m-0 z-20">
      {data.map((item, index) => (
        <>
        <motion.div 
        
        // whileHover={{ scale: 1.1 }}    
        
        key={item.name} className='p-8 drop-shadow-lg '>

            <div className='relative object-cover bg-slate-900 rounded-3xl group'>

                <div className=' inset-0 h-full w-full '>

                    <img src={require('./assets/projectImages/' + item.image + '.jpg')} alt={item.name} className=" p-0 my-0 mx-auto h-full object-cover opacity-20 hover:opacity-100 rounded-3xl "/>   

                </div>  
                
                <motion.div 

                className='absolute bottom-0 h-2/5 w-full bg-black/70 rounded-b-3xl p-2 overflow-hidden group-hover:h-full group-hover:rounded-3xl'>    
                    <h1 className="text-left xl:text-6xl text-4xl font-bold text- text-slate-300">{item.name}</h1>
                    <div className="text-left xl:text-4 md:text-3xl sm:text-2xl text-sm ">{item.description}</div>

                    <div className="text-left text-xs">
                        <a href={item.git} target="_blank"> Github </a>
                        <a href={item.site} target="_blank"> Site </a>
                    </div>
                    
                </motion.div>
            
            </div>
        
        </motion.div>



        </>
 
      ))}
    </div>
  )
}
