
import OrderComponent from '@/components/OrderComponent';
import React from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/auth/[...nextauth]/route';
import Unauthorized from '@/components/Unauthorized';

const getUserOrders = async(token) => {

  const res = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/profile/customer-orders',{
  method: 'GET',
  headers:{
    'Authorization': `Bearer ${token}`
  },
  cache: 'no-store'
  });
  return res.json();
}

const page = async() => {

  const session = await getServerSession(authOptions);
  
  if(session){
    const token = session?.user.token;
    const orders = await getUserOrders(token);
    return (
      <div className='mx-3 md:mx-8 my-[30px] flex flex-col space-y-7'>
        <h2 className='text-3xl'>Orders</h2>
        <OrderComponent orders={orders.orders}/>
      </div>
    )
  }

  return <Unauthorized/>
  
}

export default page