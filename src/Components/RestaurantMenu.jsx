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
      <div >

    <div className='w-screen '>
       { restaurantListCards.length &&  <div className="flex basis-full h-60 justify-evenly items-center p-8 bg-blue-950">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px] rounded-lg object-cover"
          src={IMG_URL + restaurantListCards[2]?.card?.card?.info?.cloudinaryImageId}

          alt={name}
        />

        <div className="flex flex-col basis-[540px] m-5 text-white">
          <h2 className="md:text-3xl max-w-[538px] font-semibold text-white">
            {name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px] text-white">
            {cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1 ">
              <AiFillStar />
              <span >{avgRating}</span>
            </div>
            <div className='ml-1 md:ml-0 font-semibold text-2xl md:text-1xl'>|</div>
            <div className='ml-3 md:ml-0'>{costForTwoMessage}</div>
          </div>
        </div>
      </div>}

      <div className='text-center mt-2 px-4'>

         { categories.length && categories.map((category, idx)=> (
           <CategorySection 
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={showItems}
            index = {idx}
            accordionId={accordionId}
           />
         ))}

      </div>

    </div>
      </div>
  )
}

export default RestaurantMenu;