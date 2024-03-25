import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebar, setSidebar] = useState();
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  //disables scrolling the body when sidebar is visible
  sidebar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return (
    <div className='bg-brandColor text-primaryBg font-Prompt flex flex-col min-h-screen'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='pt-12 px-2 h-full'>
        <Sidebar sidebar={sidebar} />
        Home
      </div>
    </div>
  )
}

export default App