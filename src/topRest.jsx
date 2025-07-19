import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from './Card';

export default function topRest() {
    const [slide, setSlide] = useState(0);
    const [category, setCategory] = useState([]);

    const prevslide = () =>
    {
        if(slide == 0)
            false;
        setSlide(slide-2);
    }

    const nextslide = () =>
    {
        if(slide+4 >= category.length)
            return false;
        setSlide(slide+2);
    }
    const fetchCategory = async () =>
    {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

  return (
    <>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[20px] font-bold'> Top Restaurents chains in Surat </div>
                <div className='flex'>
                    <div className="Arrow" onClick={prevslide}> <FaArrowLeft /> </div>
                    <div className="Arrow" onClick={nextslide}> <FaArrowRight /> </div>
                </div>
            </div>
            <div className="overflow-hidden">
    {/* Slider track: shifted left/right based on `slide` */}
    <div
      className="flex gap-5 transition-transform duration-300"
      style={{ transform: `translateX(-${slide * 300}px)` }} // 280 + ~10px gap
    >
      {category.map((cat, index) => (
        <Card {...cat} key={index} />
      ))}
    </div>
  </div>
            <hr className='my-6 border-[1px]'></hr>
            </div>
    </>
  )
}
