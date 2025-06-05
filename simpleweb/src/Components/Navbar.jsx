import React from 'react'

const Navbar = ({setShowSidebar}) => {
  return (
    <div className=' px-4 md:px-25 lg:px-30'>
    <div className=' flex justify-between mx-auto items-center py-4 '>
        <div>
            <img src="./logo.png" alt="" />
        </div>
        <div className='flex gap-3'>
            <h3 className='text-xl font-bold' onClick={()=>setShowSidebar(true)}>MENU</h3>
            <img className='filter invert w-5 object-contain'  onClick={()=>setShowSidebar(true)} src="./toggle-icon.png" alt="" />
        </div>
    </div>
    <div className='h-1 border-b-2 border-gray-400'></div>
    
    </div>
  )
}

export default Navbar