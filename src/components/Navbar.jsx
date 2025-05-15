import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch,getCartCount } = useContext(ShopContext)

  return (
    <div className='flex justify-between font-medium items-center py-5'>
      {/* Logo */}
      <NavLink to='/'>
        <img className='w-36' src={assets.logo} alt='Logo' />
      </NavLink>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-black' : '')}>
          <p>Home</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/collection' className={({ isActive }) => (isActive ? 'text-black' : '')}>
          <p>Collection</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-black' : '')}>
          <p>About</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-black' : '')}>
          <p>Contact</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='Search'
        />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' /></Link>
          <div className='group-hover:block hidden dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 absolute rounded shadow-lg'>
              <p className='cursor-pointer hover:text-black'>Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          <p className='aspect-square rounded-full text-[8px] absolute right-[-5px] text-white bottom-[-5px] w-4 text-center leading-4 bg-black'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-500'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Back' />
            <p>Back</p>
          </div>
          <NavLink
            className='py-2 pl-6 border'
            onClick={() => setVisible(false)}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className='py-2 pl-6 border'
            onClick={() => setVisible(false)}
            to='/collection'
          >
            Collection
          </NavLink>
          <NavLink
            className='py-2 pl-6 border'
            onClick={() => setVisible(false)}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className='py-2 pl-6 border'
            onClick={() => setVisible(false)}
            to='/contact'
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar