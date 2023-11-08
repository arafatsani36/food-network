"use client";
import './SideNav.css'
import { BiHomeSmile, BiSolidVideos } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { PiDotsNineBold, PiTelegramLogoDuotone} from "react-icons/pi";
const SideNav = () => {
    return (
        <div className='sideNav-container'>

         {/* Desktop SideNav start  */}
           <div className='hidden md:block lg:block'>
            <div className="SideNav h-[100vh] flex flex-col justify-center items-center cursor-pointer">
                    <div className='SideNavItem w-[36px] h-[36px] my-2 duration-300 flex items-center'>
                        <BiHomeSmile className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiHomeSmile>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <RxDashboard className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></RxDashboard>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <PiTelegramLogoDuotone className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiTelegramLogoDuotone>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <BiSolidVideos className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiSolidVideos>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <PiDotsNineBold className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiDotsNineBold>
                    </div>
                </div>
           </div>
        {/* Desktop SideNav end  */}


        {/* responsive SideNav start*/}
            <div className="block md:hidden fixed bottom-0 w-[100%] ">
                <div className='SideNav flex w-[100%] justify-around items-center'>
                    <div className='SideNavItem w-[36px] h-[36px] my-2 duration-300 flex items-center'>
                        <BiHomeSmile className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiHomeSmile>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <RxDashboard className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></RxDashboard>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <PiTelegramLogoDuotone className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiTelegramLogoDuotone>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <BiSolidVideos className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></BiSolidVideos>
                    </div>
                    <div className='SideNavItem w-[36px] h-[36px] cursor-pointer my-2 duration-300 flex items-center'>
                        <PiDotsNineBold className='SideNavIcon w-[22px] h-[22px] text-center mx-auto'></PiDotsNineBold>
                    </div>
                </div>
            </div>
        {/* responsive SideNav end*/}

        </div>
    );
};

export default SideNav;