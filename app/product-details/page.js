import React from 'react';
import ProductDetailsCard from '../../components/ProductDetailsCard';

const getData = async(id) => {
    const res = await fetch(`https://ecommerce-api-k3g5.onrender.com/api/v1/products/${id}`,{cache:'no-store'});
    return res.json();
}

const stripeCheckout = async(item,token) => {
  'use server'
 const res = await fetch('http://localhost:3000/api/create-checkout-session',{
  method: 'POST',
  body:JSON.stringify({items:[item],token}),
  headers: {
    'Content-Type': 'application/json'
  },
  cache:'no-store'
  });
  const data = await res.json();
  return data;
}

export default async function page ({searchParams})  {
 
    const id = searchParams.id;
    const productData = await getData(id);

  return (
    <div className='flex items-center py-[50px] px-3 md:px-[50px] min-h-[100vh] md:h-auto'>
      <ProductDetailsCard productData={productData} stripeCheckout={stripeCheckout}/>
    </div>
  )
}

