import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navlinks = ({navlinks, navSectionStyle , buttonStyle, toggleNavMenu}) => {
  const cartItems = useSelector((state)=>(state.cart.items))
  const totalItems = cartItems.length

  return (
     <ul  className={navSectionStyle} >

        {navlinks && navlinks.map((item)=>{
            return (
              <Link to={item.url_Link}  key={item.id}> 
                 <li >  
                   <button className={buttonStyle} >
                    {item.title} {item.title == "Cart" ? totalItems : null}
                  </button>
                 </li>
              </Link>
            )
        })}

     </ul>
  )
}

export default Navlinks