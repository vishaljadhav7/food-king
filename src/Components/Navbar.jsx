import React, { useState } from 'react'
import Logo from './../assets/King_Food.png'
import Navlinks from './Navlinks'
import {navItems} from '../utils/contanst'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () =>{
   setIsOpen(false) 
  }


  return (

<div className="relative h-20 w-screen px-7 flex justify-between items-center shadow-lg bg-gradient-to-r from-white via-gray-100 to-white">
  <div className="w-20 cursor-pointer">
    <img src={Logo} alt="Logo" />
  </div>

  <Navlinks
    navlinks={navItems}
    navSectionStyle="md:visible invisible md:flex md:gap-6 text-gray-800 font-medium"
    buttonStyle="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105"
  />

  <button className="md:hidden cursor-pointer text-3xl text-gray-800" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen)}}>
    {isOpen ? <IoClose /> : <GiHamburgerMenu />}
  </button>

  {isOpen ? (
      <Navlinks
      navlinks={navItems}
      navSectionStyle="flex flex-col gap-6 absolute left-0 w-screen bg-gray-700 text-white font-semibold items-center top-20 h-[320px] py-4 z-20 md:invisible backdrop-blur-sm backdrop-filter"
      buttonStyle="hover:bg-blue-600 w-full py-2 transition-all duration-300 ease-in-out"
      toggleNavMenu={toggleNavMenu}
    />
  ) : null}
</div>

  )
}

export default Navbar