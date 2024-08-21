import React from 'react'
import { INSTA_MART_CDN } from '../utils/contanst'

const InstaMartCard = ({data}) => {

  return (
    <div className='w-28 h-18 cursor-pointer  transition-all duration-700 hover:scale-110'> 
        <div className=''>
           <img src={INSTA_MART_CDN + data.imageId} alt="card" className='w-3/4' />
        </div>
        <h2>{data.displayName}</h2>
    </div>
  )
}

export default InstaMartCard