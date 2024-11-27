import React from 'react'
import { FindChannelList } from '../data'

const AllFindChannelMsgList = () => {
  return (
    <>
               {
                FindChannelList.map((i, index) => {
                    return (
                        <div className="item z-[4] h-[72px] " key={index}>
                            <div className="h-[72px] shrink flex flex-row justify-start grow ">
                                <div className="flex items-center px-[16px] flex-row ">
                                    <div className="w-[49px] h-[49px] border border-solid border-[#e9edef] overflow-hidden rounded-[50%] ">
                                        <img src={i.image} className='w-full'  alt="" />
                                    </div>

                                </div>
                                <div className="py-[8px]  border-b border-[#e9edef] justify-center w-full flex-col flex  flex-[1]">
                                    <div className="flex items-center justify-start flex-row ">
                                        <span className='text-[#111b21] leading-[1.2941] flex text-[1.0625rem] '>{i.name}</span>
                                        <span className='ml-[5px]'>
                                            <img src="assets/Images/blutick.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-ellipsis">
                                        <span className='text-[#54656f] text-[.875rem] leading-[1.4286]'>{i.subscribers} followers</span>
                                    </div>
                                </div>
                                <div className="py-[8px] px-[16px] min-w-[48px] border-b border-[#e9edef] justify-center flex-col flex">
                                    <button className='border border-[#e9edef] rounded-[1000px] hover:shadow-shadow1 '>
                                        <div className="py-[10px] px-[16px] flex justify-center items-center flex-row ">
                                            <div className="leading-[1.2] text-[teal] text-[.875rem]">Follow</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
  )
}

export default AllFindChannelMsgList