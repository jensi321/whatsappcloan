import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MediaautoDownload = ({ close }) => {
    const [photosChecked, setPhotosChecked] = useState(true);
    const [audioChecked, setAudioChecked] = useState(true);
    const [videosChecked, setVideosChecked] = useState(false);
    const [documentsChecked, setDocumentsChecked] = useState(false);

    const isResetDisabled = !videosChecked && !documentsChecked;

    const resetSettings = () => {
        setPhotosChecked(true);
        setAudioChecked(true);
        setVideosChecked(false);
        setDocumentsChecked(false);
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
                                    <span className='leading-[32px] text-inherit'>Media auto-download</span>
                                </div>
                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="mb-[10px] py-[20px] px-[30px] relative shadow-custom bg-[white]">
                                <div className="pb-[20px] mr-[24px] flex items-center leading-[20px] text-[.875rem]">
                                    <div className="mr-[10px] checkbox">
                                        <input type="checkbox" checked={photosChecked} onChange={() => setPhotosChecked(!photosChecked)} />
                                    </div>
                                    <label className='shrink grow '>Photos</label>
                                </div>
                                <div className="pb-[20px] mr-[24px] flex items-center leading-[20px] text-[.875rem]">
                                    <div className="mr-[10px] checkbox">
                                        <input type="checkbox" checked={audioChecked} onChange={() => setAudioChecked(!audioChecked)} />
                                    </div>
                                    <label className='shrink grow '>Audio</label>
                                </div>
                                <div className="pb-[20px] mr-[24px] flex items-center leading-[20px] text-[.875rem]">
                                    <div className="mr-[10px] checkbox">
                                        <input type="checkbox" checked={videosChecked} onChange={() => setVideosChecked(!videosChecked)} />
                                    </div>
                                    <label className='shrink grow '>Videos</label>
                                </div>
                                <div className="pb-[20px] mr-[24px] flex items-center leading-[20px] text-[.875rem]">
                                    <div className="mr-[10px] checkbox">
                                        <input type="checkbox" checked={documentsChecked} onChange={() => setDocumentsChecked(!documentsChecked)} />
                                    </div>
                                    <label className='shrink grow '>Documents</label>
                                </div>
                                <div className="border-t pt-[20px] border-[#e9edef] text-[#54656f] text-[.875rem] leading-[1.4286]">
                                    Voice messages are always automatically downloaded for the best communication experience.
                                </div>
                            </div>
                            <div className="mb-[10px] pl-[5px] relative shadow-custom bg-[white]">
                                <div className={`flex relative items-center h-[60px] bg-[#fff] ${isResetDisabled ? 'cursor-not-allowed opacity-[.5]' : 'cursor-pointer hover:bg-[#f5f6f6]'}`} onClick={!isResetDisabled ? resetSettings : null}>
                                    <div className="flex justify-center w-[74px] text-[#8696a0]">
                                        <span>
                                            <img src ="assets/Images/ResetDownload.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex flex-1 items-center h-full pr-[30px] overflow-hidden box-border">
                                        <div className="mt-[-4px] overflow-hidden text-ellipsis ">
                                            <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">Reset auto-download settings</div>
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

export default MediaautoDownload