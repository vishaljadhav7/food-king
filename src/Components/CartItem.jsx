import React from 'react'
import {useSelector} from 'react-redux'
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const CartItem = ({data}) => {
    console.log(data)
    const totalPrice = Math.floor((data.cartQuantity * data.defaultPrice)/100)
    return (
           <div className= "flex  h-32 justify-between border-b-2 border-purple-400 mb-5">
               <div className='w-18 flex  mb-3 gap-4'>
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ data.imageId} alt="" className='hidden md:block' /> 
               <div className='w-[100px]'>
                   <h3 className='font-semibold text-1xl'>{data.name}</h3>
                    <button><FaTrash /></button>
               </div>
             </div>
  
              <div className='font-semibold text-1xl md:-ml-48 text-center'>
                  
                  <h3>{data.defaultPrice/100}/-</h3>
              </div> 
    
                <div className='md:flex flex-col items-center justify-center text-[18px] md:-mt-22 text-center gap-3 ml-8 md:-ml-8'>
                   <button className='p-1 bg-teal-300 text-white font-semibold rounded-md'><FaPlus /> </button> 
                   <h3 className='font-semibold'>{data.cartQuantity}</h3>
                
                   <button className='p-1 bg-teal-300 text-white font-semibold rounded-md'><FaMinus /></button>
                </div>
                <div className='font-semibold text-1xl'>
                  <h4> {totalPrice} /-</h4>
                </div>
            </div>
    
    )
  }

export default CartItem