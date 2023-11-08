"use client";
import './Header.css'
import Image from "next/image";
import logo from '../../asserts/logo/logo.png'
import { BiSearch } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { BsNintendoSwitch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import MainBar from '../MainBar/MainBar';
import { useContext, useState } from 'react';
import { MainBarContext } from '@/provider/ResponsiveMainBar';

const Header = () => {
    const {open, setOpen} = useContext(MainBarContext)
    return (
        <div className='header'>
            <div className="flex items-center justify-between py-[10px] pr-[15px] pl-[26px]">
            <Image className="w-[71px] h-[36px]" src={logo} alt=""></Image>

                {/* search bar start */}
                <div className='hidden lg:block'>
                    <input className='w-[390px] h-[40px] relative searchInput placeholder-black py-[4px] pr-[4px] pl-[15px] rounded-[9px] focus:outline-none' type="search" name="" id="" placeholder="Search Best Food"/>
                    <button className='absolute searchBtn'><BiSearch className='searchIcon'></BiSearch></button>
                </div>
                {/* search bar end */}

                {/* responsive search bar start */}
                <div className=' lg:hidden sm:block md:block sm:ml-10'>
                    <input className='peer cursor-pointer placeholder-black relative z-10 h-4 w-5 rounded-full bg-transparent outline-none focus:w-full focus:cursor-text p-4 searchInput' type="search" name="" id="" placeholder="Search Best Food"/>
                    <button className='absolute responsiveSearchBtn'><BiSearch className='responsiveSearchIcon'></BiSearch></button>
                </div>
                {/* responsive search bar end */}

                {/* icon start*/}
                <div className="flex justify-between gap-4 sm:mr-4">
                    <div className='sunBtn mr-8 hidden lg:block'><FiSun className='sunIcon'></FiSun></div>
                    <div className='switchBtn mr-8 hidden lg:block'><BsNintendoSwitch className='switchIcon'></BsNintendoSwitch></div>
                    <div className='menuBtn' onClick={() => setOpen(!open)}><AiOutlineMenu className='menuIcon'></AiOutlineMenu></div>
                </div>
                {/* icon end*/}
            </div>
           
        </div>
    );
};

export default Header;