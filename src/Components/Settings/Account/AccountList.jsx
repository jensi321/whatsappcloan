import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SecurityNotification from './SecurityNotification';
import Request from './Request';

const AccountList = ({ close }) => {

    const [security, setSecurity] = useState(false);
    const [request, setRequest] = useState(false);

    const items = [
        {
            img: 'assets/Images/Security.svg',
            desc: 'Security notifications',
            action: () => setSecurity(true)
        },
        {
            img: 'assets/Images/Request.svg',
            desc: 'Request account info',
            action: () => setRequest(true)
        },
        {
            img: 'assets/Images/HowDelete.svg',
            desc: 'How to delete my account',   
            action: () =>  window.open('https://faq.whatsapp.com/2138577903196467/?cms_platform=android&lang=en', '_blank')
        },
    ]
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
                                    <span className='leading-[32px] text-inherit'>Account</span>
                                </div>

                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
                            <div className="overflow-auto flex grow">
                                <div className="w-full overflow-y-auto flex-col flex grow">
                                    <div className="shrink flex-col items-stretch justify-start">

                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <button className='w-full overflow-hidden flex grow hover:bg-[#f5f6f6]' key={index} onClick={item.action}>
                                                        <div className="flex relative grow ">
                                                            <div className="min-h-[60px] shrink box-border flex items-stretch flex-row justify-start grow">
                                                                <div className="py-[8px] min-w-[40px] justify-center flex items-center px-[16px]">
                                                                    <span>
                                                                        <img src={item.img} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="py-[8px] flex-1 justify-center flex-col box-border flex items-stretch pr-[16px] ">
                                                                    <div className="shrink flex flex-row justify-start ">
                                                                        <div className="grow overflow-hidden shrink box-border text-left">
                                                                            <span className=' text-[#111b21] leading-[1.2941] text-[1.08625rem]'>{item.desc}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>

                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {security && <SecurityNotification close={() => setSecurity(false)} />}
            {request && <Request close={() => setRequest(false)} />}
        </>
    )
}

export default AccountList