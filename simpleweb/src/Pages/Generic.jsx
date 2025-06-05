import React from 'react'
import Navbar from '../Components/Navbar'
import Socials from '../Components/Socials'
import Sidebar from '../Components/Sidebar'

const Generic = ({setShowSidebar,showSidebar}) => {
  return (
    <div>
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
    <div className='py-18 bg-gray-100'>
      <h2 className='text-center text-black/80 text-5xl pb-4'>Generic</h2>
      <div className='flex mx-auto w-14 border-b-2 border-gray-400'></div>
      <img className='flex mx-auto w-[90%] mt-10' src="./5.jpg" alt="" />

      <div className='w-[90%] flex-col mx-auto mt-12 text-xl'>
      <p className='mb-4'>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac</p>
      <p  className='mb-4'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo</p>
      </div>
    </div>

    
    </div>
  )
}

export default Generic