'use Client'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, subtractProduct } from '../redux/cartSlice'; 

const CartCard = ({id,name,image,price,quantity,stock}) => {

  const dispatch = useDispatch();

  const handleAdd = () => {
    if(quantity < stock){
      dispatch(addProduct({id}));
    }
  }

  const handleSubtract = () => {
    if(quantity > 1){
      dispatch(subtractProduct(id));
    }
  }

  return (
    <div className='flex space-x-2 items-center w-full p-5 border-gray-200 border-[1px] rounded-xl'>
        <img src={image} alt={id+name} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain'/>
        <div className='flex flex-col items-start px-1'>
            <p className='text-sm md:text-xl'>{name}</p>
            <p className='text-sm text-gray-500'>${price}</p>

            <div className='flex flex-col md:flex-row items-center md:space-x-3 mt-2'>

              <div className='flex justify-between items-center px-3 bg-[#e8eef5] rounded-full w-[110px]'>
                <button className='flex p-2 hover:text-[#2c578c]' onClick={handleSubtract}>-</button>
                  <p>{quantity}</p>
                <button className='flex p-2 hover:text-[#2c578c]' onClick={handleAdd}>+</button>
              </div>

              <p className='text-sm text-[#2c578c] hover:underline duration-300 cursor-pointer' 
                onClick={()=>dispatch(removeProduct(id))}
              >Remove product
              </p>

            </div>

        </div>
    </div>
  )
}

export default CartCard;