import React from 'react'
import { useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';


const Restaurants = () => {   
  const restaurantState = useSelector((store) => (store.restaurant));
  
  const {filteredRestaurants} = restaurantState;
   
  return (
    <div className='p-2 m-2 flex flex-wrap justify-center'>
      {filteredRestaurants.map((restaurantItem)=> 
       (
        <RestaurantCard key={restaurantItem.info.id} resData={restaurantItem}/>
       )
      )}
    </div>
  )
}

export default Restaurants