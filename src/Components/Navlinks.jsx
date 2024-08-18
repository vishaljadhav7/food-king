import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = ({navlinks, classStyle}) => {
  return (
     <ul  className={classStyle}>

        {navlinks && navlinks.map((item)=>{
            return (
              <Link to={item.url_Link}  key={item.id}> 
                 <li >  
                   <button className='bg-blue-500 text-white p-2 rounded-lg'>
                    {item.title}
                  </button>
                 </li>
              </Link>
            )
        })}

     </ul>
  )
}

export default Navlinks