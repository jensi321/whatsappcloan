import React from 'react'
import { Link } from 'react-router-dom'

const BlockNumbers = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>Blocked contacts</span>
                                </div>
                            </div>
                        </header>
                        <div className="border-b border-[#e9edef]">
                            <div className="relative flex items-center h-[60px] bg-[#fff]">
                                <div className="flex justify-center w-[47px] text-[#8696a0]">
                                    <span>
                                        <img src="assets/Images/addBlock.svg" alt="" />
                                    </span>
                                </div>
                                <div className="box-border flex flex-1 items-center h-full pr-[30px] ">
                                    <div className="mt-[-4px] text-ellipsis overflow-hidden ">
                                        <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">Add blocked contact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="h-full p-[50px] justify-center flex-col box-border flex items-center text-[#8696a0] text-center grow ">
                                <div className="mt-[-30px] w-[164px] h-[164px] mb-[32px] rounded-[50%] flex items-center justify-center text-[white] bg-[#f8f7fa] ">
                                    <span>
                                        <img src="assets/Images/Block.svg" alt="" />
                                    </span>
                                </div>
                                <div className="mb-[18px]">
                                    No blocked contacts yet
                                </div>
                                <div className="leading-[20px] text-[.875rem] text-[#667781]">
                                    <span>Blocked contacts will no longer be able to call you or send you messages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockNumbers