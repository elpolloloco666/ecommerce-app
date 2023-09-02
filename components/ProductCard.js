'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { showSuccessToast, showErrorToast } from '../redux/toastSlice';
import { useSession } from 'next-auth/react';

const ProductCard = ({id,name,price,image,stock}) => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleAddToCart = () => {
    if(session){
      dispatch(addProduct({
        id,
        name,
        price,
        image,
        stock
      }));
      dispatch(showSuccessToast('Product added to your cart'));
    }else {
      dispatch(showErrorToast('You need to login first'));
    }
  }

  return (
    <div className='flex flex-col w-[250px] space-y-4 bg-white border-gray-200 border-[1px] rounded-2xl items-start p-5 cursor-pointer'
    >
        <img src={image} alt={name} className='w-full h-[170px] rounded-2xl object-contain cursor-pointer' onClick={()=>router.push(`/product-details?id=${id}`)}/>
        <p className='text-black text-xs cursor-pointer hover:text-[#2c578c] hover:underline duration-300' onClick={()=>router.push(`/product-details?id=${id}`)}>{name}</p>
        <div className='flex justify-between space-x-1 w-full'>
          <button className='rounded-full py-1 px-2 text-black text-sm border-black border-[1px]'
          onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <p className='text-gray-500 text-sm'>${price}</p>
        </div>      
    </div>
  )
}

export default ProductCard;