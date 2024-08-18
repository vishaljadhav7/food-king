import React, {useId} from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import CategoryItemList from './CategoryItemList';

const CategorySection = ({ data}) => {

  return (
    <div>
      <div className="w-full md:w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer "
        //   onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span><FaArrowDown /></span>  
        </div>

        {<CategoryItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default CategorySection