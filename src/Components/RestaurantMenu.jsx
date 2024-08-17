import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantList from '../utils/useRestaurantList';

const RestaurantMenu = () => {
 const {resId} = useParams();
 
 const {restaurantListCards, status} = useRestaurantList(resId)
  
 console.log(restaurantListCards.length && restaurantListCards[2]?.card.card.info.name, " line 14 resMeny")

 if(status === 'loading'){
  return <Shimmer/>
 }

  return (
    <div>RestaurantMenu with id {resId} </div>
  )
}

export default RestaurantMenu;