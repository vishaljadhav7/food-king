import React, {useId, useState} from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import CategoryItemList from './CategoryItemList';

const CategorySection = ({ data, showItems, index, accordionId}) => {

  return (
    <div>
      <div className="w-full md:w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer "
          onClick={()=> showItems(index)}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span><FaArrowDown /></span>  
        </div>

        {accordionId === index &&  <CategoryItemList items={data.itemCards}  showItems={showItems}/>}
      </div>
    </div>
  )
}

export default CategorySection