import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


export const NavBar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='max-w-[1440px] py-4  flex items-center justify-between w-full mx-auto text-slate-100 lg:items-center px-8'>
        <a href="#landing"><h1 className=' text-3xl font-bold text-indigo-600 font-inter '>CHRISTOPHER CAREY.</h1></a>
            <ul className='hidden md:flex '>
                <a href="#landing" ><li className='p-4'>Home</li></a>
                <a href="#experience" ><li className='p-4'>Experience</li></a>
                <a href="#project" ><li className='p-4'>Projects</li></a>
                <a href="#contact" ><li className='p-4' >Contact</li></a>
            </ul>
            <div onClick={handleNav} className='block md:hidden z-50'>
                {!nav ? <AiOutlineClose size={40}/> :  <AiOutlineMenu size={40}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[100%] border-r border-r-gray-900 h-screen bg-gray-800 ease-in-out duration-500 md:hidden z-40' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#6653ff] pl-4 pt-8 font-inter'>CHRISTOPHER CAREY.</h1>
                <ul className='p-4'>
                    <li className='p-4 border-b border-gray-100'>ABOUT</li>
                    <li className='p-4 border-b border-gray-100'>HOME</li>
                    <li className='p-4 border-b border-gray-100'>PROJECTS</li>
                    <li className='p-4 border-b border-gray-100'>EXPERIENCE</li>
                    <li className='p-4 border-b border-gray-100'>CONTACT</li>
                </ul>
            </div>
    </div>
  )
}
