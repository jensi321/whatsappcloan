import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ThemeModal from './ThemeModal';
import MediaUploadQuality from './MediaUploadQuality';
import MediaautoDownload from './MediaautoDownload';

const ChatSettingList = ({ close }) => {
    const [theme, setTheme] = useState(false);
    const [mediaQuality, setMediaQuality] = useState(false);
    const [mediaAutoDownload, setMediaAutoDownload] = useState(false)
    const [mediaQualityValue, setMediaQualityValue] = useState('Standard quality');
    const handlemediaQualitySelect = (value) => {
        setMediaQualityValue(value);
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
                                    <span className='leading-[32px] text-inherit'>Chats</span>
                                </div>

                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[white]">
                                <div className="py-[20px]">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden text-ellipsis relative flex-1 ">
                                            <div className="leading-[1.2] text-[teal] text-[.875rem] ">
                                                Display
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[14px] cursor-pointer min-h-[20px] leading-[20px] " onClick={() => setTheme(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1 ">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Theme</div>
                                            <div className="leading-[18px] font-[300] text-[.875rem] text-[#667781]">System default</div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[14px] cursor-pointer min-h-[20px] leading-[20px] ">
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1 ">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Wallpaper</div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[10px] px-[30px] relative shadow-custom bg-[#fff]">
                                <div className="py-[20px]">
                                    <div className="flex items-center">
                                        <div className="overflow-hidden text-ellipsis relative flex-1 ">
                                            <div className="leading-[1.2] text-teal text-[.875rem]">Chat Settings</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[14px] cursor-pointer min-h-[20px] leading-[20px] " onClick={() => setMediaQuality(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1 ">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Media upload quality</div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[14px] cursor-pointer min-h-[20px] leading-[20px] " onClick={() => setMediaAutoDownload(true)}>
                                    <div className="border-b border-[#e9edef] pb-[14px] text-left flex items-center">
                                        <div className="flex-1 ">
                                            <div className="text-[#3b4a54] text-[.9375rem] ">Media auto-download</div>
                                        </div>
                                        <div className="text-[#54656f]">
                                            <span><img src="assets/Images/ArrowRight.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer py-[19px] flex text-[.9375rem] leading-[20px] min-h-[20px] leading-[20px] ">
                                    <div className=" shrink grow  ">Spell check
                                        <div className='text-[#54656f] text-[.875rem] leading-[1.4286]'>Check spelling while typing</div>
                                    </div>
                                    <div className="text-[#54656f] ml-[20px] flex items-center mr-[6px] ">
                                        <div className="checkbox w-[30px] flex justify-center relative">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer py-[19px] flex text-[.9375rem] leading-[20px] min-h-[20px] leading-[20px] ">
                                    <div className=" shrink grow  ">Replace text with emoji
                                        <div className='text-[#54656f] text-[.875rem] leading-[1.4286]'>Emoji will replace specific text as you type</div>
                                    </div>
                                    <div className="text-[#54656f] ml-[20px] flex items-center mr-[6px] ">
                                        <div className="checkbox w-[30px] flex justify-center relative">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer py-[19px] flex text-[.9375rem] leading-[20px] min-h-[20px] leading-[20px] ">
                                    <div className=" shrink grow  ">Enter is send
                                        <div className='text-[#54656f] text-[.875rem] leading-[1.4286]'>Enter key will send your message</div>
                                    </div>
                                    <div className="text-[#54656f] ml-[20px] flex items-center mr-[6px] ">
                                        <div className="checkbox w-[30px] flex justify-center relative">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                theme && <Modal show={theme} onHide={() => setTheme(false)}>
                    <ThemeModal close={() => setTheme(false)}/>
                    </Modal>
            }
            {
                mediaQuality && <MediaUploadQuality close={() => setMediaQuality(false)} selectedValue={mediaQualityValue} onselect={handlemediaQualitySelect} />
            }
            {
                mediaAutoDownload && <MediaautoDownload close={() => setMediaAutoDownload(false)}/>
            }
        </>
    )
}

export default ChatSettingList