import React, { useEffect, useMemo, useState } from 'react'
import { useRestaurants } from '../utils/useRestuarants'

const Restaurants = () => {

   const data =  useRestaurants();
   
  return (
    <div>Restaurants</div>
  )
}

export default Restaurants