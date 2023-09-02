import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight }from 'react-icons/ai';

const PaginationComponent = ({setCurrentPage,currentPage,numberOfProducts}) => {

    const handleftPagination = () =>{
        if(currentPage > 1){
            setCurrentPage(prev=>prev-1);
        }
    } 

    const handleRightPagination = () => {

        const totalPages = Math.ceil(numberOfProducts/4);
        if(currentPage < totalPages){
            setCurrentPage(prev=>prev+1);
        }
    }

  return (
    <div className='flex items-center space-x-10'>
        <button className='w-[40px] h-[40px] border-black border-[1px] rounded-lg flex justify-center items-center'
        onClick={handleftPagination}
        >
            <AiOutlineArrowLeft />
        </button>

        <button className='w-[40px] h-[40px] border-black border-[1px] rounded-lg flex justify-center items-center'
        onClick={handleRightPagination}
        >
            <AiOutlineArrowRight/>
        </button>
    </div>
  )
}

export default PaginationComponent