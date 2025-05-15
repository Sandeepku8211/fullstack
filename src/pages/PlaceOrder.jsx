import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import assets from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const {navigate}= useContext(ShopContext)
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  })
  const [method, setMethod] = useState('cod') // Default payment method: Cash on Delivery

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePaymentMethodChange = (selectedMethod) => {
    setMethod(selectedMethod)
  }

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode ||
      !formData.phoneNumber
    ) {
      alert('Please fill in all the required fields.')
      return
    }
    alert(`Order placed successfully with payment method: ${method}`)
  }

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex flex-col gap-3'>
          <input
            type='text'
            name='fullName'
            placeholder='Full Name'
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className='border border-black rounded py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleInputChange}
            required
            className='border border-black rounded py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            value={formData.city}
            onChange={handleInputChange}
            required
            className='border border-black rounded py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='postalCode'
            placeholder='Postal Code'
            value={formData.postalCode}
            onChange={handleInputChange}
            required
            className='border border-black rounded py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className='border border-black rounded py-1.5 px-3.5 w-full'
          />
        </div>
      </div>
      {/* Right Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'ORDER'} text2={'SUMMARY'} />
        </div>
        <div className='flex flex-col gap-3'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'stripe' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handlePaymentMethodChange('stripe')}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'stripe' ? 'bg-black' : ''
                }`}
              ></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt='Stripe' />
            </div>
            <div
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'razorpay' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handlePaymentMethodChange('razorpay')}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'razorpay' ? 'bg-black' : ''
                }`}
              ></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt='Razorpay' />
            </div>
            <div
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'cod' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handlePaymentMethodChange('cod')}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'cod' ? 'bg-black' : ''
                }`}
              ></p>
              <p className='text-black text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <button
          onClick={()=>navigate('/order')}
          className='bg-black text-white py-2 px-4 rounded mt-5'
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default PlaceOrder