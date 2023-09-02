'use client'
import React,{useState,useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from './CarouselCard';

const ProductCarousel = ({products}) => {

  return (
    <div className='w-full'>
       {products.length && (
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        swipeable={false}
        >
            {products.map(item => (
                <CarouselCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </Carousel>
       )}
    </div>
  )
}

export default ProductCarousel;