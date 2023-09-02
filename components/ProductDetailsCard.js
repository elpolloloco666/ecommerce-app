'use client'

import React, { useState } from 'react';
import { addProduct } from '../redux/cartSlice';
import { showSuccessToast, showErrorToast } from '../redux/toastSlice';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

const ProductDetailsCard = ({productData,stripeCheckout}) => {

    const [productQuantity,setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    const handleAddToCart = () => {
        if(session){
            dispatch(addProduct({
                id:productData.id,
                name:productData.name,
                price:productData.price,
                image:productData.image,
                quantity: productQuantity,
                stock: productData.stock
            }));
            setProductQuantity(1);
            dispatch(showSuccessToast('Product added to your cart'));
        }else {
            dispatch(showErrorToast('You need to login first'));
        }   
        
    }

    const handleCheckout = async() => {
        if(session){
            const url = await stripeCheckout({
                id:productData.id,
                name:productData.name,
                price:productData.price,
                image:productData.image,
                quantity: productQuantity,
            },session.user.token);
            window.location.assign(url);
        }
        else {
            dispatch(showErrorToast('You need to login first'));
        }
    }


  return (
    <div className='relative flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-[50px] overflow-hidden'>

            <h2 className='lg:hidden text-2xl text-gray-500'>{productData.name}</h2>

            <img src={productData.image} alt={productData.name} className='w-full h-[250px] lg:min-w-[600px] md:h-[500px] object-contain'/>

            <div className='flex flex-col lg:items-start lg:justify-start space-y-5 lg:space-y-7'>
                <h2 className='hidden lg:flex text-3xl'>{productData.name}</h2>
                <p className='text-xl md:text-2xl'>${productData.price}</p>
                <p className='text-sm text-justify'>{productData.description}</p>
                <div className='flex space-x-2 items-center justify-center'>                 
                    <div className='flex justify-between items-center px-3 bg-[#e8eef5] rounded-full w-[110px]'>
                        <button className='flex p-2 hover:text-[#2c578c]' onClick={()=>setProductQuantity(prev =>{if(prev>1)return prev-1; else return 1})}>-</button>
                        <p>{productQuantity}</p>
                        <button className='flex p-2 hover:text-[#2c578c]' onClick={()=>setProductQuantity(prev =>{if(prev<productData.stock)return prev+1; else return productData.stock})}>+</button>
                    </div>
                    <p className='text-sm'>{productData.stock} items left</p>
                </div>
                <div className='flex justify-center items-center space-x-3'>
                    <button className='px-3 py-2 bg-[#2c578c] border-[#2c578c] border-[2px] text-white w-[110px] rounded-full hover:scale-105 hover:shadow-xl duration-300'
                        onClick={handleCheckout}
                    >
                        Buy now
                    </button>

                    <button className='px-3 py-2 border-[#2c578c] border-[2px] w-[110px] rounded-full hover:scale-105 hover:shadow-xl duration-300'
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>

    </div> 
  )
}

export default ProductDetailsCard;
