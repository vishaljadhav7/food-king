import {RESTAURANT_MENU_API} from './contanst'
import { useState, useEffect } from 'react';

export function useRestaurants(){
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    // const [] = useState()

    useEffect(()=>{
      getData();
    }, [])
  
    async function getData( ) {
      setIsLoading(true);
      try {  
      const response = await fetch(RESTAURANT_MENU_API);
      const jsonData = await response.json();
      const parsed_Response = await JSON?.parse(jsonData.contents);
      const allCards = parsed_Response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(allCards);
      setFilteredRestaurants(allCards);
      setIsLoading(false);

      } catch (error) {
        console.log(error)
      }

     }
   
     return {
      allRestaurants, filteredRestaurants, isLoading
  }

  
}