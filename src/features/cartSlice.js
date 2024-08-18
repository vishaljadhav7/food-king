import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : []
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem : (state, action) => {
            const itemIdx = state.items.findIndex((item) => { 
              return  (item.id === action.payload.id)
            });
            if(itemIdx >= 0){
                state.items[itemIdx].cartQuantity += 1;
            }else{
                const temp = {...action.payload, cartQuantity : 1};
                state.items.push(temp);
            }
        },

        removeItem : (state, action) => {
            const filteredItems = state.items.filter((item)=>{
                return item.id !== action.payload.id
            });

            state.items = filteredItems;
        },    
        
        decrementItem : (state, action) => {
            const itemIdx = state.items.findIndex((item) => { 
                return  (item.id === action.payload.id)
              });
            if(state.items[itemIdx].cartQuantity > 1){
                state.items[itemIdx].cartQuantity -=1;
            } else if(state.items[itemIdx].cartQuantity){
                const filteredItems = state.items.filter((item)=>{
                    return item.id !== action.payload.id
                });
    
                state.items = filteredItems;
            } 
        },
        
        clearCart : (state, action) => {
            state.items = []
        }
    }
})


export default cartSlice.reducer;

export const {addItem} = cartSlice.actions