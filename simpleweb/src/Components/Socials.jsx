import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className=''>
        <div className='flex gap-5 py-24 text-6xl justify-center mx-auto px-4 md:px-25 lg:px-30'>
                <FaPinterest className='border-2 hover:text-white hover:bg-black/90 transition ease-in-out duration-500 cursor-pointer border-gray-400 rounded-sm p-3'/>
                <FaTwitter className='border-2 hover:text-white hover:bg-black/90 transition ease-in-out duration-500 cursor-pointer border-gray-400 rounded-sm p-3'/>
                <FaLinkedinIn className='border-2 hover:text-white hover:bg-black/90 transition ease-in-out duration-500 cursor-pointer border-gray-400 rounded-sm p-3'/>
                <FaFacebookF className='border-2 hover:text-white hover:bg-black/90 transition ease-in-out duration-500 cursor-pointer border-gray-400 rounded-sm p-3'/>
        </div>
        <div className='border-b border-gray-400'></div>
        <div className='flex justify-between flex-wrap text-center px-4 md:px-25 lg:px-30 py-6 text-lg'>
            <p>Copy right 2016 by wow technology</p>
            <img className='w-16 flex mx-auto' src="./footer-logo.png" alt="" />
            <p>Coded by Tosin Joseph</p>
        </div>
    </div>
  )
}

export default Socials