'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();

  return (
    <div className='my-[50px] mx-8 border-gray-200 border-[1px] flex flex-col space-y-7 p-8 justify-center items-center'>
        <h2 className='text-3xl text-green-500'>Thanks for buying in Shopy</h2>
        <img src='/assets/success.png' alt='success buy image' className='object-contain w-[250px] h-auto'/>
        <p>Your order has been placed, see the details in <span onClick={()=>router.push('/orders')} className='text-blue-700 hover:underline duration-200 cursor-pointer'>orders</span></p>
    </div>
  )
}

export default page