import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MessageTimer = ({ close, onSelect, selectedValue }) => {
    const [currentValue, setCurrentValue] = useState(selectedValue);
    useEffect(() => {
        setCurrentValue(selectedValue);
    }, [selectedValue]);
    const handleChange = (value) => {
        setCurrentValue(value);
        onSelect(value);
    };

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
                                    <span className='leading-[32px] text-inherit'>Default message timer</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[#fff]">
                                <div className="my-[20px] text-[teal] text-[.875rem] leading-[20px]">Start new chats with disappearing messages</div>
                                <div className="">
                                    {['24 hours', '7 days', '90 days', 'Off'].map((option) => (
                                        <div className="py-[18px] text-[100%] cursor-pointer" key={option}>
                                            <div className="flex flex-row items-center justify-start"  >
                                                <div className="shrink flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="lastseen"
                                                        value={option}
                                                        onChange={() => handleChange(option)}
                                                        checked={currentValue === option}
                                                        className='w-[20px] h-[20px]'
                                                    />
                                                </div>
                                                <div className="grow shrink pl-[20px] ">
                                                    <div className="inline-block text-[1rem] flex items-center leading-[20px]">{option}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="my-[16px] flex-col flex items-start justify-start">
                                    <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">
                                        When turned on, all new individual chats will start with disappearing messages set to the duration you select. This setting will not affect your existing chats.
                                    </div>
                                    <Link to={'https://faq.whatsapp.com/673193694148537?lang=en'} className='mt-[25px] text-[.875rem] text-[#027eb5]'>Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageTimer