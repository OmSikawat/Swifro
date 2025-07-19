import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircle } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";


function Head() {
  const [toggle, setToggle] = useState(false);
  const link = [{icon: <FaSearch />, name: "Search"}, {icon: <BiSolidOffer />, name: "Offers", sup: "New"}, {icon: <IoIosHelpCircle />, name: "Help"}, {icon: <RiLoginCircleFill />, name: "Sign In"}, {icon: <FaCartPlus />, name: "Cart", sup: "(0)"}]
  const showMenu = () => 
  {
    setToggle(true);
  }

  const hideMenu = () =>
  {
    setToggle(false);
  }
  return (
   <>
   <div className='overlay w-full h-full fixed duration-500 z-[9999]' style={{opacity :toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden"}} onClick={hideMenu}>
    <div className='w-[400px] bg-white h-full absolute duration-[400ms] left-0 top-0' style={{left: toggle ? '0%' : '-100%'}} onClick={(e) => {e.stopPropagation();}}></div>
   </div>
    <header className='p-3 shadow-xl bg-white sticky top-0 z-[9999]'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='w-[60px]'>
          <img src='Images/swiggylogo.png' className='w-full'></img>
        </div>
        <div className='text-[#686b78]'>
          <span className='font-bold border-b-[3px] border-[black] text-black'> Other </span>
        Surat, Gujarat, India
        <IoIosArrowDown onClick={showMenu} fontSize={20} className='inline font-bold text-[#fc8019] cursor-pointer'/>
        </div>
        <nav className='flex list-none gap-10 ml-auto font-semibold text-[18px]'>
          {
            link.map((link, index) => {return <li className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]' key={index}>
            {link.icon}
            {link.name}
            <sup className='text-[#fc8019]'>{link.sup} </sup>
          </li>})
          }
        </nav>
      </div>
    </header>
   </>
  )
}

export default Head
