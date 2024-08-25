import {CARD_CDN_URL} from '../utils/contanst'
import { CiStar } from "react-icons/ci";


const RestaurantCard = ({resData}) => {
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData.info;

    // console.log( cloudinaryImageId ,  name, avgRating, cuisines, costForTwo,  deliveryTime)

    const cuisinesText = cuisines.length <= 2 ? cuisines.join(',') : cuisines.slice(0,2).join(',')

  
    return (
<div
  data-testid="resCard"
  className="m-4 p-4 md:w-[260px] w-[160px] rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 cursor-pointer"
>
  <img
    className="rounded-lg md:h-[160px] h-[120px] w-full object-cover"
    alt="res-logo"
    src={CARD_CDN_URL + cloudinaryImageId}
  />
  <h3 className="font-bold py-2 text-md md:text-lg text-gray-800 truncate">{name}</h3>
  
  <div className="flex items-center gap-1 text-yellow-500 text-sm">
    <CiStar />
    <span>{avgRating}</span> 
  </div>
  
  <div className="text-sm text-gray-500 mt-1 truncate">
    <h4>{cuisinesText}</h4>
  </div>
    
  <h4 className="text-sm font-semibold text-gray-700 mt-2">{costForTwo}</h4>
</div>

    );
  };
  
  
  
  // export const withPromtedLabel = (RestaurantCard) => {
  //   return (props) => {
  //     return (
  //       <div>
  //         <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
  //           Promoted
  //         </label>
  //         <RestaurantCard {...props} />
  //       </div>
  //     );
  //   };
  // };
  
  export default RestaurantCard;