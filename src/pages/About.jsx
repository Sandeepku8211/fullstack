import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import assets from '../assets/assets'

const About = () => {
  return (
    <div className=''>
      <div className='text-2xl text-center pt-8 broder-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-black'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae, dolor a nihil facilis magnam et odit modi cum optio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem odio iusto recusandae, quas iste reprehenderit quo possimus facere aperiam consequuntur ratione quisquam dolor totam optio tempora doloribus vel facilis dolorum? Non obcaecati ex iure a corrupti commodi magnam similique?</p>
        <b>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eius fugiat in! Voluptatem deleniti repudiandae, possimus illum ipsam vero sunt!</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assuurance :</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed, doloribus quibusdam id porro, rem consequuntur ullam autem itaque vero nobis culpa quam libero similique. Nam pariatur blanditiis deserunt odio autem eos tempora quas sint! Aliquam sequi ab veritatis voluptate itaque quisquam mollitia nostrum expedita, delectus libero recusandae quae accusantium!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveniecne :</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed, doloribus quibusdam id porro, rem consequuntur ullam autem itaque vero nobis culpa quam libero similique. Nam pariatur blanditiis deserunt odio autem eos tempora quas sint! Aliquam sequi ab veritatis voluptate itaque quisquam mollitia nostrum expedita, delectus libero recusandae quae accusantium!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service : :</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed, doloribus quibusdam id porro, rem consequuntur ullam autem itaque vero nobis culpa quam libero similique. Nam pariatur blanditiis deserunt odio autem eos tempora quas sint! Aliquam sequi ab veritatis voluptate itaque quisquam mollitia nostrum expedita, delectus libero recusandae quae accusantium!</p>
        </div>

      </div>
      <NewsLetter />
    </div>
  )
}

export default About
