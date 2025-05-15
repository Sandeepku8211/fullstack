import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import assets from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  const handleQuantityChange = (id, size, value) => {
    const quantity = parseInt(value, 10)
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(id, size, quantity)
    }
  }

  const handleRemoveItem = (id, size) => {
    updateQuantity(id, size, 0) // Remove the item by setting quantity to 0
  }

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)
          if (!productData) return null // Handle missing product gracefully

          return (
            <div
              key={`${item._id}-${item.size}`}
              className='py-4 border-t border-b text-black grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                <img src={productData.image[0]} className='w-16 sm:w-20' alt={productData.name} />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>
                      {currency} {productData.price.toFixed(2)}
                    </p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                type='number'
                className='border max-w-10 px-1 sm:px-2 py-1'
                min={1}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
              />
              <img
                src={assets.bin_icon}
                className='w-4 mr-4 sm:w-5 cursor-pointer'
                alt='Remove'
                onClick={() => handleRemoveItem(item._id, item.size)}
              />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/placeOrder')}
              className='bg-black text-white text-sm my-8 px-8 py-3'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart