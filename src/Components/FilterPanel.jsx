import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import  { filteredRestaurantCards} from '../features/restaurantSlice'
import {filterItems} from '../utils/contanst'
import { useDispatch } from 'react-redux';
import {searchItem} from '../features/restaurantSlice'


const FilterPanel = () => {

  const [query, setQuery] = useState('')
  const dispatch = useDispatch();

  const handleFilters = (filterQuery) =>{

     dispatch( filteredRestaurantCards(filterQuery))       
  }

  const handleSearch = (sQuery) => {
     dispatch(searchItem(sQuery.toLowerCase()))
  }

  return (
   <div className="w-screen h-[120px] grid grid-cols-1 md:grid-cols-2 pt-3 gap-4">
  <div className="flex items-center justify-center px-4 md:px-0">
    <input 
      type="text" 
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for nearby restaurants"
      className="p-2 rounded-lg border border-gray-300 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
    />
    <button 
      className="ml-2 py-2 px-4 bg-purple-600 text-white text-xl rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 ease-in-out" 
      onClick={() => handleSearch(query)}
    >
      <CiSearch />
    </button>
  </div>

  <div className="flex justify-center items-center gap-2 px-4 md:px-0">
    <label htmlFor="sortBy" className="font-semibold text-gray-700 md:text-base text-sm">Sort By:</label>
    <select 
      name="filters" 
      id="sortBy" 
      className="md:w-48 w-36 bg-white border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
      onChange={(e) => handleFilters(e.target.value)}
    >
      {filterItems.map((item) => (
        <option value={item.value} key={item.id}>
          {item.value}
        </option>
      ))}
    </select>
  </div>
</div>

  )
}

export default FilterPanel