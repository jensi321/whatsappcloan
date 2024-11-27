import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userList } from '../data'
import NewCommunities from '../Communities/NewCommunities';
import NewGroups from './NewGroups';

const NewChat = ({ close }) => {
    const [isNewComOpen, setIsNewComOpen] = useState(false);
    const [isNewGroupOpen, setIsNewGroupOpen] = useState(false);

    const closeNewGroup = () => {
        setIsNewGroupOpen(false);
    }
    const openNewGroup = () => {
        setIsNewGroupOpen(true);
    }
    const openNewCom = () => {
        setIsNewComOpen(true);
    };
    const closeNewCom = () => {
        setIsNewComOpen(false);
    };

    const sortedUserList = userList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    const groupedUsers = sortedUserList.reduce((acc, user) => {
        const firstLetter = user.name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(user);
        return acc;
    }, {});
    return (
        <>
            <div className="w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 ml-[64px] flex absolute">
                <div className="newchat-inner flex overflow-hidden box-border relative z-[300] w-full h-full">
                    <div className="overflow-hidden w-full h-full flex flex flex-col bg-[#fff] ">
                        <header className='min-h-[64px] text-[#3b4a54] pr-[20px] pl-[20px] flex items-center bg-[#fff] '>
                            <div className="w-full flex items-center text-[#111b21]">
                                <div className="w-[54px]">
                                    <Link onClick={close}>
                                        <span >
                                            <img src="assets/Images/ArrowLeft.svg" alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="overflow-hidden max-h-[46px] mt-[-4px] text-[1rem] ">
                                    <span className='leading-[32px] text-inherit'>New chat</span>
                                </div>
                            </div>
                        </header>

                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="h-[49px] w-full flex items-center px-[12px] z-[100] relative box-border">
                                    <div className="bg-[#f0f2f5] rounded-[8px] flex items-center justify-center w-full h-[35px] pl-[10px]">
                                        <button className=' flex items-center justify-center  '>
                                            <img src="assets/Images/search.svg" className='w-[24px] h-[24px]' alt="" />
                                        </button>
                                        <input type="text" className='ml-[30px] bg-transparent w-full text-[15px] outline-none' placeholder='Search name or number' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
                            <div className="">
                                <div className="w-full box-border flex relative ">
                                    <Link className="min-h-[60px] w-full shrink-1 flex items-stretch flex-row jstify-start grow-1 hover:bg-[#f5f6f6]" onClick={openNewGroup}>
                                        <div className="py-[8px] min-w-[40px] flex items-center pl-[13px] flex-col pr-[16px] ">
                                            <div className="w-[48px] h-[48px] overflow-hidden rounded-[100%] bg-[#00a884] flex justify-center items-center flex-row">
                                                <span className='w-[60%] h-[60%] flex items-center justify-center'>
                                                    <img src="assets/Images/NewGroups.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="py-[8px] w-full justify-center flex-col border-b border-[#e9edef] border-box flex items-stretch pr-[16px] ">
                                            <div className="shrink flex flex-row items-center justify-start ">
                                                <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem]">New group</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="">
                                <div className="w-full box-border flex relative ">
                                    <Link className="min-h-[60px] w-full shrink-1 flex items-stretch flex-row jstify-start grow-1 hover:bg-[#f5f6f6]" onClick={openNewCom}>
                                        <div className="py-[8px] min-w-[40px] flex items-center pl-[13px] flex-col pr-[16px] ">
                                            <div className="w-[48px] h-[48px] overflow-hidden rounded-[100%] bg-[#00a884] flex justify-center items-center flex-row">
                                                <span className='w-[60%] h-[60%] flex items-center justify-center'>
                                                    <img src="assets/Images/NewCommunity.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="py-[8px] w-full justify-center flex-col border-b border-[#e9edef] border-box flex items-stretch pr-[16px] ">
                                            <div className="shrink flex flex-row items-center justify-start ">
                                                <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem]">New Community</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="">
                                <div className="h-[600px]  relative">

                                    <div className="z-[244] h-[72px] w-full">
                                        <div className="overflow-hidden h-[72px] bg-[#fff] w-full relative">
                                            <div className="h-[72px] uppercase box-border pl-[32px] pb-[15px] pt-[30px] text-teal text-[1rem]">Contacts on WhatsApp</div>
                                        </div>
                                    </div>

                                    <div className="z-[244] h-[72px] w-full">
                                        <div className="flex  relative flex-row h-[72px] bg-[#fff] hover:bg-[#f5f6f6]">
                                            <div className="flex">
                                                <div className="flex items-center pr-[15px] pl-[13px]">
                                                    <div className="h-[49px] w-[49px] rounded-[50%] overflow-hidden relative">
                                                        <img src="assets/Images/user.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col grow justify-center pr-[15px] border-t border-[#e9edef]">
                                                <div className="flex items-center ">
                                                    <div className="flex overflow-hidden text-[17px] text-[#111b21] ">
                                                        <span>Lucas</span>
                                                        <span className='pl-[4px]'>(You)</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center min-h-[20px] mt-[2px] text-[13px] leading-[20px] text-[#667781]">
                                                    <div className="text-[14px] leading-[20px] text-ellipsis overflow-hidden">
                                                        Message yourself
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {Object.keys(groupedUsers).sort().map(letter => (
                                        <div key={letter}>
                                            <div className="z-[244] h-[72px] w-full">
                                                <div className="overflow-hidden h-[72px] bg-[#fff] w-full relative">
                                                    <div className="h-[72px] uppercase box-border pl-[32px] pb-[15px] pt-[30px] text-teal text-[1rem]">{letter}</div>
                                                </div>
                                            </div>
                                            {groupedUsers[letter].map(user => (
                                                <div className="z-[244] h-[72px] w-full" key={user.id}>
                                                    <div className="flex relative flex-row h-[72px] bg-[#fff] hover:bg-[#f5f6f6]">
                                                        <div className="flex">
                                                            <div className="flex items-center pr-[15px] pl-[13px]">
                                                                <div className="h-[49px] w-[49px] rounded-[50%] overflow-hidden relative">
                                                                    <img src={user.avatar} alt={user.name} className="w-full h-full" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-[8px] w-full justify-center flex-col border-b border-[#e9edef] border-box flex items-stretch pr-[16px] ">
                                                            <div className="text-[17px] text-[#111b21]">{user.name}</div>
                                                            <div className="text-[14px] text-[#667781]">{user.description}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {isNewComOpen && <NewCommunities close={closeNewCom} />}
            {isNewGroupOpen && <NewGroups close={closeNewGroup} />}
        </>
    )
}

export default NewChat