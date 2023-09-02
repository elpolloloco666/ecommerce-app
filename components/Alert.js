'use client'
import React,{useEffect, useRef} from 'react';
import { gsap } from 'gsap';

const Alert = ({message}) => {

    const alertRef = useRef();

    const animate = () => {
        const tl = gsap.timeline(); 
        tl.to(alertRef.current,{xPercent:-50});
        tl.to(alertRef.current,{xPercent:200,delay:1});
    };

    useEffect(()=>{
        gsap.set(alertRef.current,{xPercent:200});
        animate();
    },[]);

  return (
    <div ref={alertRef} className='absolute top-0 right-0 p-5 text-sm text-white rounded-lg bg-green-400'>
        {message}
    </div>
  )
}



export default Alert;