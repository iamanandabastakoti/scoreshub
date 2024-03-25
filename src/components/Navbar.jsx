import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className='fixed z-50 w-full flex items-center min-h-12 bg-navbarBg text-primaryBg overflow-hidden'>
            <div className='w-full flex justify-between items-center px-3 text-xl font-Audiowide'>
                <h1>ScoresHub</h1>
                <span className='text-3xl' onClick={toggleSidebar}>
                    <RxHamburgerMenu />
                </span>
            </div>
        </div>
    )
}

export default Navbar