import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RESTAURANT_LIST_API } from '../utils/contanst';

const RestaurantMenu = () => {
 const {resId} = useParams();
 
 async function getResList(){
   
    const response = await fetch(RESTAURANT_LIST_API + resId);
    const jsonResponse = await response.json();
    const parsedData  = await JSON.parse(jsonResponse.contents)
    console.log(parsedData)
 }

 useEffect(()=>{
   getResList()
 }, [])

  return (
    <div>RestaurantMenu with id {resId} </div>
  )
}

export default RestaurantMenu;