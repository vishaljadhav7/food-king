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
        className="m-4 p-4 md:w-[250px] rounded w-[160px]   transition-all duration-700 hover:scale-110 cursor-pointer"
      >
        <img
          className="rounded-lg md:h-[150px] h-[120px] w-[100%] object-cover"
          alt="res-logo"
          src={CARD_CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        
        <div className="flex items-center h-5 w-11 gap-1  py-0 px-1 mb-1" >
          <span>{avgRating}</span> 
          <CiStar/> 
        </div>
        
        <div className="text-opacity-0 ">
          <h4>{cuisinesText}</h4>
        </div>
          
        <h4>{costForTwo}</h4>
        {/* <h4>{deliveryTime} minutes</h4> */}
        {/* <h4>User : {loggedInUser} </h4> */}
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