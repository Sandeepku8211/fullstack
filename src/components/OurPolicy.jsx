import React from 'react'
import assets from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-black  '>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-black'>We offer hassel free Exchage Policy</p>

        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>We 2 Days replacment policy</p>
            <p className='text-black'>We offering for returning only 2 days in Policy </p>

        </div>
        <div> 
            <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>Easy to Contact</p>
            <p className='text-black'>We support only 9:00 Am - 5:00 Pm </p>

        </div>
      
    </div>
  )
}

export default OurPolicy;
