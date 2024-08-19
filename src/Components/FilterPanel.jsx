import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import  { filteredRestaurantCards} from '../features/restaurantSlice'
 import {filterItems} from '../utils/contanst'
 import { useDispatch } from 'react-redux';




const FilterPanel = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();

  const handleFilters = (filterQuery) =>{
    //  if(filterQuery === "default") return;
     console.log(filterQuery)
     dispatch( filteredRestaurantCards(filterQuery))       
  }

  return (
    <div className='w-screen h-[120px] md:flex flex-row  justify-between md:items-center pt-3 px-10'>

        <div className='flex items-center my-2 ml-4 md:my-0 md:ml-0'>
           <input 
           type="text" 
           onChange={(e)=>setQuery(e.target.value)}
           placeholder='Search for nearby restaurants'
           className='p-2 rounded-md border-2 border-purple-700 w-64 '
           />

         <button className='ml-2 py-2 px-4  bg-purple-500 text-2xl rounded-md text-white font-bold outline-none'> 
          <CiSearch />
         </button>
        </div>
        
       <div className='w-full md:ml-0 flex justify-center items-center gap-2'>
        <label htmlFor="11ce" className='font-bold text-teal-500'>Sort By :</label>
           <select name="filters" id="11ce" className="md:w-[200px] w-[100px] bg-purple-400 rounded-md p-1 text-white md:mr-10"
              onChange={(e)=> handleFilters(e.target.value)}
           >
             {filterItems.map((item) => (
               <option 
                 value={item.value} 
                 key={item.id}
                 > 
                 {item.value}
                </option>
             ))}
           </select>
       </div>
    </div>
  )
}

export default FilterPanel