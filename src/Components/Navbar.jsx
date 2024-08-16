import React, { useState } from 'react'
import Logo from './../assets/King_Food.png'
import Navlinks from './Navlinks'
import {navItems} from '../utils/contanst'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative h-20 w-full px-7 flex justify-between items-center shadow-lg'>
       <div className='w-20  cursor-pointer '>
          <img src={Logo} alt="Logo" />
       </div>

        <Navlinks navlinks={navItems} classStyle={'hidden md:flex  md:gap-4'}/> 
         
        <button className="md:hidden cursor-pointer text-2xl transition-all" onClick={()=>setIsOpen(!isOpen)}> 
       {isOpen ? <IoClose /> : <GiHamburgerMenu /> }   
        </button> 
 
        { isOpen ? 
            <Navlinks navlinks={navItems} classStyle={'flex flex-col gap-4 absolute left-0 w-screen bg-slate-400 text-white items-center top-20 h-[210px] py-2 z-20 md:hidden transition-transform duration-2000'}/> : null
        }
    </div>
  )
}

export default Navbar