import React from 'react'
import { Link } from 'react-router-dom'

const HelpList = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>Help</span>
                                </div>

                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
                            <div className="help-animation mx-auto"></div>
                            <div className="mb-[32px] justify-center flex flex-row items-start">
                                <div className="text-center leading-[20px] text-[.875rem] text-[#667781]">
                                    Version
                                    <span> 2.3000.1018504748</span>
                                </div>
                            </div>
                            <div className="flex-nowrap flex flex-row items-start ">
                                <div className="overflow-auto flex grow">
                                    <div className="w-full overflow-y-auto flex-col flex grow">
                                        <div className="shrink flex-col flex items-stretch justify-start ">
                                            <button className="w-full overflow-hidden flex cursor-pointer text-start grow hover:bg-[#f5f6f6]">
                                                <div className="cursor-pointer w-full box-borderr flex relative grow">
                                                    <div className="min-h-[60px] shrink box-border flex flex-row justify-start grow">
                                                        <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px] flex-row ">
                                                            <span>
                                                                <img src="assets/Images/HelpCenter.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="py-[8px] flex-1 border-b border-[#e9edef] justify-center flex-col box-border flex items-stretch pr-[16px]">
                                                            <div className="shrink flex items-center flex-row justify-start ">
                                                                <div className="grow overflow-hidden shrink ">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625] ">Help Center</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full overflow-hidden flex cursor-pointer text-start grow hover:bg-[#f5f6f6]">
                                                <div className="cursor-pointer w-full box-borderr flex relative grow">
                                                    <div className="min-h-[60px] shrink box-border flex flex-row justify-start grow">
                                                        <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px] flex-row ">
                                                            <span>
                                                                <img src="assets/Images/ContactUs.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="py-[8px] flex-1 border-b border-[#e9edef] justify-center flex-col box-border flex items-stretch pr-[16px]">
                                                            <div className="shrink flex items-center flex-row justify-start ">
                                                                <div className="grow overflow-hidden shrink ">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625] ">Contact us</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full overflow-hidden flex cursor-pointer text-start grow hover:bg-[#f5f6f6]">
                                                <div className="cursor-pointer w-full box-borderr flex relative grow">
                                                    <div className="min-h-[60px] shrink box-border flex flex-row justify-start grow">
                                                        <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px] flex-row ">
                                                            <span>
                                                                <img src="assets/Images/Tearms.svg" alt="" className='w-[24px] h-[24px]' />
                                                            </span>
                                                        </div>
                                                        <div className="py-[8px] flex-1 border-b border-[#e9edef] justify-center flex-col box-border flex items-stretch pr-[16px]">
                                                            <div className="shrink flex items-center flex-row justify-start ">
                                                                <div className="grow overflow-hidden shrink ">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625] ">Terms and Privacy Policy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full overflow-hidden flex cursor-pointer text-start grow hover:bg-[#f5f6f6]">
                                                <div className="cursor-pointer w-full box-borderr flex relative grow">
                                                    <div className="min-h-[60px] shrink box-border flex flex-row justify-start grow">
                                                        <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px] flex-row ">
                                                            <span>
                                                                <img src="assets/Images/Channelsreports.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="py-[8px] flex-1 border-b border-[#e9edef] justify-center flex-col box-border flex items-stretch pr-[16px]">
                                                            <div className="shrink flex items-center flex-row justify-start ">
                                                                <div className="grow overflow-hidden shrink ">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625] ">Channels reports</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                            <div className="w-full overflow-hidden flex cursor-pointer text-start grow hover:bg-[#f5f6f6]" >
                                                <div className="cursor-pointer w-full box-borderr flex relative grow">
                                                    <div className="min-h-[60px] shrink box-border flex flex-row justify-start grow">
                                                        <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px] flex-row ">
                                                            <span>
                                                                <img src="assets/Images/beta.svg" alt="" className='w-[24px] h-[24px]' />
                                                            </span>
                                                        </div>
                                                        <div className="py-[8px] flex-1 border-b border-[#e9edef] justify-center flex-col box-border flex items-stretch pr-[16px]">
                                                            <div className="shrink flex items-center flex-row justify-start ">
                                                                <div className="grow overflow-hidden shrink ">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625] ">Join the beta</div>
                                                                    <div className="text-[#54656f] text-[.875rem] leading-[1.4286] ">Get new features before they are released. Report bugs using the Contact us form above.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-[8px] border-b border-[#e9edef] min-w-[40px] flex justify-center items-center px-[16px] flex-row ">
                                                            <div className="checkbox">
                                                                <input type="checkbox" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default HelpList