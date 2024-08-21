

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
});

const initialState = {
    status: STATUSES.IDLE,
    allRestaurants: [],
    filteredRestaurants: []
};

export const fetchRestaurants = createAsyncThunk('fetchRes', async (RESTAURANT_MENU_API) => {
    try {
        const response = await fetch(RESTAURANT_MENU_API);
        const jsonData = await response.json();
        const parsed_Response = JSON?.parse(jsonData.contents);
        const allCards = parsed_Response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return allCards;
    } catch (error) {
        return error;
    }
});

const getComparator = (type) => {
    switch (type) {
        case "delivery time":
            return (a, b) => a?.info.sla?.deliveryTime - b?.info.sla?.deliveryTime;
        case "high ratings+":
            return (a, b) => b?.info.avgRating - a?.info.avgRating;
        case "low to high (costForTwo)":
            return (a, b) => parseInt(a.info.costForTwo.match(/\d+/)[0], 10) - parseInt(b.info.costForTwo.match(/\d+/)[0], 10);
        case "high to low (costForTwo)":
            return (a, b) => parseInt(b.info.costForTwo.match(/\d+/)[0], 10) - parseInt(a.info.costForTwo.match(/\d+/)[0], 10);
        default:
            return null;
    }
};

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.allRestaurants = action.payload;
                state.filteredRestaurants = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchRestaurants.rejected, (state) => {
                state.status = STATUSES.ERROR;
            });
    },
    reducers: {
        filteredRestaurantCards: (state, action) => {
  
            const { payload } = action;

            if (payload === "default") {
                state.filteredRestaurants = state.allRestaurants;
                return;
            }

            const comparator = getComparator(payload);

            if (comparator) {
                const sortedRestaurants = [...current(state.allRestaurants)].sort(comparator);
                state.filteredRestaurants = sortedRestaurants;
            }
        }
    }
});

export default restaurantSlice.reducer;
export const { filteredRestaurantCards } = restaurantSlice.actions;
