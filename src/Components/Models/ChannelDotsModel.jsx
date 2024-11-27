import React from 'react'
import { Link } from 'react-router-dom'

const ChannelDotsModel = () => {
  return (
    <>
           <span >
                                            <div className="absolute z-[10000] max-w-[340px] py-[9px] text-left bg-[white] rounded-[3px] shadow-shadow1 right-[17px] top-[77px] scale-[1] opacity-[1]">
                                                <ul>
                                                    <div>
                                                        <div>
                                                            <li className='hover:bg-[#f5f6f6]'>
                                                                <Link className='borderr-box flex items-center pr-[58px] pl-[24px] text-[14.5px] leading-[14.5px] text-[#3b4a54] h-[40px] relative overflow-hidden text-ellipsis '>
                                                                    <span>Channel info</span>
                                                                </Link>
                                                            </li>
                                                            <li className='hover:bg-[#f5f6f6]'>
                                                                <Link className='borderr-box flex items-center pr-[58px] pl-[24px] text-[14.5px] leading-[14.5px] text-[#3b4a54] h-[40px] relative overflow-hidden text-ellipsis '>
                                                                    <span>Select Updates</span>
                                                                </Link>
                                                            </li>
                                                            <li className='hover:bg-[#f5f6f6]'>
                                                                <Link className='borderr-box flex items-center pr-[58px] pl-[24px] text-[14.5px] leading-[14.5px] text-[#3b4a54] h-[40px] relative overflow-hidden text-ellipsis '>
                                                                    <span>Close channel</span>
                                                                </Link>
                                                            </li>
                                                            <li className='hover:bg-[#f5f6f6]'>
                                                                <Link className='borderr-box flex items-center pr-[58px] pl-[24px] text-[14.5px] leading-[14.5px] text-[#3b4a54] h-[40px] relative overflow-hidden text-ellipsis '>
                                                                    <span>Report</span>
                                                                </Link>
                                                            </li>
                                                            <li className='hover:bg-[#f5f6f6]'>
                                                                <Link className='borderr-box flex items-center pr-[58px] pl-[24px] text-[14.5px] leading-[14.5px] text-[#3b4a54] h-[40px] relative overflow-hidden text-ellipsis '>
                                                                    <span>Unfollow</span>
                                                                </Link>
                                                            </li>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </span>
    </>
  )
}

export default ChannelDotsModel