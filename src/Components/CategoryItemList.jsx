import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addItem } from '../features/cartSlice';


const CategoryItemList = ({items}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items);
  // console.log(cartItems) 

  const handleAdd = (item) => {
   dispatch(addItem(item.card.info))
  }

  return (
    <div className=''>
        { items.length && items.map((item) => 
         (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between relative w-full my-2"
        >
            <div className='w-8/12 mr-3 p-2'>
               <h2 className='font-semibold'> {item.card.info.name}</h2>
                <h3 className='font-medium'> - ₹ {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}/-</h3> 
               <p>{item.card.info.description}</p>
            </div>

            <div className='w-1/3  flex flex-col justify-center items-center p-2'>
               <div  className='w-full md:w-1/2'>
               <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.card.info.imageId} className="w-full rounded-lg object-cover " />
               </div>
               <button  className="p-1 shadow-lg w-14 rounded-lg bg-orange-500 hover:bg-orange-700 text-white font-bold border border-orange-700"
                onClick={() => handleAdd(item) }
               >
                Add
              </button>
            </div>
        </div>
      ))
    }
    </div>
  )
}

export default CategoryItemList



/*
name : item.card.info.name

for price : 
           - ₹
                {item.card.info.price
                 { ? item.card.info.price / 100}
                  : item.card.info.defaultPrice / 100}
<img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.card.info.imageId} className="w-full rounded-lg object-cover" />

 className="p-1 shadow-lg w-14 rounded-lg bg-orange-500 hover:bg-orange-700 text-white font-bold border border-orange-700" 

   desc :     item.card.info.description          
"https://media-assets.swiggy.com/swiggy/image/upload/"
 item.card.info.imageId
*/