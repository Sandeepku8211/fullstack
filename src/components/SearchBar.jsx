import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Simplified visibility logic
    const isSearchPage = location.pathname.includes('collection') || location.pathname === '/'
    setVisible(isSearchPage && showSearch)
  }, [location, showSearch]) // Added showSearch to the dependency array

  return visible ? (
    <div className='border-t border-b bg-white text-center'>
      <div className='inline-flex items-center justify-center border border-black px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          className='flex-1 outline-none bg-inherit text-sm'
          placeholder='Search Your items'
        />
        <img src={assets.search_icon} className='w-4' alt='Search Icon' />
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer'
        alt='Close Icon'
      />
    </div>
  ) : null
}

export default SearchBar