import React from 'react'

const ShimmerCard = () =>{
    return (
    <div className="bg-white rounded-lg shadow-md p-2 animate-pulse w-80">
      <div className="h-40 bg-gray-200 rounded-lg"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
    )
}


const Shimmer = () => {
    const LIMIT = 10;
  return (
    <div className="w-screen flex flex-wrap justify-center items-center gap-4">
      {new Array(LIMIT).fill(null).map((_, idx) => (
        <ShimmerCard key={idx} />
      ))}
    </div>
  )
}

export default Shimmer