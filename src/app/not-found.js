import React from 'react';
import notFound from '../asserts/error/error.png'
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className='notFound flex items-center justify-center h-[100%] ml-[17px] mt-[12px] mr-[14px] rounded-[10px]'>
            <div>
              <Image src={notFound} alt='not found' width={526} height={298}></Image>
              <h2 className='text-[28px] font-[700] leading-[36.4px] mt-[42px] text-center'>This page is empty</h2>
            </div>
        </div>
    );
};

export default NotFound;