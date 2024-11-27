import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {  channelsList } from '../data'
import { FaAngleDown } from 'react-icons/fa6';

const ChannelMsgItems = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = (index) => {
        setIsMenuOpen(prevIndex => (prevIndex === index ? null : index));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
          
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = date.toLocaleTimeString([], options);

        if (date.toDateString() === now.toDateString()) {
            return `Today at ${timeString}`;
        } else if (date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
            return `Yesterday`;
        } else {
            return date.toLocaleDateString();
        }
    };
  return (
    <>
          {
                channelsList.map((i, index) => {
                    return (
                        <div className={`item  ${i.isRead === false ? 'unread' : ''}`} key={index}>
                            <div className="items-inner relative flex w-full flex-row h-[72px] ">
                                <div className="img-content flex items-center justify-center">
                                    <div className="pl-[13px] pr-[15px] ">
                                        <div className="h-[49px] w-[49px] overflow-hidden rounded-[50%]">
                                            <img src={i.profilePic} alt="" />

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full justify-center items-center pr-[15px] text-content">
                                    <div className="flex items-center justify-between w-full text-left">
                                        <div className="name grow flex ">
                                            <span className='text-[17px] font-[400]'>{i.name}</span>
                                        </div>
                                        <div className="time mt-[3px] ml-[6px] text-[12px] leading-[14px]">{formatTimestamp(i.timestamp)}</div>
                                    </div>
                                    <div className="message mt-[2px] flex items-center w-full justify-between truncate text-[#667781]" >
                                        <span className='truncate '>
                                            {i.lastMessage}
                                        </span>
                                        <span className='flex items-center'>
                                            <div className="messagecount hidden">{i.unreadCount}</div>
                                            <Link className='downarrow hidden text-[#667781] ml-[3px]' onClick={() => toggleMenu(index)} ref={menuRef}>
                                                <FaAngleDown />
                                            </Link>
                                            {
                                                isMenuOpen === index &&
                                                <span>
                                                    <div className="absolute block z-[10000] scale-100 opacity-100 top-[52px] right-[30px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                        <ul>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px]  text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Channel info</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Pin Channel</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Unmute notifications</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Mark as {i.status === 'read' ? 'Unread' : 'Read'}</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Copy Link</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] hover:text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Unfollow</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            }
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


    </>
  )
}

export default ChannelMsgItems