import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NotificationList = ({ close }) => {
    // State to manage the checked status of the checkboxes
    const [messageNotifications, setMessageNotifications] = useState(false);
    const [showPreviews, setShowPreviews] = useState(false);
    const [showReactions, setShowReactions] = useState(false); // New state for reaction notifications

    // Handler for message notifications checkbox
    const handleMessageNotificationsChange = () => {
        setMessageNotifications(!messageNotifications);
        // Enable show previews and reactions when message notifications are checked
        if (!messageNotifications) {
            setShowPreviews(true);
            setShowReactions(true);
        } else {
            setShowPreviews(false);
            setShowReactions(false);
        }
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
                                    <span className='leading-[32px] text-inherit'>Notification</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[white]">
                                <div className="py-[19px] ">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden text-ellipsis relative flex-1">
                                            <div className="leading-[1.2] text-teal text-[.875rem]">Messages</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-[#e9edef] ">
                                    <div className="py-[19px] flex text-[.975rem] leading-[20px] ">
                                        <div className="shrink grow">
                                            Message notifications
                                            <div className='text-[#54656f] text-[.875rem] leading-[1.4286]'>Show notifications for new messages</div>
                                        </div>
                                        <div className="text-[#54656f] ml-[20px] flex items-center">
                                            <div className="checkbox w-[30px] flex justify-center relative">
                                                <input
                                                    type="checkbox"
                                                    checked={messageNotifications}
                                                    onChange={handleMessageNotificationsChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-[19px] flex text-[.975rem] leading-[20px] ">
                                    <div className={`shrink ${!messageNotifications && 'text-[#8696a0] opacity-[.6]'} grow `}>Show previews</div>
                                    <div className={`ml-[20px] checkbox flex items-center ${!messageNotifications && 'opacity-[.9]'}`}>
                                        <input
                                            type="checkbox"
                                            className={`${!messageNotifications && 'disabled'}`}
                                            disabled={!messageNotifications} // Enable/disable based on messageNotifications
                                            checked={showPreviews}
                                            onChange={() => setShowPreviews(!showPreviews)} // Toggle show previews
                                        />
                                    </div>
                                </div>
                                <div className="py-[19px] flex text-[.975rem] leading-[20px] ">
                                    <div className={`shrink ${!messageNotifications && 'text-[#8696a0] opacity-[.6]'} grow `}>Show reaction notifications</div>
                                    <div className={`ml-[20px] checkbox flex items-center ${!messageNotifications && 'opacity-[.9]'}`}>
                                        <input
                                            type="checkbox"
                                            className={`${!messageNotifications && 'disabled'}`}
                                            disabled={!messageNotifications} // Enable/disable based on messageNotifications
                                            checked={showReactions}
                                            onChange={() => setShowReactions(!showReactions)} // Toggle show reactions
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[10px] pt-[14px] pb-[10px] px-[30px] relative shadow-custom bg-[white]">
                                <div className="py-[19px] flex text-[.9375rem] leading-[20px]">
                                    <label htmlFor="" className='shrink grow '>
                                        Background sync
                                        <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Get faster performance by syncing messages in the background</div>
                                    </label>
                                    <div className="ml-[20px] checkbox flex items-center ">
                                        <input
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                                <div className="py-[19px] flex text-[.9375rem] leading-[20px]">
                                    <label htmlFor="" className='shrink grow '>
                                    Incoming sounds
                                        <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Play sounds for incoming messages</div>
                                    </label>
                                    <div className="ml-[20px] checkbox flex items-center ">
                                        <input
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                                <div className="py-[19px] flex text-[.9375rem] leading-[20px]">
                                    <label htmlFor="" className='shrink grow '>
                                    Outgoing sounds
                                        <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Play sounds for outgoing messages</div>
                                    </label>
                                    <div className="ml-[20px] checkbox flex items-center ">
                                        <input
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationList;