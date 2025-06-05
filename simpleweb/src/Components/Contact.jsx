import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100 px-4 md:px-25 lg:px-30 py-18'>
        <h2 className='text-center text-black/80 text-5xl pb-4'>Step in Wow</h2>
        <div className='flex mx-auto w-14 border-b-2 border-gray-400'></div>
         <p className='text-center pt-8 text-2xl text-black/80  px-4 md:px-40 lg:px-50'>Sed varius suspendisse dictum leo ipsum amet pellentesque fusce ac hendrerit 
            consectetur tempor lorem ipsum</p>
        <button className='px-20 hover:text-white bg-white hover:bg-black/80 transition ease-in-out duration-500 text-xl py-4 mt-12 cursor-pointer border-2 rounded-full flex mx-auto'>BUY WOW NOW</button>
  
    
    </div>
  )
}

export default Contact