import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { INSTA_MART_API } from "../utils/contanst";


const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading"
});


const initialState = {
   status : STATUSES.IDLE,
   allInstaMartCards : [],
   filteredInstaMartCards : []
};


export const fetchInstaMartCards = createAsyncThunk('fetchInstaCard', async () => {
   try {
     const response = await fetch(INSTA_MART_API);
     const jsonData = await response.json();
     const parsed_Response = await JSON?.parse(jsonData.contents);
     const allCards = parsed_Response.data.widgets[1].data;
     return allCards; 
   } catch (error) {
    console.log(error)
   }
})


const instaMartSlice = createSlice({
    name : "instamart",
    initialState,
    extraReducers : (builder) => {
        builder 

        .addCase(fetchInstaMartCards.pending, (state)=>{
             state.status = STATUSES.LOADING;   
        })

        .addCase(fetchInstaMartCards.fulfilled, (state, action)=>{
            state.allInstaMartCards = action.payload;
            state.filteredInstaMartCards = action.payload;
            state.status = STATUSES.IDLE;
        })

        .addCase(fetchInstaMartCards.rejected, (state)=>{
            state.status = STATUSES.ERROR;   
        })
    }
})



export default instaMartSlice.reducer;




