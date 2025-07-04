import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilters, SetShowFilters] = useState(false)
  const [filterProducts, SetFilterProducts] = useState(products) // Default to all products
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [sortOption, setSortOption] = useState('relevant') // Corrected spelling
  const [SubCategory, setSubCateogry] = useState([])

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (SubCategory.includes(value)) {
      setSubCateogry((prev) => prev.filter((item) => item !== value))
    } else {
      setSubCateogry((prev) => [...prev, value])
    }
  }

  const applyingFilters = () => {
    let productCopy = products.slice()

    // Filter by subcategories
    if (SubCategory.length > 0) {
      productCopy = productCopy.filter((item) => SubCategory.includes(item.subCategory))
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      productCopy = productCopy.filter((item) => selectedCategories.includes(item.category))
    }

    // Filter by types
    if (selectedTypes.length > 0) {
      productCopy = productCopy.filter((item) => selectedTypes.includes(item.type))
    }

    // Filter by search
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Sort products
    if (sortOption === 'low-high') {
      productCopy = productCopy.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'high-low') {
      productCopy = productCopy.sort((a, b) => b.price - a.price)
    }

    SetFilterProducts(productCopy)
  }

  useEffect(() => {
    applyingFilters()
  }, [products, selectedCategories, selectedTypes, SubCategory, sortOption, search, showSearch])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    )
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p
          onClick={() => SetShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`}
            alt='Dropdown Icon'
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-black pl-5 py-3 mt-6 ${
            showFilters ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-black'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Men'}
                onChange={() => handleCategoryChange('Men')}
              />{' '}
              Men
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Women'}
                onChange={() => handleCategoryChange('Women')}
              />{' '}
              Women
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Kids'}
                onChange={() => handleCategoryChange('Kids')}
              />{' '}
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        
        {/* Type Filter */}
        <div
          className={`border border-black pl-5 my-5 py-3 mt-6 ${
            showFilters ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-black'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Topwear'}
                onChange={() => handleTypeChange('Topwear')}
              />{' '}
              Topwear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Bottomwear'}
                onChange={() => handleTypeChange('Bottomwear')}
              />{' '}
              BottomWear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={'Winterwear'}
                onChange={() => handleTypeChange('Winterwear')}
              />{' '}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            className='border-2 border-black text-sm px-2'
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection