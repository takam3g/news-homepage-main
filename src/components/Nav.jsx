import { useState } from 'react';

import NavLinks from './NavLinks';
import MenuIcon from '../assets/img/icon-menu.svg';
import CloseIcon from '../assets/img/icon-menu-close.svg';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen && <img src={MenuIcon} alt="Open Menu Icon" className="desktop:hidden" onClick={() => toggleMenu()}/>}

      <div className="hidden desktop:block w-2/5"> 
        <NavLinks />
      </div>

      {isMenuOpen && <div className={`absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-10`}></div>}

      <div 
        className={`
          flex flex-row-reverse justify-between 
          absolute top-0 
          h-full 
          w-3/5 md:w-1/3 
          p-5
          bg-secondary-offWhite 
          z-20 
          ${isMenuOpen ? "right-0" : "-right-full"}  
          transition-all ease-out duration-200
        `}>
        <img src={CloseIcon} alt="Close Menu Icon" className="desktop:hidden w-10 h-10" onClick={() => toggleMenu()}/>
        <div className="mt-20">
          <NavLinks />
        </div>
      </div>
    </>
  )
}

export default Nav