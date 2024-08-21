import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useInstaMartList from '../utils/useInstaMartList';
import Shimmer from './Shimmer'



const InstaMartList = () => {
    const { instaMartId } = useParams();

    // const {status, allInstaMartListData} = useInstaMartList(instaMartId)
    // console.log(status, allInstaMartListData)
    // if(status === "loading"){
    //   return <Shimmer/>
    // }
  return (
    <div className='text-center'>
        <h1 className='text-4xl'>
       {instaMartId.split(' ').join('%20')}
        </h1>
    </div>
  )
}

export default InstaMartList