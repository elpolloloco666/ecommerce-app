import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import { cookies } from 'next/headers';


const Navbar = () => {

  return (
    <nav>
        <DesktopNavbar/>
    </nav>
  )
}

export default Navbar;