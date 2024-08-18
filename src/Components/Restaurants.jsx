import React from 'react'
import { useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';


const Restaurants = () => {   
  const restaurantState = useSelector((store) => (store.restaurant));
  
  const {filteredRestaurants} = restaurantState;
  console.log(filteredRestaurants)
   
  return (
    <div className='p-2 m-2 flex flex-wrap justify-center'>
      { filteredRestaurants.length && filteredRestaurants.map((restaurantItem)=> { 
        const resId = restaurantItem.info.id;
        
          return (
          <Link to={`/restaurants/${resId}`} key={resId}> 
            <RestaurantCard resData={restaurantItem} />
          </Link>
        )
      }
      )}
    </div>
  )
}

export default Restaurants


/*
<Link to={/restaurants/:${resId}`} key=resId}> 
  <RestaurantCard key={resId} resData={restaurantItem}/>
</Link>

*/