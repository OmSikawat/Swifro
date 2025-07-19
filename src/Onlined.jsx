import React, { useEffect, useState, useRef} from 'react'
import Card from './Card';
import { FaFilter } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { LuVegan } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function Onlined() {
    const [category, setCategory] = useState([]);

    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!headerRef.current) return;
  
        const { top } = headerRef.current.getBoundingClientRect();
  
        if (top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchCategory = async () =>
    {
        const response = await fetch("https://swiapi.vercel.app/top-restaurant-chains");
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
    <div className='max-w-[1200px] mx-auto' ref={headerRef}>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[20px] font-bold'> Restaurants with online food delivery in Surat </div>
            </div>
            <div className={`${isSticky ? 'fixed top-0 z-[9999] bg-white w-full left-0' : ''}`}>
                <div className='max-w-[1200px] mx-auto flex my-5 gap-10'>
                    <div className='p-3 rounded-full shadow flex items-center gap-3 cursor-pointer'> Filter <FaFilter /> </div>
                    <div className='p-3 rounded-full shadow flex items-center gap-3 cursor-pointer'> Sort by <FaSortAmountUp /> </div>
                    <div className='p-3 rounded-full shadow flex items-center gap-3 cursor-pointer'> Fast Delivery <MdDeliveryDining /> </div>
                    <div className='p-3 rounded-full shadow flex items-center gap-3 cursor-pointer'> Pure Veg <LuVegan /> </div>
                    <div className='p-3 rounded-full shadow flex items-center gap-3 cursor-pointer'> Rating 4.0+ <FaStar /> </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-3'>
            {
                    category.map((cat, index) => {return <Card {...cat} key={index} />})
            }
            </div>
            <hr className='my-6 border-[1px]'></hr>
            </div>
    </>
  )
}
