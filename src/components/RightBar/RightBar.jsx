'use client'
import './RightBar.css';
import img from '../../asserts/icon/text-square.svg'
import img2 from '../../asserts/icon/upArrow.svg'
import Image from 'next/image';
import { useEffect, useState } from 'react';
const RightBar = () => {
    const[sliderValue, setSliderValue] = useState(50)

    useEffect(() => {
        const storedValue = localStorage.getItem('sliderValue');
        if (storedValue) {
          setSliderValue(parseInt(storedValue, 10));
        }
      }, []);

      const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setSliderValue(newValue);
        // Save the value to local storage
        localStorage.setItem('sliderValue', newValue.toString());
      };

    return ( 
        <div className='mt-[12px] ml-[16px] rightBar px-[15px] pt-[15px] pb-[13px]'>
            <div className='SettingsContent py-[10px] px-[10px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <Image className='mr-[10px]' src={img} alt='' width={20} height={20}></Image>
                        <h4 className='text-[14px] font-[600] leading-[16.94px]'>Settings</h4>
                    </div>
                    <Image className='cursor-pointer' src={img2} alt='' width={20} height={20}></Image>
                </div>
                
                    <div className="mb-[16px] mt-[24px] flex justify-between">
                        <h4 className='text-[14px] font-[500] leading-[16.94px]'>Paragraph font size</h4>
                        <p className='text-[14px] font-[400] leading-[14.52px] sliderValue'>{sliderValue}</p>
                    </div>
                    <input type="range" min={0} max="100" value={sliderValue} onChange={handleSliderChange} className="rangeInput w-[100%] range-red" />
               

                <div>
                    
                        <h4 className='text-[14px] font-[500] leading-[16.94px]'>Choose Vitamin Type</h4>
                        <select className="select selectInput select-bordered w-full max-w-xs mt-[10px] py-[10px] pl-[15px] pr-[15px] rounded-[9px]">
                        <option disabled selected>All Vitamin</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                        </select>
                    

                    <div className='flex mt-[25px] justify-between'>
                        <h5 className='text-[14px] font-[500] leading-[16.94px]'>Turn Off Subtitle</h5>
                        <input type="checkbox" className="toggle" checked />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;