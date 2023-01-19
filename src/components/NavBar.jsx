import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export const NavBar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='py-4 px-10 flex items-center justify-around w-full mx-auto text-slate-100 lg:items-center'>
        <h1 className='w-full text-3xl font-bold text-indigo-600 font-inter '>CHRISTOPHER CAREY.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>About</li>
                <li className='p-4'>Home</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Experience</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={40}/> :  <AiOutlineMenu size={40}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[80%] border-r border-r-gray-900 h-full bg-gray-800 ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%]'}>
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
