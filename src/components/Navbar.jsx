import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets'

const Navbar = () => {
  const [visible,setVisible]=useState(false)
  return (
    <div className='flex justify-between font-medium  items-center py-5'>

        
        <NavLink to='/'>
        <img className='w-36' src={assets.logo} alt="" />
        </NavLink>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to='/'>
          <p>Home</p>
          <hr  className='w-4/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/collection'>
          <p>Collection</p>
          <hr  className='w-4/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/about'>
          <p>About</p>
          <hr  className='w-4/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <p>Contact</p>
          <hr  className='w-4/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group realtive'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group-hover:block hidden dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 absolute rounded'>
              <p className='cursor-pointer hover:text-black'>Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'> Logout</p>
            </div>

          </div>

        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
        <p className='aspect-square rounded-full text-[8px] absolute right-[-5px] text-white bottom-[-5px] w-4 text-center leading-4 bg-black 
        rounded '>10</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text0-gray-500 '>
          <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>

          </div>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/'>Home</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/collection'>Collection</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/about'>About</NavLink>
          <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/contact'>Contact</NavLink>
        </div>


        </div>
      
    </div>
  )
}

export default Navbar
