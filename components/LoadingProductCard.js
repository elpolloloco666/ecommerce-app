import React from 'react';

const LoadingProductCard = () => {
  return (
    <div className='animate-pulse flex flex-col w-[250px] space-y-4 bg-white border-gray-200 border-[1px] rounded-2xl items-start p-5 cursor-pointer'
    >
        <div className='w-full h-[170px] rounded-2xl bg-slate-500'/>
        <div className='w-[150px] h-[10px] rounded-full bg-slate-500'/>
        <div className='flex justify-between space-x-1 w-full'>
          <div className='w-[100px] h-[30px] rounded-full bg-slate-500'/>
          <div className='w-[75px] h-[10px] rounded-full bg-slate-500'/>
        </div> 
             
    </div>
  )
}

export default LoadingProductCard