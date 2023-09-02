'use client'
import React,{useEffect,useState} from 'react';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { AiOutlineLaptop, AiOutlineHome } from 'react-icons/ai';
import { SlScreenSmartphone } from 'react-icons/sl';
import { IoShirtOutline } from 'react-icons/io5';
import { LuDog } from 'react-icons/lu';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';
import PaginationComponent from './PaginationComponent';
import LoadingProductCard from './LoadingProductCard';

const ProductExplorer = () => {

    const [category,setCategory] = useState(0);
    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
 
    const limit = 4;

    let rightIndex = limit*currentPage; 
    let leftIndex = rightIndex - limit;

    if(rightIndex > products.length) {
        let diff = rightIndex - products.length; 
        rightIndex = products.length;
        leftIndex = rightIndex - diff;
    }
       
    const currentProducts = products.slice(leftIndex,rightIndex);

    const getProducts = async()=>{

        let url;

        if(category === 0){
            url = `https://ecommerce-api-k3g5.onrender.com/api/v1/products`;
        }else{
            url = `https://ecommerce-api-k3g5.onrender.com/api/v1/products?category=${category}`;
        }

        const data = await fetch(url)
        .then(res=>res.json()).then(response=>{
            setProducts(response); 
            setCurrentPage(1);
        });
    }

    useEffect(()=>{
        getProducts();
    },[category]);



  return (
    <section className='flex flex-col space-y-5 items-center'>
        <h2 className='text-black text-4xl text-center'>Browse All Categories</h2>

        <div className='flex flex-wrap gap-5 items-center justify-center '>
            <CategoryCard name='All' icon={<HiOutlineBuildingStorefront/>} categoryNumber={0} category={category} setCategory={setCategory} />
            <CategoryCard name='Computers' icon={<AiOutlineLaptop/>} categoryNumber={1} category={category} setCategory={setCategory} />
            <CategoryCard name='Electronics' icon={<SlScreenSmartphone/>} categoryNumber={2} category={category} setCategory={setCategory} />
            <CategoryCard name='Clothing' icon={<IoShirtOutline/>} categoryNumber={3} category={category} setCategory={setCategory} />
            <CategoryCard name='Home' icon={<AiOutlineHome/>} categoryNumber={4} category={category} setCategory={setCategory} />
            <CategoryCard name='Pets' icon={<LuDog/>} categoryNumber={5} category={category} setCategory={setCategory} />
        </div>

        <div>
            {currentProducts.length ? (
                <div className='flex flex-col space-y-5 items-center'>
                    <div className='px-[100px] flex flex-wrap gap-3 justify-center'>
                        {currentProducts.map(product=>(
                        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} stock={product.stock}/>
                        ))}
                    </div>


                    <PaginationComponent setCurrentPage={setCurrentPage} currentPage={currentPage} numberOfProducts={products.length}/>
                </div>
            ):(
                <div className='px-[100px] flex flex-wrap gap-3 justify-center'>
                    <LoadingProductCard/>
                    <LoadingProductCard/>
                    <LoadingProductCard/>
                    <LoadingProductCard/>
                </div>
            )}
        </div>

        

    </section>
  )
}

export default ProductExplorer;