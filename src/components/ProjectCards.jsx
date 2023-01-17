import React from 'react'



export const ProjectCards = ({data}) => {




    





  return (
    <div className="grid grid-cols-1 p-0 m-0">
      {data.map((item, index) => (
        <>
        <div key={item.name} className={`relative object-cover p-4`}>

            <div className=' inset-0 h-full w-full'>
                <img src={require('./assets/projectImages/' + item.image + '.jpg')} alt={item.name} className=" p-0 my-0 mx-auto h-full object-cover bg-red-300 "/>   
            </div>   
            <div className='absolute bottom-0 h-1/3 w-full bg-black/20 '>    
                <h1 className="text-left xl:text-6xl text-4xl font-bold text- text-slate-800">{item.name}</h1>
                <div className="text-left text-sm">{item.description}</div>

                <div className="text-left text-xs">
                    <a href={item.git} target="_blank"> Github </a>
                    <a href={item.site} target="_blank"> Site </a>
                </div>
                
            </div>
        </div>



        </>

          /* <div className='absolute top-0'>
            <div className="text-left text-lg font-bold">{item.name}</div>
            <div className="text-left text-sm">{item.description}</div>
            <div className="text-left text-xs">
                <a href={item.git} target="_blank"> Github </a>
                <a href={item.site} target="_blank"> Site </a>
            </div>
          </div> */
 
      ))}
    </div>
  )
}
