import React from 'react'

import RestaurantCard from './RestaurantCard';


const Restaurants = ({allRestaurants, filteredRestaurants}) => {   
   
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