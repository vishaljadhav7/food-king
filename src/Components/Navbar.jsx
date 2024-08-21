import React, { useState } from 'react'
import Logo from './../assets/King_Food.png'
import Navlinks from './Navlinks'
import {navItems} from '../utils/contanst'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavSideBar from './NavSideBar';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

 const toggleNavMenu = () => {
  setIsOpen(false) 
 }


  return (
    <div className='relative h-20 w-screen px-7 flex justify-between items-center shadow-lg ' >
       <div className='w-20  cursor-pointer '>
          <img src={Logo} alt="Logo" />
       </div>

        <Navlinks navlinks={navItems} navSectionStyle={'hidden md:flex  md:gap-4'} buttonStyle={'bg-blue-500 text-white p-2 rounded-lg'}/> 
         
        <button className="md:hidden cursor-pointer text-2xl" onClick={()=>setIsOpen(!isOpen)}> 
          {isOpen ? <IoClose /> : <GiHamburgerMenu /> }   
        </button> 
 
        { isOpen ? 
            <NavSideBar navlinks={navItems} navSectionStyle={'flex flex-col gap-4 absolute left-0 w-screen bg-slate-400 text-black text-bold items-center top-20 h-[240px] py-2 z-20 md:hidden bg-gray-800 bg-opacity-30  backdrop-blur-sm backdrop-filter'} buttonStyle={'hover:bg-blue-400 w-screen p-[2px] '} toggleNavMenu={toggleNavMenu}/> : null
        }
    </div>
  )
}

export default Navbar