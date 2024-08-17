import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name : 'list',
    initialState : {
        cachedLists : []
    },
    reducers : {
        addList : (state, action) => {
           state.cachedLists = [
             ...state.cachedLists,
             {
                id : action.payload.newId,
                cards : action.payload.newCards
             }
           ]  
        }
    }
})

export const {addList} = listSlice.actions

export default listSlice.reducer