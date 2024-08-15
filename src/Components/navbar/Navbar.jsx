import React, { useState } from 'react'
import Logo from '../../assets/King_Food.jpeg'
import Navlinks from '../navlinks/Navlinks'
import {navItems} from '../../utils/contanst'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative h-20 w-full px-4 flex justify-between items-center '>
       <div className='w-20  cursor-pointer'>
          <img src={Logo} alt="Logo" />
       </div>
        <Navlinks navlinks={navItems} classStyle={'hidden md:flex  md:gap-4'}/> 
         
        <button className="md:hidden cursor-pointer" onClick={()=>setIsOpen(!isOpen)}> 
         ||= 
        </button> 
 
        { isOpen ? 
            <Navlinks navlinks={navItems} classStyle={'flex flex-col gap-4 absolute left-0 w-screen bg-slate-400 text-white items-center top-20 h-[210px] py-2'}/> : null
        }
    </div>
  )
}

export default Navbar