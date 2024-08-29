import React, { useEffect} from 'react'
import { fetchInstaMartCards } from '../features/instaMartSlice'
import { useSelector, useDispatch } from 'react-redux';
import Shimmer from '../Components/Shimmer'
import InstaMartCard from '../Components/InstaMartCard'
import { Link } from 'react-router-dom';

const InstaMart = () => {
   const dispatch = useDispatch();
   const {status ,filteredInstaMartCards} = useSelector((state) => (state.instaMart))


  useEffect(()=>{
    if(filteredInstaMartCards.length > 0){
      // console.log("not fetching instamart cards")
    }else{
      console.log("fetching instamart cards")
      dispatch(fetchInstaMartCards())   
    }
  }, [])

if(status === "loading"){
  return <Shimmer/>
}

  return (
     <div className=' bg-slate-300 p-5'>
      <h1 className='mb-5 text-center text-2xl font-bold'>Shop by Category!</h1>
      <div className='w-screen min-h-screen grid md:grid-cols-5 grid-cols-2 gap-3 place-items-center '>     
       {filteredInstaMartCards?.length && 
        filteredInstaMartCards.map((card) => (
          <Link to = {`/instamart/${card.displayName}`} key={card.nodeId}>
            <InstaMartCard data={card}/>
         </Link>
        ))
       }
    </div>
     </div>
  )
}

export default InstaMart

/*
<Link to = {`/instamart/${data.displayName}`} key={card.nodeId}>
 <InstaMartCard data={card}/>
</Link>
*/ 