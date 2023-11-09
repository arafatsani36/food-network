'use client'
import { BsFacebook } from 'react-icons/bs';
import './Blog.css'
import { BiLogoLinkedin } from 'react-icons/bi';
import facebook from '../../asserts/icon/facebook.svg'
import linkedin from '../../asserts/icon/linkedin.svg'
import twitter from '../../asserts/icon/twitter.svg'
import link from '../../asserts/icon/link.svg'
import blogImg1 from '../../asserts/BlogImage/Image1.png'
import blogImg2 from '../../asserts/BlogImage/Image2.png'
import Image from 'next/image';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const Blog = () => {
    return (
        <div className="Blog mt-[12px] rounded-[10px] blog">
            <div className='flex'>

            {/* social media start*/}
                <div className='hidden md:block'>
                    <div className=' h-[50vh] flex flex-col justify-center items-center pl-[44px] pr-[42px]'>
                        <Image className='cursor-pointer mb-[22px] transform transition-transform duration-300 hover:scale-125' src={facebook} alt='facebook' width={1050} height={1050}></Image>
                        <Image className='cursor-pointer mb-[22px] transform transition-transform duration-300 hover:scale-125' src={linkedin} alt='linkedin' width={220} height={220}></Image>
                        <Image className='cursor-pointer mb-[22px] transform transition-transform duration-300 hover:scale-125' src={twitter} alt='twitter' width={220} height={220}></Image>
                        <Image className='cursor-pointer mb-[22px] transform transition-transform duration-300 hover:scale-125' src={link} alt='link' width={220} height={220}></Image>
                    </div>
                </div>
            {/* social media end*/}

            {/* content start*/}
                <div className="py-[44px] pr-[30px]">
                {/* fast blog start */}
                   <div className='md:flex'>
                        <div className='mr-[30px]'>
                            <h2 className='text-[38px] font-[900] leading-[49.4px]'>Health benefits of an avocado</h2>
                            <h4 className='text-[18px] font-[700] leading-[28.8px] mt-[30px] mb-[15px]'>Supports eye health: </h4>
                            <p className='text-[15px] font-[400] leading-[24px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>

                            <h4 className='text-[18px] font-[700] leading-[28.8px] mt-[30px] mb-[15px]'>Supports eye health: </h4>
                            <p className='text-[15px] font-[400] leading-[24px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        </div>
                        <Image className=' rounded-[30px]' src={blogImg1} alt='' width={0} height={0} style={{ width: '380px' , height:'300px' }}></Image>
                   </div>
                   {/* fast blog end */}

                  {/* middle content start  */}
                   <h4 className='text-[18px] font-[700] leading-[28.8px] mt-[42px] mb-[15px]'>Supports eye health: </h4>
                    <p className='text-[15px] font-[400] leading-[24px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
                    {/*middle content end*/}


                    {/* second blog start */}
                   <div className='md:flex items-center justify-center'>
                        <Image className=' rounded-[30px] mr-[44px]' src={blogImg2} alt='' width={0} height={0} style={{ width: '380px' , height:'320px' }}></Image>
                        <div>
                            <h4 className='text-[18px] font-[700] leading-[28.8px] mt-[30px] mb-[15px]'>Supports eye health: </h4>
                            <p className='text-[15px] font-[400] leading-[24px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                        </div>
                        
                   </div>
                   {/* second blog end */}
                   <div>
                        <h2 className='text-[18px] font-[900] leading-[34.2px] mb-[10px]'>Was this helpful?</h2>
                        <div className='flex'>
                            <AiTwotoneStar className='w-[28px] h-[28px] ratingIcon cursor-pointer'></AiTwotoneStar>
                            <AiTwotoneStar className='w-[28px] h-[28px] ratingIcon cursor-pointer'></AiTwotoneStar>
                            <AiTwotoneStar className='w-[28px] h-[28px] ratingIcon cursor-pointer'></AiTwotoneStar>
                            <AiTwotoneStar className='w-[28px] h-[28px] ratingIcon cursor-pointer'></AiTwotoneStar>
                            <AiOutlineStar className='w-[28px] h-[28px] ratingIcon cursor-pointer'></AiOutlineStar>
                        </div>
                   </div>
                </div>

            {/* content end*/}
            </div>
        </div>
    );
};

export default Blog;