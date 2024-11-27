import React from 'react'
import { userList } from '../data';
import { Link } from 'react-router-dom';

const NewGroups = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>Add group members</span>
                                </div>
                            </div>
                        </header>

                        <div className="flex flex-col">
                            <div className="pb-[12px] pt-[26px] px-[34px] bg-[white]">
                                <div className="">
                                    <div className="max-h-[200px] border-b border-[#e9edef] min-h-[20px] w-full pt-[6px] px-[2px] text-[.9375rem] relative leading-[20px] ">
                                        <div className="">
                                            <input type="text" className='py-[2px] text-[.9375rem] leading-[22px] w-full outline-none' placeholder='Search name or number' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">

                            <div className="">
                                <div className="h-[600px]  relative">
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


        </>
    )
}

export default NewGroups