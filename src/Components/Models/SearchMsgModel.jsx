import React from 'react'
import { Link } from 'react-router-dom'

function SearchMsgModel({ search, close }) {
    return (
        <>
            <div className={`h-full border-l border-solid border-[#d1d7db] w-full z-[100] grow relative  ${search === true ? 'chatlist' : ''}`}>
                <div className="w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 flex absolute">
                    <div className=" flex overflow-hidden box-border relative z-[300] w-full h-full">
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
                                        <Link className='mr-[10px] w-[20px] h-[20px]'>
                                            <img src="assets/Images/calender.svg" alt="" />
                                        </Link>
                                        <div className="bg-[#f0f2f5] rounded-[8px] flex items-center justify-center w-full h-[35px] pl-[10px]">
                                            <button className=' flex items-center justify-center  '>
                                                <img src="assets/Images/search.svg" className='w-[24px] h-[24px]' alt="" />
                                            </button>
                                            <input type="text" className='ml-[30px] bg-transparent w-full text-[15px] outline-none' placeholder='Search' />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-y z-[1] relative grow bg-[#fff]">
                                    <div className="h-auto py-[72px] flex-col box-border flex items-center text-[#8696a0] text-center justify-start pl-[50px] pr-[50px] ">
                                        <div className="leading-[20px] text-[.875rem] text-[#667781]">
                                            <span>Search for messages within </span>
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

export default SearchMsgModel