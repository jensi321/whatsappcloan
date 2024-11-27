import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LastSeen from './LastSeen'
import ProfilePhoto from './ProfilePhoto';
import AboutShow from './AboutShow';
import StatusPrivacy from './StatusPrivacy';
import MessageTimer from './MessageTimer';
import GroupsPrivacy from './GroupsPrivacy';
import BlockNumbers from './BlockNumbers';
import AppLock from './AppLock';

const PrivacyList = ({ close }) => {
    const [lastSeen, setLastSeen] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(false);
    const [about, setAbout] = useState(false);
    const [status, setStatus] = useState(false);
    const [messagetimer, setMessageTimer] = useState(false);
    const [groups, setgroups] = useState(false);
    const [blockNumbers, setBlockNumbers] = useState(false);
    const [applock, setapplock] = useState(false);
    const [lastSeenValue, setLastSeenValue] = useState('Everyone');
    const [profilePhotoValue, setProfilePhotoValue] = useState('Everyone');
    const [aboutValue, setAboutValue] = useState('Everyone');
    const [statusValue, setStatusValue] = useState('My contacts');
    const [onlineValue, setOnlineValue] = useState('Everyone');
    const [messagetimerValue, setMessagetimerValue] = useState('Off');
    const [groupsValue, setGroupsValue] = useState('Everyone');

    const handleLastSeenSelect = (value) => {
        setLastSeenValue(value);
    };
    const handleOnlineSelect = (value) => {
        setOnlineValue(value);
    };
    const handleProfilePhotoSelect = (value) => {
        setProfilePhotoValue(value);
    };
    const handleAboutSelect = (value) => {
        setAboutValue(value);
    };
    const handleStatusSelect = (value) => {
        setStatusValue(value);
    };
    const handleMessagetimerSelect = (value) => {
        setMessagetimerValue(value)
    }
    const handleGroupsSelect = (value) => {
        setGroupsValue(value)
    }
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
                                    <span className='leading-[32px] text-inherit'>Privacy</span>
                                </div>

                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-white">
                                <div className="py-[19px]">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden flex-1">
                                            <span className='leading-[1.2] text-teal text-[.875rem] '>Who can see my personal info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setLastSeen(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Last seen and online</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{lastSeenValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setProfilePhoto(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Profile photo</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{profilePhotoValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setAbout(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">About</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{aboutValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setStatus(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Status</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{statusValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] ">
                                    <div className="pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Read receipts</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>If turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <div className="checkbox w-[30px] flex justify-center relative">
                                                <input type="checkbox" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[#fff]">
                                <div className="py-[19px]">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden flex-1">
                                            <span className='leading-[1.2] text-teal text-[.875rem] '>Disappearing messages</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setMessageTimer(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Default message timer</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{messagetimerValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[#fff]">
                                <div className="py-[19px]">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden flex-1">
                                            <span className='leading-[1.2] text-teal text-[.875rem] '>Advanced</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] ">
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Block unknown account messages</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>
                                                    To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.
                                                    <Link to={'https://faq.whatsapp.com/3379690015658337/?cms_platform=web&lang=en'} target='_blank' className='text-[#027eb5]'> Learn more</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <div className="checkbox w-[30px] flex justify-center relative">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] ">
                                    <div className="pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Disable link previews</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>
                                                    To help protect your IP address from being inferred by third-party websites, previews for the links you share in chats will no longer be generated.
                                                    <Link to={'https://faq.whatsapp.com/445453537819972/?cms_platform=android&lang=en'} target='_blank' className='text-[#027eb5]'> Learn more</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <div className="checkbox w-[30px] flex justify-center relative">
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-[10px] pt-[14px] pb-[10px] px-[30px] relative shadow-custom bg-[#fff]">
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setgroups(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Groups</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>{groupsValue}</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setBlockNumbers(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Blocked contacts</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>None</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer pt-[20px] min-h-[20px] leading-[20px] " onClick={() => setapplock(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">App lock</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781] ">
                                                <span>Require password to unlock WhatsApp</span>
                                            </div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {lastSeen && (
                <LastSeen
                    close={() => setLastSeen(false)}
                    onSelect={handleLastSeenSelect}
                    selectedValue={lastSeenValue}
                    selectedOnline={onlineValue}
                    onSelectOnline={handleOnlineSelect}
                />
            )}


            {profilePhoto && (
                <ProfilePhoto
                    close={() => setProfilePhoto(false)}
                    onSelect={handleProfilePhotoSelect}
                    selectedValue={profilePhotoValue} // Pass the selected value for profile photo
                />
            )}

            {about && (
                <AboutShow
                    close={() => setAbout(false)}
                    onSelect={handleAboutSelect}
                    selectedValue={aboutValue}
                />
            )
            }

            {status && (
                <StatusPrivacy
                    close={() => setStatus(false)}
                    onSelect={handleStatusSelect}
                    selectedValue={statusValue}
                />
            )
            }

            {
                messagetimer && (
                    <MessageTimer
                        close={() => setMessageTimer(false)}
                        onSelect={handleMessagetimerSelect}
                        selectedValue={messagetimerValue}
                    />
                )
            }
            {
                groups && (
                    <GroupsPrivacy
                        close={() => setgroups(false)}
                        onSelect={handleGroupsSelect}
                        selectedValue={groupsValue}
                    />
                )
            }
            {
                blockNumbers && (
                    <BlockNumbers
                        close={() => setBlockNumbers(false)} />
                )
            }
            {
                applock && (
                    <AppLock
                        close={() => setapplock(false)} />
                )
            }
        </>
    )
}

export default PrivacyList