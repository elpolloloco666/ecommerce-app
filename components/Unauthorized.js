'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Unauthorized = () => {
    const router = useRouter();
  return (
    <div className='w-full h-[100vh] my-[50px] px-8 flex flex-col items-center space-y-5'>
        <p className='text-xl'>To view this page you need to login first</p>
        <p className='text-xl hover:text-blue-500 hover:underline duration-300 cursor-pointer'
            onClick={()=>router.push('/login')}
        >Log in</p>
    </div>
  )
}

export default Unauthorized