import React, { useEffect, useRef, useState } from 'react';
import { IMG_URL } from '../utils/contanst';
// import { FaAngleRight, FaAngleLeft  } from "react-icons";  

const Carousel = ({ carousels = [] }) => {
  const [limitIdx, setLimitIdx] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const carousel = useRef(null);

  const prev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const next = () => {
    setLimitIdx(() => Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) - 1);
    if (currentIdx <= limitIdx) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIdx + 1;
    }
  }, [currentIdx]);

  return (
    <div className='mt-5 w-full h-72 flex-col justify-between pt-2'>
      <div className='flex items-center justify-between px-7'>
        <h1 className='text-2xl font-semibold text-gray-800'>What's on your mind?</h1>
        <div className='flex items-center gap-4'>
          <button
            className='p-3 bg-gray-100 text-gray-600 rounded-full shadow-md hover:bg-gray-200 transition duration-300'
            onClick={prev}
            aria-label="Previous"
          >
        
            &lt;
          </button>
          <button
            className='p-3 bg-gray-100 text-gray-600 rounded-full shadow-md hover:bg-gray-200 transition duration-300'
            onClick={next}
            aria-label="Next"
          >
          
            &gt;
          </button>
        </div>
      </div>
      <div className='h-[60%] overflow-hidden'>
        <div
          className='h-full flex gap-5 overflow-hidden scroll-smooth transition-transform duration-500 ease-in-out pl-4'
          ref={carousel}
        >
          {carousels.map((carousel) => (
            <img
              key={carousel.id}
              src={IMG_URL + carousel.imageId}
              className='h-full rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300'
              alt={`Carousel ${carousel.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
