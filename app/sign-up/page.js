'use client'
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { showErrorToast, showSuccessToast } from '../../redux/toastSlice';

const page = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const [customer,setCustomer] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  });

  const handleChange = (field,e) => {
    setCustomer(prev =>({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const createUser = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/customers',{
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json',
      }
      }); 

      dispatch(showSuccessToast('Account created!'));
      router.push('/login');
      
    } catch (error) {
      console.log(error);
      dispatch(showErrorToast('Something went wrong, try again'));
      router.refresh();
    }
  }

  return (
    <div className='w-[100%] h-[100vh] bg-[#d9dfff] flex justify-center items-center space-x-[50px]'>

    <form onSubmit={handleSubmit} className='w-[250px] p-5 flex flex-col items-center bg-[#e4e9f5] rounded-xl space-y-10 shadow-2xl shadow-[#464b6c]'>

      <h2 className='text-2xl text-indigo-400'>Sign Up</h2>

      <div className='flex flex-col space-y-3'>
        <input type='text' placeholder='first name' className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          required value={customer.firstName} onChange={(e)=>handleChange('firstName',e)}
        />
        <input type='text' placeholder='last name' className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          required value={customer.lastName} onChange={(e)=>handleChange('lastName',e)}
        />
        <input type='text' placeholder='email' className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          required value={customer.email} onChange={(e)=>handleChange('email',e)}
        />
        <input type='password' placeholder='password' className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          required value={customer.password} onChange={(e)=>handleChange('password',e)}
        />
      </div>

      <button type='submit' className='text-white text-sm py-2 px-5 bg-indigo-400 rounded-xl hover:scale-105 active:scale-95 duration-300'>
        Sign Up
      </button>

      <div className='flex items-center justify-center space-x-1'>
        <p className='text-xs'>Got an account?</p>
        <a href='/login' className='text-xs text-indigo-400'>Login</a>
      </div>


    </form>

    <div className='hidden md:flex flex-col items-center space-y-3'>
   
      <div className='ml-9 flex flex-col items-center'>
        <p className='text-3xl text-indigo-400'>Shopy</p>
        <p className='text-xs text-indigo-300'>Click. Love. Shop.</p>
      </div>
      <img src='assets/sign-up.jpg' alt='sign up side image' className='w-[350px] object-contain'/>

    </div>

  </div>
  )
}

export default page;