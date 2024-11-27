import React from 'react';
import { Link } from 'react-router-dom';

const CommunityViewAll = ({ close, community }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const timeString = date.toLocaleTimeString([], options);

    if (date.toDateString() === now.toDateString()) {
      return `${timeString}`;
    } else if (date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
      return `Yesterday`;
    } else {
      return date.toLocaleDateString();
    }
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
                  <span className='leading-[32px] text-inherit'>{community ? community.name : 'Community'}</span>
                </div>
                <div className="ml-[4px] flex items-center">
                  <div className="rounded-[50%] relative ">
                    <div className="p-[8px] flex items-center">
                      <span>
                        <img src="assets/Images/Dots.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
              <div className="mb-[10px] relative bg-[white]">
                <div className="relative">
                  <div className="">
                    <div className="h-[65px] pl-[30px] relative flex flex-row ">
                      <div className="flex">
                        <div className="flex items-center">
                          <div className="w-[40px] h-[40px] overflow-hidden justify-center flex flex-row rounded-[12px] bg-[#d9fdd3]">
                            <div className="h-full w-full flex justify-center items-center">
                              <img src="assets/Images/Announcements.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pr-[28px] w-full ml-[17px] border-b border-[#e9edef] flex items-center relative justify-center flex-col">
                        <div className="flex items-center w-full">
                          <div className="flex grow overflow-hidden text-[17px] text-[#111b21] ">
                            <span className="overflow-hidden text-ellipsis relative grow">
                              Announcements
                            </span>
                          </div>
                          <div className="overflow-hidden leading-[14px] text-ellipsis ml-[6px] text-[12px] text-[#667781]">
                          {formatTimestamp(community.timestamp)}
                          </div>
                        </div>
                        <div className="flex w-full items-center min-h-[20px] mt-[2px] text-[13px] leading-[20px] text-[#667781]">
                          <div className="grow overflow-hidden text-[14px] leading-[20px] text-left text-ellipsis ">
                            <div className="flex flex-start">
                              <span>{community.lastmsg}</span>
                            </div>
                          </div>
                          <div className="text-[#667781] leading-[20px] text-[12px] ml-[6px] ">
                            <span>
                              <img src="assets/Images/Pin.svg" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[17px] pl-[30px] pr-[30px] relative">
                    <div className="mb-[8px] ">
                      <div className="flex items-center">
                        <div className="overflow-hidden text-ellipsis relative flex-1">
                          <div className="text-[.9375rem] text-[#667781] leading-[1.5]">Groups</div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-[-30px]">
                      <div className="h-[65px] pl-[30px] flex flex-row relative">
                        <div className="flex">
                          <div className="flex items-center">
                            <div className="w-[40px] h-[40px] overflow-hidden rounded-[50%] flex items-center justify-center bg-[#00a884] flex-row ">
                              <span className='w-[60%] h-[60%] flex items-center justify-center'>
                                <img src="assets/Images/NewGroups.svg" alt="" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pr-[28px] ml-[17px] border-b border-[#e9edef] flex flex-col grow justify-center grow">
<div className="flex items-center">
  <div className="flex grow overflow-hidden text-[17px] text-[#111b21] text-left">Add group</div>
</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[36px] mx-[30px] text-center relative">
                    <div className="flex items-center justify-center flex-row">
                      <div className="text-[#54656f] text-[.875rem] leading-[1.486]">
                      Groups added to the community will appear here. Community members can join these groups.
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
  );
};

export default CommunityViewAll;