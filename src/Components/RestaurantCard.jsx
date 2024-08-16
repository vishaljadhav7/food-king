import {CARD_CDN_URL} from '../utils/contanst'

const RestaurantCard = ({resData}) => {
   
  // console.log(resData);

    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData.info;

    // console.log( cloudinaryImageId ,  name, avgRating, cuisines, costForTwo,  deliveryTime)
  
    return (
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded   transition-all duration-700 hover:scale-110 "
      >
        <img
          className="rounded-lg h-[150px] w-[100%] object-cover"
          alt="res-logo"
          src={CARD_CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        
        {/* <h4>{avgRating} stars</h4> */}
        <div className="flex items-center h-5 w-11 gap-1 py-0 px-1 style={buttonStyle} mb-1" >
             <span>{avgRating}</span>
            </div>
             <div className="text-opacity-0">
             <h4 >{cuisines.join(", ")}</h4>
             </div>
          
        {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
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