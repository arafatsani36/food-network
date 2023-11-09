"use client";
import './SideNav.css'
import { BiHomeSmile, BiSolidVideos } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { PiDotsNineBold, PiTelegramLogoDuotone} from "react-icons/pi";
import Link from 'next/link';
const SideNav = () => {
    return (
        <div className='sideNav-container h-[100%]'>

         {/* Desktop SideNav start  */}
           <div className='hidden md:block lg:block'>
            <div className="SideNav h-[100vh] flex flex-col justify-center items-center cursor-pointer">
                    <div className='SideNavItem w-[36px] h-[36px] my-2 duration-300 flex items-center justify-center'>
                       <Link href='/'><BiHomeSmile className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiHomeSmile></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center justify-center'>
                       <Link href='/dashboard'><RxDashboard className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></RxDashboard></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center justify-center'>
                       <Link href='/telegram'><PiTelegramLogoDuotone className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiTelegramLogoDuotone></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center justify-center'>
                       <Link href='/videos'><BiSolidVideos className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiSolidVideos></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center justify-center'>
                        <Link href='/more'><PiDotsNineBold className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiDotsNineBold></Link> 
                    </div>
                </div>
           </div>
        {/* Desktop SideNav end  */}


        {/* responsive SideNav start*/}
            <div className="block md:hidden fixed bottom-0 w-[100%] z-10">
                <div className='SideNav flex w-[100%] justify-around items-center'>
                    <div className='SideNavItem w-[36px] h-[36px] my-2 duration-300 flex items-center'>
                       <Link href='/'><BiHomeSmile className='SideNavIcon w-[22px] h-[22px] text-center mx-auto ml-[6px]'></BiHomeSmile></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                       <Link href='/dashboard'><RxDashboard className='SideNavIcon w-[22px] h-[22px] text-center mx-auto ml-[6px]'></RxDashboard></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                       <Link href='/telegram'><PiTelegramLogoDuotone className='SideNavIcon w-[22px] h-[22px] text-center mx-auto ml-[6px]'></PiTelegramLogoDuotone></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                       <Link href='/videos'><BiSolidVideos className='SideNavIcon w-[22px] h-[22px] text-center mx-auto ml-[6px]'></BiSolidVideos></Link>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                       <Link href='/more'><PiDotsNineBold className='SideNavIcon w-[22px] h-[22px] text-center mx-auto ml-[6px]'></PiDotsNineBold></Link>
                    </div>
                </div>
            </div>
        {/* responsive SideNav end*/}

        </div>
    );
};

export default SideNav;