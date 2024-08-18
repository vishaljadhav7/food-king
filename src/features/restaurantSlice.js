import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading"
});


const initialState = {
   status : STATUSES.IDLE,
   allRestaurants : [],
   filteredRestaurants : []
};

export const fetchRestaurants = createAsyncThunk('fetchRes', async (RESTAURANT_MENU_API)=> {

  try{

     const response = await fetch(RESTAURANT_MENU_API);

     const jsonData = await response.json();

      const parsed_Response = await JSON?.parse(jsonData.contents);

      const allCards = parsed_Response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      return allCards;

    } catch(error) {
     return error;
    }
})


const restaurantSlice = createSlice({
    name : "restaurants",
    initialState,
    extraReducers : (builder) =>{
         builder
         
         .addCase(fetchRestaurants.pending, (state) => {
             state.status = STATUSES.LOADING;
         })
         
         .addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.allRestaurants = action.payload;
            state.filteredRestaurants = action.payload;
            state.status = STATUSES.IDLE;
         })

         .addCase(fetchRestaurants.rejected, (state, action) => {
            // console.log(action.payload)
            state.status = STATUSES.ERROR;
         })
    }
})


export default restaurantSlice.reducer;