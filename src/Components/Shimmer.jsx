import React from 'react'

const ShimmerCard = () =>{
    return (
    <div class="bg-white rounded-lg shadow-md p-2 animate-pulse">
      <div class="h-40 bg-gray-200 rounded-lg"></div>
      <div class="mt-4 space-y-2">
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
    )
}


const Shimmer = () => {
    const LIMIT = 10;
  return (
    <div class="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {new Array(LIMIT).fill(null).map((_, idx) => (
        <ShimmerCard key={idx} />
      ))}
    </div>
  )
}

export default Shimmer