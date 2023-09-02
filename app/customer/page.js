'use client'

import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Unauthorized from '@/components/Unauthorized';

const page = () => {

    const { data: session,status } = useSession();
    const user = session?.user.user;

    if (status === "unauthenticated") {
      return <Unauthorized/>
    }


  return (
  <div className='w-full h-[100vh] flex justify-center items-center'>

    <div className='flex items-center justify-center space-x-5'>

      <img src='/assets/customer.png' className='w-[100px] object-contain'/>

      <div className='flex flex-col items-start'>

        <div className='flex items-center space-x-5'>
          <p className='text-base'>First name: <span className='text-blue-500'>{user?.firstName}</span></p>
          <p className='text-base'>Last name: <span className='text-blue-500'>{user?.lastName}</span></p>
        </div>

        <p className='text-base'>Email: <span className='text-blue-500'>{user?.email}</span></p>

        <p className='text-gray-500 hover:underline hover:text-blue-500 duration-300 cursor-pointer'
          onClick={()=>signOut()}
        >Sign out</p>
      </div>

    </div>

    </div>
  )
}

export default page;