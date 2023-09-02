'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const CarouselCard = ({id,name,price,image}) => {

  const router = useRouter();

  return (
    <div className='w-full flex justify-center px-5'>
        <div className='w-full h-[250px] md:w-[600px] md:h-[300px] md:rounded-2xl p-3 md:px-8 md:py-5 bg-white border-gray-200 border-[1px] flex justify-between items-center rounded-xl'>

            <div className='flex flex-col items-start space-y-5'>
                <div className='flex flex-col items-start'>
                  <h3 className='text-xl md:text-2xl text-black text-start'>{name}</h3>
                  <p className='text-lg text-gray-500'>${price}</p>
                </div>
                <button className='px-3 py-1 bg-[#2c578c] text-white w-[110px] rounded-full '
                  onClick={()=>router.push(`/product-details?id=${id}`)}
                >
                    Shop Now
                </button>
            </div>

            <img src={image} alt={name} className='max-w-[150px] max-h-[150px] w-[150px] h-[150px] object-contain'/>

        </div>
    </div>
  )
}

export default CarouselCard;