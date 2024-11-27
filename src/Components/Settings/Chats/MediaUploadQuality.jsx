import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MediaUploadQuality = ({ close, onselect, selectedValue }) => {
    const [quality, setQuality] = useState(selectedValue);
    useEffect(() => {
        setQuality(selectedValue);
    }, [selectedValue]);
    const handlequality = (value) => {
        setQuality(value);
        onselect(value);
    };
    const descriptions = {
        'Standard quality': 'Standard media uses less storage and are faster to send',
        'HD quality': 'HD media is slower to send, can be 6 times larger',
    };
    return (
        <>
            <div className="w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 ml-[64px] flex absolute">
                <div className="newchat-inner flex overflow-hidden box-border relative z-[300] w-full h-full">
                    <div className="overflow-hidden w-full h-full flex flex-col bg-[#fff] ">
                        <header className='min-h-[64px] text-[#3b4a54] pr-[20px] pl-[20px] flex items-center bg-[#fff] '>
                            <div className="w-full flex items-center text-[#111b21]">
                                <div className="w-[54px]">
                                    <Link onClick={close}>
                                        <span>
                                            <img src="assets/Images/ArrowLeft.svg" alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="overflow-hidden w-full max-h-[46px] mt-[-4px] text-[1rem] ">
                                    <span className='leading-[32px] text-inherit'>Media upload quality</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] py-[20px] px-[30px] relative shadow-custom bg-[white] ">
                                <div className="flex flex-col justify-start items-start ">
                                    {['Standard quality', 'HD quality'].map((option) => (


                                        <label htmlFor="" className='min-h-[56px] py-[18px]  flex items-center text-[1rem] '>
                                            <div className="flex ">
                                                <div className="m-[5px]">
                                                    <input
                                                        type="radio"
                                                        name="quality"
                                                        value={option}
                                                        onChange={() => handlequality(option)}
                                                        checked={quality === option}
                                                        className='w-[20px] h-[20px]'
                                                    />    </div>
                                            </div>
                                            <div className="pl-[20px] inline-block leading-[1.25]">
                                                <div className="text-[#3b4a54]">
                                                    {option}
                                                    <div className="text-[#54656f] text-[0.875rem] leading-[1.4286]">{descriptions[option]}</div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}


                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaUploadQuality