import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ChannelDotsModel from '../Models/ChannelDotsModel';

const ChannelMsgHistory = () => {
    const [isDotsMenu, setIsDotsMenu] = useState(false);
    const [isNotificationOn, setIsNotificationOn] = useState(false);
    // Create refs for the menus
    const dotsMenuRef = useRef(null);



    const toggleDotsMenu = () => {
        setIsDotsMenu(!isDotsMenu);
    };

    const toggleNotification = () => {
        setIsNotificationOn(!isNotificationOn); // Toggle notification state
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
                setIsDotsMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className=" chat-history h-full border-l border-solid border-[#d1d7db] w-full z-[100] grow relative">
                <div className="flex flex-col h-full bg-[#efeae2] ">
                    <div className="w-full h-full top-0 left-0 absolute bg-img opacity-[0.4]"></div>
                    {/* Header */}
                    <header className='relative z-[1000] border-box flex items-center w-full h-[64px] px-[16px] py-[10px] bg-[#f0f2f5]'>
                        <div className="-mt-[1px] pr-[15px]">
                            <div className="h-[40px] w-[40px] rounded-[50%] relative " >
                                <div className="w-full h-full flex justify-center">
                                    <span>
                                        <img src="assets/Images/single.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col grow justify-center ">
                            <div className="flex items-start mt-[-1px] ">
                                <div className="flex grow overflow-hidden flex-col text-[16px] leading-[21px] color-[#111b21] text-left text-ellipsis	">
                                    <div className="inline-flex items-center">
                                        <span className='text-ellipsis	inline-block relative grow '>Channels Name</span>

                                    </div>
                                </div>
                            </div>
                            <div className="min-h-[20px] leading-[1.5385] flex text-[.8125rem] items-start text-[#667781]">
                                <span className='text-ellipsis	inline-block relative grow '>2M followers</span>
                            </div>
                        </div>
                        <div className="ml-[20px] ">
                            <div className="flex items-center">
                                <div className=" rounded-[50%] relative">
                                    <Link className="flex items-center p-[8px]" onClick={toggleNotification}>
                                        <span>
                                            <img src={isNotificationOn ? "assets/Images/notificationon.svg" : "assets/Images/notificationoff.svg"} alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="pl-[10px] ">
                                    <Link className={`flex items-center p-[8px] rounded-[50%] overflow-hidden ${isDotsMenu && 'bg-[#0b141a1a]'}`} onClick={toggleDotsMenu} ref={dotsMenuRef}>
                                        <span>
                                            <img src="assets/Images/dots.svg" alt="" />
                                        </span>
                                    </Link>
                                    {isDotsMenu && (
                                     <ChannelDotsModel/>
                                    )}

                                </div>
                            </div>

                        </div>
                    </header>

                    {/* Chat */}
                    <div className="z-[1] relative oreder-2 flex-[1]">
                        <div className="">
                            <div className="w-full overflow-x-[hidden] overflow-y-auto h-full top-0 z-[100] flex-col border-box flex left absolute">
                                <div className="flex-1 min-h-[12px]"></div>
                                <div className="pb-[8px] flex-initial">
                                    <div className="flex flex-row justify-center mb-[12px] px-[9%]">
                                        <div className="mb-0 border-box inline-block flex-none max-w-[100%] pt-[5px] px-[12px] pb-[6px] text-[12.5px] leading-[21px] rounded-[7.5px] text-[#54656f] text-center bg-[#fffffff2] shadow-custom">
                                            <span>Today</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <div className="mb-[12px] relative">
                                                <div className="w-[480px] mx-auto items-start px-[63px] flex flex-col ">
                                                    <div className="max-w-full relative text-[14.2px] leading-[19px] text-[#111b21] rounded-[7.5px]">
                                                        <div className="bg-white shadow-custom relative z-[200] rounded-[7.5px]">
                                                            <div className="pb-[8px] pt-[6px] width-[480px] pl-[9px] pr-[7px]">
                                                                <div className="">
                                                                    <div className="">
                                                                        <span>
                                                                            <span className="block">Never stop doing your best just because someone doesn't give you credit.</span>
                                                                            <span className='block'>&nbsp;</span>
                                                                            <span>Good Evening Dear Students</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ChannelMsgHistory