import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')

  const toggleState = () => {
    setCurrentState((prevState) => (prevState === 'Login' ? 'Signup' : 'Login'))
  }

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-black' />
      </div>
      {currentState === 'Signup' && (
        <input
          required
          type='text'
          className='w-full px-3 py-2 border border-black'
          placeholder='Enter Your First Name'
        />
      )}
      <input
        required
        type='email'
        className='w-full px-3 py-2 border border-black'
        placeholder='Enter Your Email'
      />
      <input
        required
        type='password'
        className='w-full px-3 py-2 border border-black'
        placeholder='Enter Your Password'
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        <p className='cursor-pointer' onClick={toggleState}>
          {currentState === 'Login' ? 'Create an Account' : 'Already have an Account?'}
        </p>
      </div>

      <button
        type='submit'
        className='bg-black text-white px-4 py-2 rounded mt-4 w-full'
      >
        {currentState === 'Login' ? 'Login' : 'Signup'}
      </button>
    </form>
  )
}

export default Login