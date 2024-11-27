import React from 'react'
import { Link } from 'react-router-dom'

const NewCommunities = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>New community</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1]">
                            <div className="shrink relative bg-[#fff] shadow-custom grow ">
                                <div className="flex flex-nowrap flex-col flex items-center justify-start h-full">
                                    <div className="flex-col h-full flex items-center justify-start">
                                        <div className="mt-[2em]">
                                            <span>
                                                <img src="assets/Images/CreateCommunity.svg" alt="" />
                                            </span>
                                        </div>
                                        <h2 className='mt-[1em] max-w-[20em] text-[1.5rem] mx-auto text-center text-[#111b21] leading-[1.5] font-bold'>Create a new community</h2>
                                        <div className="mt-[8px] max-w-[20em] shrink mx-auto flex flex-col items-center justify-start ">
                                            <p className='text-[#8696a0] text-center text-[.875rem] leading-[1.4286]'>Bring together a neighborhood, school or more. Create topic-based groups for members, and easily send them admin announcements.</p>
                                            <div className="my-[8px] shrink justify-center flex items-center">
                                                <Link className='text-center text-[.875rem] leading-[1.4286] '><p className='text-[#00a884]'>See example communities</p></Link>
                                                <span className=''>
                                                    <img src="assets/Images/AngleRight.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-[32px] shrink flex-col flex items-start justify-start ">
                                        <div className="h-[46px] w-[46px] mt-[3em] rounded-[50%] shadow-custom justify-center mx-auto font-[500] flex items-center bg-[#00a884]">
                                            <span><img src="assets/Images/ArrowRightWhite.svg" alt="" /></span>
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

export default NewCommunities