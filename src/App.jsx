import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleLeague from './pages/SingleLeague';
import Footer from './components/Footer';

const App = () => {
  const [sidebar, setSidebar] = useState();
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  //disables scrolling the body when sidebar is visible
  sidebar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return (
    <div className='bg-brandColor text-primaryBg font-Prompt flex flex-col'>
      <Navbar toggleSidebar={toggleSidebar} setSidebar={setSidebar} />
      <div className='pt-16 pb-8 px-2 min-h-screen tab:flex tab:justify-center tab:w-full laptop:w-full'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/league/:leagueID' element={<SingleLeague />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App