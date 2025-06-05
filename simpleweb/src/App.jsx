
import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Sidebar from './Components/Sidebar'
import Features from './Components/Features'
import Why from './Components/Why'


function App() {
  const[showSidebar, setShowSidebar] = useState(false)
  return (
   <div>
    <Hero showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Features/>
    <Why/>
   </div>
  )
}

export default App
