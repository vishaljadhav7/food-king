import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantList from '../utils/useRestaurantList';
import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from '../utils/contanst';
import CategorySection from './CategorySection';

const RestaurantMenu = () => {

 const {resId} = useParams();
 
 const {restaurantListCards, status} = useRestaurantList(resId)

 const  [accordionId, setAccordionId] = useState(null) 

 const showItems = (newId) => {
  setAccordionId((prevId) => {
     return prevId === newId ? null : newId
  });
}

const { name, cuisines, costForTwoMessage , avgRating} =
restaurantListCards.length && restaurantListCards[2]?.card?.card?.info;


const categories = restaurantListCards.length &&  restaurantListCards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
 (c) =>
   c.card?.["card"]?.["@type"] ===
   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


if(status === 'loading'){
  return <Shimmer/>
 }


  return (
    <div className="w-screen ">
    {restaurantListCards.length && (
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center p-8 bg-blue-900 rounded-lg shadow-lg">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:h-[81px] rounded-lg object-cover"
          src={IMG_URL + restaurantListCards[2]?.card?.card?.info?.cloudinaryImageId}
          alt={name}
        />
  
        <div className="flex flex-col md:basis-[540px] m-5 text-white text-center md:text-left">
          <h2 className="md:text-3xl text-2xl font-semibold text-white mb-2">
            {name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] text-white max-w-full md:max-w-[538px]">
            {cuisines.join(", ")}
          </p>
          <div className="flex justify-center md:justify-between items-center text-sm font-semibold mt-5 space-x-4 md:space-x-0 text-white">
            <div className="flex items-center gap-1">
              <AiFillStar />
              <span>{avgRating}</span>
            </div>
            <div className="hidden md:inline-block font-semibold text-xl">|</div>
            <div>{costForTwoMessage}</div>
          </div>
        </div>
      </div>
    )}
  
    <div className="text-center mt-4 px-4">
      {(categories?.length > 0) &&
        categories.map((category, idx) => (
          <CategorySection
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showItems}
            index={idx}
            accordionId={accordionId}
          />
        ))}
    </div>
  </div>
  
  
  )
}

export default RestaurantMenu;