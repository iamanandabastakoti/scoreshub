import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleLeague from './pages/SingleLeague';

const App = () => {
  const [sidebar, setSidebar] = useState();
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  //disables scrolling the body when sidebar is visible
  sidebar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return (
    <div className='bg-brandColor text-primaryBg font-Prompt flex flex-col min-h-screen'>
      <Navbar toggleSidebar={toggleSidebar} setSidebar={setSidebar} />
      <div className='pt-16 px-2 h-full'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/league/:leagueID' element={<SingleLeague />} />
        </Routes>
      </div>
    </div>
  )
}

export default App