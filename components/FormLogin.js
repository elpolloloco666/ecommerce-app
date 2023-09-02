'use client'
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';

const FormLogin = () => {

    const [loginData,setLoginData] = useState({
        email: '',
        password: ''
    });
    
    const dispatch = useDispatch();
    
    const handleChange = (field) =>(e) => {
        setLoginData(prev => ({
          ...prev,
          [field]: e.target.value
        }))
    }

    const handleAuth = async(e) => {
      e.preventDefault();
      const result = await signIn("credentials",{
        email: loginData.email,
        password: loginData.password,
        redirect:true,
        callbackUrl: '/'
      });
      
    }

  return (
    <form onSubmit={handleAuth} className='w-[250px] p-5 flex flex-col items-center bg-[#e4e9f5] rounded-xl space-y-8 shadow-2xl shadow-[#464b6c]'>

      <h2 className='text-2xl text-indigo-400'>Login</h2>

      <div className='flex flex-col space-y-3'>
        <input type='text' placeholder='email' required className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          value={loginData.email} onChange={handleChange('email')}
        />
        <input type='password' placeholder='password' required className='w-[170px] h-[25px] border-[1px] bg-[#eef2fa] text-sm placeholder-indigo-200 text-indigo-400 border-indigo-200 pl-2 rounded-md outline-none focus:border-indigo-400 duration-300'
          value={loginData.password} onChange={handleChange('password')}
        />
      </div>

      <button type='submit' className='text-white text-sm py-2 px-5 bg-indigo-400 rounded-xl hover:scale-105 active:scale-95 duration-300'>
        Log in
      </button>

      <div className='flex items-center justify-center space-x-1'>
        <p className='text-xs'>New here?</p>
        <a href='/sign-up' className='text-xs text-indigo-400'>Create account</a>
      </div>

    </form>
  )
}

export default FormLogin;