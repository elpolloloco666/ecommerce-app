'use client'
import React,{ useState } from 'react';
import { AiOutlineShop,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineUser } from 'react-icons/ai';
import { PiNewspaperClippingBold } from 'react-icons/pi';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { showErrorToast } from '@/redux/toastSlice';

const DesktopNavbar = () => {
    
    const [search,setSearch] = useState('');
    const { data: session } = useSession();
    const router = useRouter();
    const path = usePathname();
    const productQuantity = useSelector(state=>state.cart.productQuantity);
    const dispatch = useDispatch();

    const handleLoginClick = () => {
        if(session){
            router.push('/customer');
        }
        else{
            router.push('/login');
        }
    }

    const handleOrderClick = () => {
        if(session){
            router.push('/orders');
        }
        else{
            dispatch(showErrorToast('You need to login first'));
        }
    }

    const handleCartClick = () => {
        if(session){
            router.push('/cart');
        }
        else{
            dispatch(showErrorToast('You need to login first'));
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(search !== ''){
            router.push(`/search?query=${search}`);
            setSearch('');
        }
    }


  return (
    <div className={`${(path === '/login' || path==='/sign-up') && 'hidden'} flex flex-col w-full shadow-sm items-center px-5 lg:px-[80px] bg-white`}>
        
        <div className=' flex w-full h-[80px] justify-between items-center '>

        <div className='flex space-x-2 items-center cursor-pointer'
            onClick={()=>router.push('/')}
            >
                <AiOutlineShop className='text-3xl text-black'/>
                <h1 className={`text-black text-3xl`}>Shopy</h1>   
            </div>


            <form onSubmit={handleSearch} className='hidden md:flex items-center border-2 rounded-full px-3 py-1'>
                <input type='text' placeholder='Search' className='bg-white flex-grow w-[300px] border-none outline-none text-gray-600'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type='submit' className='rounded-full w-[30px] h-[30px] bg-[#2c578c] flex justify-center items-center'>
                <AiOutlineSearch className='text-white text-lg '/>
                </button>
            </form>


        <div className='flex items-center space-x-5'>

            <div className='flex items-center cursor-pointer group'
                onClick={handleLoginClick}
            >
                <AiOutlineUser className='text-gray-600  text-2xl group-hover:text-[#2c578c] duration-500'/>
                <p className='text-gray-600  text-xs md:text-sm font-normal group-hover:text-[#2c578c] duration-500' 
                >
                    {session ? session?.user.user?.firstName : 'login'}
                </p>
            </div>

            <div className='flex items-center cursor-pointer group'
            onClick={handleOrderClick}
            >
                <PiNewspaperClippingBold className='text-gray-600  text-2xl group-hover:text-[#2c578c] duration-500'/>
                <p className='hidden md:flex text-gray-600  text-sm font-normal group-hover:text-[#2c578c] duration-500'>orders</p>
            </div>

            <div className='flex items-center cursor-pointer group'
            onClick={handleCartClick}
            >
                <div className='relative'>
                    <AiOutlineShoppingCart className='text-gray-600  text-2xl group-hover:text-[#2c578c] duration-500'/>
                    <div className='bg-[#2c578c] flex justify-center items-center rounded-full h-[15px] w-[15px] absolute -top-2 -right-2 text-white text-xs'>
                        {productQuantity}
                    </div>
                </div>
                <p className='hidden md:flex text-gray-600 text-sm font-normal group-hover:text-[#2c578c] duration-500'>cart</p>
            </div>

        </div>

        </div>

        <form onSubmit={handleSearch} className='flex md:hidden mb-3 items-center border-2 rounded-full px-3 py-1'>
                <input type='text' placeholder='Search' className='bg-white flex-grow w-[300px] border-none outline-none text-gray-600'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type='submit' className='rounded-full w-[30px] h-[30px] bg-[#2c578c] flex justify-center items-center'>
                <AiOutlineSearch className='text-white text-lg '/>
                </button>
        </form>
            

    </div>  
  )
}

export default DesktopNavbar