import ProductCard from '@/components/ProductCard';
import React from 'react';

const getProducts = async(query) => {
    const res = await fetch(`https://ecommerce-api-k3g5.onrender.com/api/v1/products?search=${query}`,{cache:'no-store'});
    return res.json();
}

const page = async({searchParams}) => {
    const query = searchParams.query;
    const products = await getProducts(query);
  return (
    <div className='mx-3 lg:mx-8 my-[50px] flex flex-col space-y-5'>
        <div className='flex flex-col'>
            <p className='text-2xl'>Results for "{query}"</p>
            <p className='text-sm text-gray-500'>{products.length} products</p>
        </div>
        <div className='flex flex-wrap gap-3 justify-center'>
            {products.map(product => (
                <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} stock={product.stock}/>
            ))}
        </div>
    </div>
  )
}

export default page;