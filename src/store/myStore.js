import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from '../features/restaurantSlice'
import listReducer from '../features/listSlice'

const myStore = configureStore({
    reducer : {
        restaurant : restaurantReducer,
        list: listReducer
    }
})


export default myStore;