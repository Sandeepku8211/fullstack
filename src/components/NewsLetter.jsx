import React from 'react';

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add subscription logic here (e.g., API call)
    alert('Thank you for subscribing!');
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-black'>Subscribe now & Get 10% off</p>
      <p className='text-black mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aspernatur.
      </p>
      <form onSubmit={handleSubmit} className='w-full sm:w-1/2  flex    items-center gap-3 mx-auto my-6 border pl-3' >
        <input
          type="email"
          className='w-full sm:flex-1  outline-none '
          required
          placeholder='Enter your email address'
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4  hover:bg-gray-800 transition'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;