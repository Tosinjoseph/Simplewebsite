
import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Sidebar from './Components/Sidebar'
import Features from './Components/Features'
import Why from './Components/Why'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact'
import Socials from './Components/Socials'
import Navbar from './Components/Navbar'
import Generic from './Pages/Generic'


function App() {
  const[showSidebar, setShowSidebar] = useState(false)
  return (
  <Router>
    <Routes>

     <Route path='/' element={<>
      <Hero showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Features/>
      <Why/>
      <Contact/>
      <Socials/>
      </>}/>

      <Route path='/generic' element={<>
      <Generic showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      </>}/>
    </Routes>
  </Router>
   
  )
}

export default App
