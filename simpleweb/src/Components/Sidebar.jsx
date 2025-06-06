import React from 'react'
import {FaTimes } from 'react-icons/fa';
import { Link} from 'react-router-dom';


const Sidebar = ({showSidebar,setShowSidebar}) => {
  return (
    <div className={`fixed   ${showSidebar ? 'flex transition-all transform duration-700' : 'hidden'} top-0 bottom-0 right-0 left-0 bg-black/50`}>
        <div className='w-[50%] md:w-[60%] lg:w-[75%]'></div>
        <div className='w-[50%] relative md:w-[40%] lg:w-[25%] text-center text-xl text-gray-500 py-26  bg-white'>
            <FaTimes onClick={()=>setShowSidebar(false)} className='absolute top-6 right-8 object-contain w-8 cursor-pointer hover:text-black/90' src="./cross-desktop.png" alt="" />
            <Link onClick={()=>setShowSidebar(false)} to='/'><p className='pb-6 hover:text-black cursor-pointer'>Home</p></Link>
            <Link onClick={()=>setShowSidebar(false)} to='/generic'><p className='border-y hover:text-black py-6 cursor-pointer border-gray-400'>Generic</p></Link>
            <p className='py-6 hover:text-black cursor-pointer'>Elements</p>
        </div>

    </div>
  )
}

export default Sidebar