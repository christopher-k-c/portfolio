// import React, {useState} from 'react'

// import {motion} from 'framer-motion'



// export const ProjectCards = ({data}) => {

//     const [isFull, setIsFull] = useState(true)

//     // const [activeId, setActiveId] = useState(null)

//     // const handleHoverStart = (event) => {
//     //     setActiveId(event.target.id);
//     // }

//     // const handleHoverEnd = (event) => {
//     //     setActiveId(null);
//     // }


//     const removeTrunc = (event) => {        
//         const element = event.target.id;
//         const item = document.getElementById(element)
//         const findAllH = item.querySelectorAll('h1')
//         const findAllP = item.querySelectorAll('p')

//         if(isFull === true){
            
//             console.log("REMOVE " + isFull)
//             findAllH[0].classList.remove('truncate') 
//             findAllP[0].classList.remove('truncate') 	
//             setIsFull(false)
//         }else if (isFull === false ){
//             console.log("ADD " + isFull)
//             findAllH[0].classList.add('truncate') 	
//             findAllP[0].classList.add('truncate')        
//             setIsFull(true)   
//         }
//         setIsFull(!isFull)
        
//     }

//   return (
//     <div className="grid lg:grid-cols-2 grid-cols-1 p-16 m-0 z-20 text-black">
//       {data.map((item, index) => (
        
//         <motion.div 
//         key={index} 
//         id={index} 
//         className='m-8 drop-shadow-lg overflow-hidden '>

//             <div className='relative object-cover bg-slate-900 rounded-3xl  '>

//                 <div className=' inset-0 h-full w-full'>

//                     <img src={require('./assets/projectImages/' + item.image + '.jpg')} alt={item.name} className=" p-0 my-0 mx-auto h-full object-cover opacity-20  "/>   

//                 </div>  
                
//                 <motion.div     
//                 initial={{ y: '10%', height: '2/5'}}
//                 whileHover={{ y: '0%', height: 'h-full' }}
//                 key={index} 
//                 id={index} 
//                 className='absolute bottom-0 h-2/5 w-full bg-black/70 p-2 hover:h-full gradient  'onHoverStart={removeTrunc} onHoverEnd={removeTrunc}>    
//                     <h1 className={`text-left xl:text-6xl text-4xl font-bold truncate `}>{item.name}</h1>
//                     <p className={`text-left xl:text-4 md:text-3xl sm:text-2xl text-sm text-slate-100 font-bold truncate`}>{item.description}</p>
//                     <div className="text-left text-xs">
//                         <a href={item.git} > Github </a>
//                         <a href={item.site} > Site </a>
//                     </div>
//                 </motion.div>
//             </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }
