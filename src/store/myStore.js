import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from '../features/restaurantSlice'
import listReducer from '../features/listSlice'
import cartReducer from '../features/cartSlice';

const myStore = configureStore({
    reducer : {
        restaurant : restaurantReducer,
        list: listReducer,
        cart : cartReducer,
    }
})


export default myStore;