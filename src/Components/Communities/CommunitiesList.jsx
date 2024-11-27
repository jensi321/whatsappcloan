import React, { useState } from 'react';
import NewCommunities from './NewCommunities';
import CommunityListItems from '../Items/CommunityListItems';
import CommunityViewAll from './CommunityViewAll';

const CommunitiesList = () => {
    const [isNewComOpen, setIsNewComOpen] = useState(false);
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const closeNewCom = () => {
        setIsNewComOpen(false);
    };

    const openNewCom = () => {
        setIsNewComOpen(true);
    };

    const handleCommunitySelect = (communityData) => {
        setSelectedCommunity(communityData);
    };

    const closeCommunityViewAll = () => {
        setSelectedCommunity(null); // Clear the selected community when closing
    };

    return (
        <>
            <div className="chatlist">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Communities</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex relative grow opacity-[1]">
                    <div className="">
                        <div className="h-[700px] relative mt-[-1px] ">
                            <div className="z-[19] h-[52px] ">
                                <div className="hover:bg-[#f5f6f6] relative flex flex-row h-[72px] bg-[white] " onClick={openNewCom}>
                                    <div className="flex">
                                        <div className="flex items-center pr-[15px] pl-[13px] mt-[-1px]">
                                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#00a884] rounded-[12px]">
                                                <span>
                                                    <img src="assets/Images/NewCommunity.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col grow justify-center pr-[15px]">
                                        <div className="flex items-center ">
                                            <span className='flex grow overflow-hidden text-[17px] text-[#111b21] '>New community</span>
                                        </div>
                                    </div>
                                </div>
                                <CommunityListItems onCommunitySelect={handleCommunitySelect} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isNewComOpen && <NewCommunities close={closeNewCom} />}
            {selectedCommunity && <CommunityViewAll close={closeCommunityViewAll} community={selectedCommunity} />}
        </>
    );
};

export default CommunitiesList;