import React from 'react'

const Features = () => {
  return (
    <div className='bg-gray-100 px-4 md:px-25 lg:px-30 py-18'>
        <h2 className='text-center text-black/80 text-5xl pb-4'>Features</h2>
        <div className='flex mx-auto w-14 border-b-2 border-gray-400'></div>
        <p className='text-center pt-8 text-2xl text-black/80  px-4 md:px-40 lg:px-50'>Sed varius suspendisse dictum leo ipsum amet pellentesque fusce ac hendrerit 
            consectetur tempor lorem ipsum</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-8'>
                <div className='text-center border-2 border-gray-400 py-8 px-8'>
                    <div className='relative w-18 h-18 rounded-full flex mx-auto bg-black/80'> <div className='absolute bg-white -bottom-3 right-6 w-6 h-6 rounded-full'></div></div>
                    <h3 className='text-2xl mt-3 font-semibold'>Supreme comfort</h3>
                    <p className='mt-5 leading-loose text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
                <div className='text-center border-y border-r border-gray-400 py-8 px-8'>
                    <div className='relative w-18 h-18 rounded-full flex mx-auto bg-black/80'><div className='absolute bg-white -bottom-3 right-6 w-6 h-6 rounded-full'></div></div>
                    <h3  className='text-2xl mt-3 font-semibold'>Immersive experince</h3>
                    <p className='mt-5 leading-loose text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
                <div className='text-center border-x border-b border-gray-400 py-8 px-8'>
                    <div className='relative w-18 h-18 rounded-full flex mx-auto bg-black/80'><div className='absolute bg-white -bottom-3 right-6 w-6 h-6 rounded-full'></div></div>
                    <h3  className='text-2xl mt-3 font-semibold'>Complete focus</h3>
                    <p className='mt-5 leading-loose text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
                <div className='text-center border-r border-b border-gray-400 py-8 px-8'>
                    <div className='relative w-18 h-18 rounded-full flex mx-auto bg-black/80'><div className='absolute bg-white -bottom-3 right-6 w-6 h-6 rounded-full'></div></div>
                    <h3  className='text-2xl mt-3 font-semibold'>Convenient control</h3>
                    <p className='mt-5 leading-loose text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
    </div>
  )
}

export default Features