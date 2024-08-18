import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from '../features/restaurantSlice'
import listReducer from '../features/listSlice'
import cartReducer from '../features/cartSlice';
import instaMartReducer from '../features/instaMartSlice';

const myStore = configureStore({
    reducer : {
        restaurant : restaurantReducer,
        list: listReducer,
        cart : cartReducer,
        instaMart : instaMartReducer
    }
})


export default myStore;