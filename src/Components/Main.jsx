import React from 'react'
import FilterPanel from './FilterPanel'
import Restaurants from './Restaurants'
import { useRestaurants } from '../utils/useRestuarants'
import Shimmer from './Shimmer'

const Main = () => {
  const {allRestaurants, filteredRestaurants, isLoading} =  useRestaurants(); // 
  
  if(isLoading){
    return <Shimmer/>;
  }

  return (

    <div className='w-full  overflow-hidden'>
         <FilterPanel/>
         <Restaurants allRestaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/> 
    </div>
  )
}

export default Main