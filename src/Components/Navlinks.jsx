import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navlinks = ({navlinks, classStyle}) => {
  const cartItems = useSelector((state)=>(state.cart.items))
  const totalItems = cartItems.length
  console.log(totalItems)
  return (
     <ul  className={classStyle}>

        {navlinks && navlinks.map((item)=>{
            return (
              <Link to={item.url_Link}  key={item.id}> 
                 <li >  
                   <button className='bg-blue-500 text-white p-2 rounded-lg'>
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