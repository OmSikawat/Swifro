import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [category, setCategory] = useState([]);

    const prevslide = () =>
    {
        if(slide == 0)
            false;
        setSlide(slide-3);
    }

    const nextslide = () =>
    {
        if(category.length-8 == slide)
            return false;
        setSlide(slide+3);
    }

    const fetchCategory = async () =>
    {
        const response = await fetch("https://swiapi.vercel.app/api/categories");
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
                <div className='text-[20px] font-bold'> What's on your mind? </div>
                <div className='flex'>
                    <div className="Arrow" onClick={prevslide}> <FaArrowLeft /> </div>
                    <div className="Arrow" onClick={nextslide}> <FaArrowRight /> </div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {
                    category.map((cat, index) => {return <div style={{transform: `translateX(-${slide * 100}%)`}} className='w-[150px] shrink-0 duration-500' key={index}>
                        <img 
                                  src={`https://swiapi.vercel.app/public/images/${cat.image}`} 
                                  alt={cat.name || 'category'} 
                                />
                        </div>})
                }
            </div>
            <hr className='my-6 border-[1px]'></hr>
        </div>
    </>
  )
}
