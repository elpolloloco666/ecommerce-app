'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const OrderItemCard = ({product}) => {

    const router = useRouter();

  return (
    <div className='flex space-x-2 items-center w-full p-2 border-gray-200 border-[1px] rounded-xl cursor-pointer'
        onClick={()=>router.push(`/product-details?id=${product.ProductsOrders.productId}`)}
    >
        <img src={product.image} alt={product.name} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain'/>

        <div className='flex flex-col items-start'>
            <p className='text-sm md:text-xl'>{product.name}</p>
            <p className='text-sm text-gray-500'>${product.price}</p>
            <p className='text-sm text-gray-500'>Quantity: {product.ProductsOrders.amount}</p>
        </div>
    </div>
  )
}

export default OrderItemCard