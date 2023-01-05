import React, {useState} from 'react'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export const NavBar = () => {



    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240] mx-auto px-4  '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CHRISTOPHER CAREY.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>HOME</li>
            <li className='p-4'>PROJECTS</li>
            <li className='p-4'>EXPERIENCE</li>
            <li className='p-4'>CONTACT</li>
        </ul>


        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}

        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-900' : 'fixed hidden'}>
            <h1 className='w-full text-3xl font-bold text-[#6653ff] p-4'>CHRISTOPHER CAREY.</h1>
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
