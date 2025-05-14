import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('') // Initialize size state

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId)
      if (product) {
        setProductData(product)
        setImage(product.image[0])
        setSize(product.sizes[0]) // Set the default size to the first available size
      }
    }
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Product ${index + 1}`}
                onClick={() => setImage(item)} // Update main image on click
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt='Selected' />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_dull_icon} alt='' className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency} {productData.price}
          </p>
          <p className='mt-5 text-black md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index} // Added key attribute
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${
                    item === size ? 'bg-green-800 text-white' : 'bg-gray-500 text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
          <hr  className='mt-8 sm:w-45'/>
          <div className='text-sm text-black mt-5 flex flex-col gap-1'>

            <p>100% Original Product</p>
            <p>Cash on Deliery Is abailabel ON this porudct</p>

            <p>Easy return and Exchange policy Withn 7 days</p>
          </div>
        </div>
      </div>
      {/* {description and reviewe} */}
      <div className=' mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (122)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-3 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo, quae cum illum molestias adipisci nesciunt quam quasi natus voluptas dolore ad laborum cupiditate porro saepe obcaecati temporibus nobis, magnam recusandae corrupti iste. Sit, neque tempore. Iure error praesentium sapiente ullam omnis optio iste, voluptas repudiandae consectetur, necessitatibus molestias doloremque!</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quis qui quisquam, error delectus est eligendi quasi non ipsam odit, modi nisi exercitationem cumque quae optio cum natus, reprehenderit libero animi perferendis pariatur neque. Sunt voluptate tempore, autem corrupti fugit ipsa in at. Provident, corrupti dolorem vitae est et tempora?</p>

        </div>

      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product