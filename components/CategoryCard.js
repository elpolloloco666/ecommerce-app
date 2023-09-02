
import React from 'react';

const CategoryCard = ({name,icon,categoryNumber,category,setCategory}) => {

  return (
    <div className='flex flex-col justify-center text-black items-center w-[100px] h-[100px] p-3 space-y-2 rounded-xl bg-white
    hover:shadow-2xl hover:scale-105 hover:text-[#FF9B9B]  duration-300 cursor-pointer'
    style={{color: categoryNumber === category && '#FF9B9B'}}
    onClick={()=>setCategory(categoryNumber)}
    >
        {icon}
        <p className='text-sm'>{name}</p>
    </div>
  )
}

export default CategoryCard;