import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

const NavSideBar = ({navSectionStyle, buttonStyle, toggleNavMenu, navlinks}) => {

    const navBarRef = useRef(null)

    const handleOutSideClick = (e) =>{
         if(navBarRef.current && !navBarRef.current.contains(e.target)){
            toggleNavMenu()
         }
    }
  
    useEffect(()=>{
      document.addEventListener('mousedown', handleOutSideClick)
  
      return ( ) =>{
        document.removeEventListener('mousedown', handleOutSideClick)
      }
    }, [])

  return (
    <ul  className={navSectionStyle} ref={navBarRef}>

    {navlinks && navlinks.map((item)=>{
        return (
          <Link to={item.url_Link}  key={item.id}> 
             <li >  
               <button className={buttonStyle} >
                {item.title} 
              </button>
             </li>
          </Link>
        )
    })}

 </ul>
  )
}

export default NavSideBar