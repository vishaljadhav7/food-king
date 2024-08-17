import React, { useEffect } from 'react'
import FilterPanel from './FilterPanel'
import Restaurants from './Restaurants'
import { RESTAURANT_MENU_API } from '../utils/contanst'
import Shimmer from './Shimmer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchRestaurants } from '../features/restaurantSlice'

const Main = () => {
  // const {allRestaurants, filteredRestaurants, isLoading} =  useRestaurants(); // 
  const dispatch = useDispatch()
  const restaurantState = useSelector((store) => (store.restaurant));
  const {status, allRestaurants, filteredRestaurants} = restaurantState;

  useEffect(()=>{
    if(allRestaurants.length > 0){
     console.log("need not to fetch");
    }else{
      console.log("need  to fetch");
      dispatch(fetchRestaurants(RESTAURANT_MENU_API))
    }
  }, []) 

  
  if(status === "loading"){
    return <Shimmer/>;
  }

  return (

    <div className='w-full  overflow-hidden'>
         <FilterPanel/>
         <Restaurants/> 
    </div>
  )
}

export default Main