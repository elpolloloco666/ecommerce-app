'use client'
import React from 'react';
import OrderItemCard from './OrderItemCard';


const OrderComponent = ({orders}) => {

  return (
    <div className='flex flex-col justify-center space-y-5'>

    {orders.length ? (
      orders.reverse().map(item => (
      <div key={item.id} className='border-gray-300 border-[1px] p-5 rounded-xl flex flex-col space-y-3'>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500'>Date: {item.date.slice(0,10)}</p>
          <p className='text-gray-500'>Items: {item.products.length} </p>
          <p className='text-gray-500'>Total: ${item.total}</p>
        </div>
        {item.products.map(product => (
          <OrderItemCard key={item.id+product.id} product={product}/>
        ))}
      </div>
    ))
    ): (
      <div>
        <p className='text-gray-500'>You have not bought anything yet</p>
      </div>
    )}
        
    </div>
  )
}

export default OrderComponent;