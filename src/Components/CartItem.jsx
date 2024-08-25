import React from 'react'
import {useDispatch} from 'react-redux'
import {addItem, decrementItem, removeItem}  from '../features/cartSlice'
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


// const CartItem = ({data}) => {

     
//     const dispatch = useDispatch()
//     const totalPrice = Math.floor((data.cartQuantity  *( data.defaultPrice || data.price))/100)

//      const handleRemoveItem = () => {
//         dispatch(removeItem(data.id))
//      }

//      const handleAddItem = () =>{
//         dispatch(addItem(data))
//      }

//      const handleDecreaseItem = ( ) =>{
//         dispatch(decrementItem(data))
//      }

//     return (
//            <div className= "flex h-32 justify-between border-b-2 border-purple-400 mb-5">
//                <div className='w-18 flex  mb-3 gap-4'>
//                   <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ data.imageId} alt="" className='w-2/6 hidden md:block' /> 
//                <div className='w-[100px] '>
//                    <h3 className='font-semibold md:text-[13px] md:w-60'>{data.name}</h3>
//                     <button onClick={handleRemoveItem}><FaTrash /></button>
//                </div>
//              </div>
  
//               <div className='font-semibold text-1xl md:-ml-64 text-center'>
                  
//                   <h3>{(data.defaultPrice || data.price)/100}/-</h3>
//               </div> 
    
//                 <div className='md:flex flex-col items-center justify-center text-[18px] md:-mt-22 text-center gap-3 ml-8 md:-ml-8'>
//                    <button 
//                    className='p-1 bg-teal-300 text-white font-semibold rounded-md'
//                     onClick={handleAddItem}
//                    >
//                     <FaPlus /> 
//                   </button>

//                    <h3 className='font-semibold'>{data.cartQuantity}</h3>
                
//                    <button 
//                    className='p-1 bg-teal-300 text-white font-semibold rounded-md'
//                     onClick={handleDecreaseItem}
//                    >
//                     <FaMinus /></button>
//                 </div>
//                 <div className='font-semibold text-1xl'>
//                   <h4> {totalPrice} /-</h4>
//                 </div>
//             </div>
    
//     )
//   }

const CartItem = ({ data }) => {
   const dispatch = useDispatch();
   const totalPrice = Math.floor((data.cartQuantity * (data.defaultPrice || data.price)) / 100);
 
   const handleRemoveItem = () => {
     dispatch(removeItem(data.id));
   };
 
   const handleAddItem = () => {
     dispatch(addItem(data));
   };
 
   const handleDecreaseItem = () => {
     dispatch(decrementItem(data));
   };
 
   return (
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b-2 border-gray-300 pb-4 md:pb-2">
  <div className="col-span-2 flex items-center gap-4">
    <img
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.imageId}
      alt={data.name}
      className="w-20 h-20 object-cover md:w-24 md:h-24"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-sm md:text-base">{data.name}</h3>
      <button
        onClick={handleRemoveItem}
        className="mt-2 text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  </div>

  <div className="text-center font-semibold text-lg md:text-base">
    <h3 className="md:hidden inline-block text-purple-400 md:text-black mr-2 md:mr-0">Price: </h3>
    <h3 className="inline">{(data.defaultPrice || data.price) / 100}/-</h3>
  </div>

  <div className="flex items-center justify-center gap-2 md:gap-3">
    <button
      className="p-1 bg-teal-300 text-white font-semibold rounded-md"
      onClick={handleAddItem}
    >
      <FaPlus />
    </button>
    <h3 className="font-semibold text-lg md:text-base">
      <span className="md:hidden text-purple-400 md:text-black mr-2 md:mr-0">Quantity: </span>{data.cartQuantity}
    </h3>
    <button
      className="p-1 bg-teal-300 text-white font-semibold rounded-md"
      onClick={handleDecreaseItem}
    >
      <FaMinus />
    </button>
  </div>

  <div className="text-center font-semibold text-lg md:text-base ">
    <h3 className="md:hidden inline-block text-purple-400 md:text-black mr-2 md:mr-0">Total Price: </h3>
    <h4 className="inline">{totalPrice}/-</h4>
  </div>
</div>

   );
 };
export default CartItem