'use client'
import CartCard from '../../components/CartCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import Unauthorized from '@/components/Unauthorized';

const stripeCheckout = async(items,token) => {
    
    const session = await fetch('https://ecommerce-app-mu-seven.vercel.app/api/create-checkout-session',{
      method: 'POST',
      body:JSON.stringify({items:items,token}),
      headers: {
        'Content-Type': 'application/json',
    }
    });
    const data = await session.json();
    window.location.assign(data);
}

const page = () => {

    const products = useSelector(state => state.cart.itemList);
    const total = useSelector(state => state.cart.total);
    const productTotalQuantity = useSelector(state=>state.cart.productQuantity);
    const { data: session, status } = useSession();
    
    const handleCheckOut = () => {
        if(products.length && session){
            stripeCheckout(products,session.user.token);
        }
    }

    if (status === "unauthenticated") {
        return <Unauthorized/>
    }

  return (
    <div className='my-[50px] px-3 lg:px-8 flex flex-col-reverse lg:flex-row lg:justify-between relative'>
        
        <div className='w-full lg:w-[70%] min-h-[300px] p-5 flex flex-col space-y-5 justify-start rounded-xl border-gray-200 border-[1px]'>
            
            <div className='flex flex-col'>
                <h2 className='text-3xl'>Your Cart</h2>
                <div className='w-full h-[1px] bg-black'/>
            </div>

            {products.length ? (
                <div className='flex flex-col space-y-3'>
                {products.map(items => (
                <CartCard key={items.id} id={items.id} name={items.name} image={items.image} price={items.price} quantity={items.quantity} stock={items.stock}/>              
                ))}
                </div>
            ): (
                <p>Your cart is empty</p>
            )}
            
        </div>

        <div className='lg:sticky top-0 right-0 w-full lg:w-[20%] h-[150px] mb-5 lg:mb-0 p-5 rounded-xl border-gray-200 border-[1px] flex flex-col space-y-4 justify-center items-center'>
           
                <div className='w-full flex items-center justify-between'>
                    <p className='lg:text-sm'>Total ({productTotalQuantity} products):</p>
                    <p className='lg:text-sm'>${total}</p>
                </div>
                <div className='w-full h-[1px] bg-black'/>
                <button className='p-2  bg-[#2c578c] border-[#2c578c] border-[2px] text-white w-[110px] rounded-full hover:scale-105 hover:shadow-xl duration-300'
                onClick={handleCheckOut}
                >
                    Pay now
                </button>
            
        </div>

    </div>
  )
}

export default page;