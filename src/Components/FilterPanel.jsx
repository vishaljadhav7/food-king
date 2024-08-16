import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
// import {filters} from '../utils/contanst'




const FilterPanel = () => {
  const [query, setQuery] = useState('')

  return (
    <div className='h-14 flex justify-center items-center p-2 m-2'>
        <div className='flex items-center justify-center'>
           <input 
           type="text" 
           onChange={(e)=>setQuery(e.target.value)}
           placeholder='Search for nearby restaurants'
           className='p-2 rounded-md border-2 border-purple-700 w-64'
           />

         <button className='ml-4 py-2 px-4  bg-purple-500 text-2xl rounded-md text-white font-bold outline-none'> 
          <CiSearch />
         </button>
        </div>

    </div>
  )
}

export default FilterPanel