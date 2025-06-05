import React from 'react'
import Navbar from './Navbar'

const Hero = ({setShowSidebar,showSidebar}) => {
  return (
    <div className='min-h-screen bg-cover bg-center'  style={{backgroundImage:"url('./1.jpg')"}}>
        <Navbar setShowSidebar={setShowSidebar}/>
        <div className='pt-16'>
          <img className='flex mx-auto object-contain w-26' src="./wow_logo.png" alt="" />
          <p className='flex whitespace-nowrap mx-auto justify-center text-2xl pt-4'>An <span className='font-semibold px-1'>immersive</span> vertual reality helmet.</p>
          <button className='px-20 hover:text-white hover:bg-black/80 transition ease-in-out duration-500 text-xl py-4 mt-7 cursor-pointer border-2 rounded-full flex mx-auto'>GET WOW NOW</button>
        </div>
    </div>
  )
}

export default Hero