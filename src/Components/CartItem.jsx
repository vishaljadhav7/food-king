import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addItem, decrementItem, removeItem}  from '../features/cartSlice'
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const CartItem = ({data}) => {
    const dispatch = useDispatch()
    const totalPrice = Math.floor((data.cartQuantity * data.defaultPrice)/100)
    console.log(totalPrice, typeof data.defaultPrice, typeof data.cartQuantity)
     const handleRemoveItem = () => {
        dispatch(removeItem(data.id))
     }

     const handleAddItem = () =>{
        dispatch(addItem(data))
     }

     const handleDecreaseItem = ( ) =>{
        dispatch(decrementItem(data))
     }

    return (
           <div className= "flex h-32 justify-between border-b-2 border-purple-400 mb-5">
               <div className='w-18 flex  mb-3 gap-4'>
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ data.imageId} alt="" className='w-2/6 hidden md:block' /> 
               <div className='w-[100px]'>
                   <h3 className='font-semibold md:text-[13px] md:w-60'>{data.name}</h3>
                    <button onClick={() => handleRemoveItem()}><FaTrash /></button>
               </div>
             </div>
  
              <div className='font-semibold text-1xl md:-ml-64 text-center'>
                  
                  <h3>{data.defaultPrice/100}/-</h3>
              </div> 
    
                <div className='md:flex flex-col items-center justify-center text-[18px] md:-mt-22 text-center gap-3 ml-8 md:-ml-8'>
                   <button 
                   className='p-1 bg-teal-300 text-white font-semibold rounded-md'
                    onClick={()=>handleAddItem()}
                   >
                    <FaPlus /> 
                  </button>

                   <h3 className='font-semibold'>{data.cartQuantity}</h3>
                
                   <button 
                   className='p-1 bg-teal-300 text-white font-semibold rounded-md'
                    onClick={()=>handleDecreaseItem()}
                   >
                    <FaMinus /></button>
                </div>
                <div className='font-semibold text-1xl'>
                  <h4> {totalPrice} /-</h4>
                </div>
            </div>
    
    )
  }

export default CartItem