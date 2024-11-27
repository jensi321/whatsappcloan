import React from 'react';
import { Link } from 'react-router-dom';
import { community } from '../data';

const CommunityListItems = ({ onCommunitySelect }) => {
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = date.toLocaleTimeString([], options);

        if (date.toDateString() === now.toDateString()) {
            return `${timeString}`;
        } else if (date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
            return `Yesterday`;
        } else {
            return date.toLocaleDateString();
        }
    };

    return (
        <>
            {community.map((i, index) => (
                <div className="" key={index}>
                    <div className="h-[10px] bg-[#f0f2f5]"></div>
                    <div className="hover:bg-[#f5f6f6] bg-[white] flex flex-row h-[72px] border-b border-[#e9edef] relative box-border ">
                        <div className="flex">
                            <div className="pr-[15px] pl-[13px] flex items-center mt-[-1px]">
                                <div className="h-[49px] w-[49px] relative overflow-hidden rounded-[12px] bg-[#dfe5e7]">
                                    <span className='h-full w-full flex justify-center items-center'>
                                        <img src={i.image} alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex grow overflow-hidden text-[17px] text-[#111b21] ">
                                <span className='text-ellipsis font-[500] relative'>{i.name} </span>
                            </div>
                        </div>
                    </div>
                    <div className="hover:bg-[#f5f6f6] bg-[white] flex flex-row h-[72px] relative box-border ">
                        <div className="flex pl-[4px] pr-[5px]">
                            <div className="pr-[15px] pl-[13px] flex items-center mt-[-1px]">
                                <div className="h-[40px] w-[40px] relative rounded-[12px] bg-[#d9fdd3]">
                                    <span className='h-full w-full flex justify-center items-center'>
                                        <img src="assets/Images/Announcements.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#e9edef] flex flex-col grow justify-center pr-[15px] ">
                            <div className="flex items-center ">
                                <div className="flex grow overflow-hidden text-[17px] text-[#111b21] ">
                                    <span>Announcements</span>
                                </div>
                                <div className="mt-[3px] leading -[14px] text-ellipsis max-w-full ml-[6px] text-[12px] text-[#667781]">{formatTimestamp(i.timestamp)}</div>
                            </div>
                            <div className="flex center min-h-[20px] mt-[2px] text-[13px] leading-[20px] text-[#667781]">
                                <div className="overflow-hidden text-[14px] leading-[20px] text-ellipsis ">
                                    {i.lastmsg}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[52px] shadow-shadow-custom flex flex-row hover:bg-[#f5f6f6] bg-white relative">
                        <div className="w-[69px]"></div>
                        <div className="flex flex-col grow justify-center pr-[15px]">
                            <Link className='flex items-center text-left' onClick={() => onCommunitySelect(i)}>
                                <span className='text-[#008069] flex grow overflow-hidden text-[17px] '>View all</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CommunityListItems;