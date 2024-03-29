import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, setSidebar }) => {
    return (
        <div className='fixed z-50 w-full flex items-center min-h-12 bg-navbarBg text-primaryBg overflow-hidden'>
            <div className='w-full flex justify-between items-center px-3 text-xl font-Audiowide'>
                <Link to='/' onClick={() => setSidebar(false)}>ScoresHub</Link>
                <span className='text-3xl' onClick={toggleSidebar}>
                    <RxHamburgerMenu />
                </span>
            </div>
        </div >
    )
}

export default Navbar