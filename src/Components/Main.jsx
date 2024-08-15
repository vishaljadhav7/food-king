import React from 'react'
import Shimmer from './Shimmer'
import FilterPanel from './FilterPanel'
import Restaurants from './Restaurants'

const Main = () => {
  return (

    <div className='w-full  bg-green-400 overflow-hidden'>
         <FilterPanel/>
        {/* <Shimmer/> */}
         <Restaurants/> 
    </div>
  )
}

export default Main