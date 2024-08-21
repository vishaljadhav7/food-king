import { useEffect, useState } from "react";


const STATUSES = {
    IDLE : "idle",
    LOADING : "loading",
    ERROR : "error"
}


function useInstaMartList(instaMartId){
    
    const [allInstaMartListData, setAllInstaMartListData] = useState({})
    const [status, setStatus] = useState('idle');
      async function getLists() {
        try {
            setStatus(STATUSES.LOADING)
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.swiggy.com/api/instamart/category-listing?categoryName=${instaMartId}&storeId=911032&offset=0&filterName=&taxonomyType=All%20Listing`)}`);
            const jsonResponse = await response.json();
            const parsedData  = await JSON.parse(jsonResponse.contents)  
            setAllInstaMartListData(parsedData.data);
            setStatus(STATUSES.IDLE)
        } catch (error) {
            setStatus(STATUSES.ERROR);
        }
      }

    useEffect(()=>{
      getLists();
    }, [])  

    return {status, allInstaMartListData}
}


export default useInstaMartList;