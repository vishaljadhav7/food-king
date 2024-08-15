import React from 'react'

const Navlinks = ({navlinks, classStyle}) => {
  return (
     <ul  className={classStyle}>

        {navlinks && navlinks.map((item)=>{
            return (
            <li key={item.id}>
                <a href={item.url_Link}>{item.title}</a>
            </li>)
        })}

     </ul>
  )
}

export default Navlinks