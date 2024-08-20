import React, { useState } from 'react'

const Expandable = ({children}) => {

 const [expand, setExpand] = useState(false)   
    
 if(children.length <= 100) return <p>{children}</p>

 const text =  expand ?  children : children.substring(0,100) 

 
  return (
     <p>{text}   <span className='px-2 bg-black cursor-pointer rounded-sm text-white' onClick={()=>setExpand(!expand)}>{expand ? 'less' : 'more'}</span>  </p>   

  )
}

export default Expandable