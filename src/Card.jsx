import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className='w-[280px] shrink-0 mb-3'>
      <div className='group h-[182px] rounded-[15px] overflow-hidden relative'>
        <img
  className='group-hover:scale-110 duration-150 object-cover w-full h-full'
  src={`https://swiapi.vercel.app/images/${props.image}`}  // localhost se change kiya
  alt={props.title}
/>
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] font-bold text-white tracking-tighter'>
          {props.offer}
        </div>
      </div>

      <div className='mt-3 text-xl font-bold'>{props.title}</div>

      <div className='flex items-center gap-2'>
        <FaStar />
        {props.rating}
        <div className='ml-2 flex items-center'>
          {props.minTime} - {props.maxTime} mins
        </div>
      </div>

      <div>
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
}
