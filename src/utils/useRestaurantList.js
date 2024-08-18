import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import {RESTAURANT_LIST_API} from '../utils/contanst'
import { addList } from "../features/listSlice";

const STATUSES = {
    IDLE : "idle",
    LOADING : "loading",
    ERROR : "error"
}



 function useRestaurantList(resId){
    const dispatch = useDispatch();
    const {cachedLists} = useSelector((state)=> state.list)

    const [restaurantListCards, setRestaurantsListCards] = useState([]);
    const [status, setStatus] = useState('idle');


    async function getListCards(resId){
        try {
            setStatus(STATUSES.LOADING)
            // console.log("n/w call is running ")
            const response = await fetch(RESTAURANT_LIST_API + resId);
            const jsonResponse = await response.json();
            const parsedData  = await JSON.parse(jsonResponse.contents)
            const allCards = parsedData?.data?.cards;
            dispatch(addList({
                newId : resId,
                newCards : allCards
            })) 
            setRestaurantsListCards(allCards);
            setStatus(STATUSES.IDLE) 
        } catch (error){ 
            setStatus(STATUSES.ERROR);
        }
    }

    useEffect(()=>{
        if(cachedLists.length > 0){
            const idx = cachedLists.findIndex((item)=>{
                return item.id == resId 
            })
            if(idx > -1){
                setRestaurantsListCards(cachedLists[idx].cards)
                setStatus(STATUSES.IDLE)
            }  else{
                getListCards(resId);
            } 
            return;
        }else{
            getListCards(resId);
        } 
    }, [])

    return {restaurantListCards, status};
}

export default useRestaurantList;


