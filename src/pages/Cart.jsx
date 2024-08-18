// import React from 'react'
// import CARTIMG from '../assets/cart.webp'
// import CartItem from '../Components/CartItem';
// import {useSelector} from 'react-redux'





// const Cart = () => {
//   const cartItems = useSelector((state)=> (state.cart.items))
//   console.log("sadasdasd")
//   return (
//      <div className='w-11/12 p-4  mx-auto'>
//        {cartItems.length > 0 ? 
//           (
//           <div className=' mt-10 '>
//               <div className='w-12/12 flex justify-between h-full  border-b-[5px] border-teal-300 my-2'>
//                 <h3 className=' text-2xl text-center'>Product</h3>
//                 <h3 className=' text-2xl text-center'>Price</h3>
//                 <h3 className=' text-2xl text-center'>Quantity</h3>
//                 <h3 className=' text-2xl text-center'>Total</h3>
//               </div>
//               <div className='cart-items mt-4'> 
//                 {cartItems.length && 
//                   cartItems.map((item) => {
//                     return (<CartItem key={item.id} data={item}/>)
//                  })
//                 } 
//               </div>
//           </div>
//         )
//         :
//         (<div className='w-full text-center flex flex-col  items-center justify-center md:h-[512px] h-[550px]'>
//           <h1 className='my-2 font-semibold text-2xl text-teal-500'>No items in the cart shop now!</h1>
//           <img src={CARTIMG} alt=""  className='mb-2 w-[300px]  object-cover '/>
//            </div>)
//       }
//      </div>
//   )
// }

// export default Cart


import React from 'react';
import CARTIMG from '../assets/cart.webp';
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='w-11/12 p-4 mx-auto'>
      {cartItems.length > 0 ? (
        <div className='mt-10'>
          <div className='w-full flex justify-between h-full border-b-[5px] border-teal-300 my-2'>
            <h3 className='text-2xl text-center'>Product</h3>
            <h3 className='text-2xl text-center'>Price</h3>
            <h3 className='text-2xl text-center'>Quantity</h3>
            <h3 className='text-2xl text-center'>Total</h3>
          </div>
          <div className='cart-items mt-4'>
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className='w-full text-center flex flex-col items-center justify-center md:h-[512px] h-[550px]'>
          <h1 className='my-2 font-semibold text-2xl text-teal-500'>No items in the cart, shop now!</h1>
          <img src={CARTIMG} alt="Empty Cart" className='mb-2 w-[300px] object-cover' />
        </div>
      )}
    </div>
  );
};

export default Cart;
