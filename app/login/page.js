
import React from 'react';
import FormLogin from '../../components/FormLogin';

const page = () => {

  return (
    <div className='w-[100%] h-[100vh] bg-[#d9dfff] flex justify-center items-center space-x-[50px]'>

    <FormLogin/>

    <div className='hidden md:flex flex-col items-center space-y-5'>
   
      <div className='flex flex-col items-center'>
        <p className='text-3xl text-indigo-400'>Shopy</p>
        <p className='text-xs text-indigo-300'>Click. Love. Shop.</p>
      </div>
      <img src='assets/login.jpg' alt='login side image' className='w-[250px] object-contain'/>

    </div>

  </div>
  )
}

export default page