import React from 'react'
import { Link } from 'react-router-dom'

const AppLock = ({ close }) => {
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
                                    <span className='leading-[32px] text-inherit'>App lock</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[18px] pt-[14px] pb-[10px] px-[30px] relative shadow-custom  bg-[white]">
                                <div className="mt-[8px] mb-[32px] leading-[1.2] text-[#008069] text-[.875rem]">Use App lock for privacy</div>
                                <div className="mb-[24px] text-[#54656f] text-[.875rem] leading-[1.4286]">
                                    When enabled, you'll need to enter your password to unlock WhatsApp Web. Notifications will not appear when your app is locked. App lock will be turned off when you log out.
                                    <Link to={'https://faq.whatsapp.com/1726618467788240/?cms_platform=web&lang=en'} target="_blank" className='text-[#027eb5]'> Learn more</Link>
                                </div>
                                <div className="py-[19px] flex text-[.9375rem] leading-[20px]">
                                    <label htmlFor="" className='shrink grow'>App lock</label>
                                <div className="flex items-center ml-[20px] checkbox">
                                   
                                        <input type="checkbox" />
                                   
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

export default AppLock