import React from 'react'
import { Link } from 'react-router-dom'
import AllFindChannelMsgList from '../Items/AllFindChannelMsgList'

const FindChanelsList = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>Find channels</span>
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


                        <div className="chat-items h-full overflow-hidden ">
                            <div className="chat-items-inner h-full overflow-y-auto">
                                    <AllFindChannelMsgList/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FindChanelsList