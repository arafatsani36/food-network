'use client'
import dataOfItem from "@/Data/item";
import './Mainbar.css'
import { BiSearch } from 'react-icons/bi';
import Image from "next/image";
import { useContext, useState } from "react";
import { MainBarContext } from "@/provider/ResponsiveMainBar";
const MainBar = () => {
    // const [open, setOpen] = useState(false);
    const {open, setOpen} = useContext(MainBarContext)
    return (
        <div>
            
           <div className='px-[15px] pt-[12px] mainBar-container mt-[12px] ml-[14.76px] mr-[16px] hidden md:block'>
            <div className='g-[15px] flex w-[270px] h-[45px] items-center justify-center rounded-[10px] mx-[4px] my-[4px] g-[10px] mainBar'>
                    <div className='w-[126px] h-[37px] fruits'>
                        <h2 className='text-center'>Fruits</h2>
                    </div>
                    <div className='w-[126px] h-[37px] vegetables'>
                        <h2 className='text-center'>Vegetables</h2>
                        
                    </div>
            </div>

            {/* search bar start */}
            <div className='py-[4px] pl-[4px] pr-[15px] relative mainBarSearch'>
                    <input className='w-[270px] h-[34px] mainBarSearchInput placeholder-black py-[4px] pr-[4px] pl-[15px] rounded-[9px] focus:outline-none' type="search" name="" id="" placeholder="Search Best Food"/>
                    <button className='mainSearchBtn absolute right-0 top-0 mt-[8px] w-[35.21px] h-[26px]'><BiSearch className='searchIcon mx-[6px] my-[4px]'></BiSearch></button>
                </div>
                {/* search bar end */}

                {/* item start  */}
                    <div className="mt-[15px]">
                        <h2 className="mb-[10px] text-[14px] font-[500]">Fruits List</h2>
                        {
                        dataOfItem.map(item => <div key={item.id}>
                                <div className="flex items-center justify-justify py-[9px] px-[10px] mainBarItem">
                                    <Image src={item.image} alt={item.name} width={56.96} height={56.96}></Image>
                                    <div className="ml-[15px]">
                                        <h2 className=" font-[500] text-[15px] text-black">{item.name}</h2>
                                        <p className="font-[400] text-[14px] text-slate-500">{item.vitamin}</p>
                                    </div>
                                </div>
                        </div>) 
                        }
                    </div>
                {/* item end */}
           </div>


           {/* responsive start */}
           <div className={`px-[15px] pt-[12px] mainBar-container mt-[12px] ml-[14.76px] mr-[16px] block md:hidden absolute z-[5] duration-500 ease-in-out ${open ? 'left-[-15px] top-[-10px]' : 'left-[-500px] top-[-10px]'}`}>
           <div className='g-[15px] flex w-[270px] h-[45px] items-center justify-center rounded-[10px] mx-[4px] my-[4px] g-[10px] mainBar'>
                    <div className='w-[126px] h-[37px] fruits'>
                        <h2 className='text-center'>Fruits</h2>
                    </div>
                    <div className='w-[126px] h-[37px] vegetables'>
                        <h2 className='text-center'>Vegetables</h2>
                    </div>
            </div>

            {/* search bar start */}
            <div className='py-[4px] pl-[4px] pr-[15px] relative mainBarSearch'>
                    <input className='w-[270px] h-[34px] mainBarSearchInput placeholder-black py-[4px] pr-[4px] pl-[15px] rounded-[9px] focus:outline-none' type="search" name="" id="" placeholder="Search Best Food"/>
                    <button className='mainSearchBtn absolute right-0 top-0 mt-[8px] w-[35.21px] h-[26px]'><BiSearch className='searchIcon mx-[6px] my-[4px]'></BiSearch></button>
                </div>
                {/* search bar end */}

                {/* item start  */}
                    <div className="mt-[15px]">
                        <h2 className="mb-[10px] text-[14px] font-[500]">Fruits List</h2>
                        {
                        dataOfItem.map(item => <div key={item.id}>
                                <div className="flex items-center justify-justify py-[9px] px-[10px] mainBarItem">
                                    <Image src={item.image} alt={item.name} width={56.96} height={56.96}></Image>
                                    <div className="ml-[15px]">
                                        <h2 className=" font-[500] text-[15px] text-black">{item.name}</h2>
                                        <p className="font-[400] text-[14px] text-slate-500">{item.vitamin}</p>
                                    </div>
                                </div>
                        </div>) 
                        }
                    </div>
                {/* item end */}
            </div>
            {/* responsive end*/}
        </div>
    );
};

export default MainBar;