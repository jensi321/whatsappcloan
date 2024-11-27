import React from 'react'
import { Link } from 'react-router-dom'

const ChatListDotsModel = ({ openNewGroup }) => {
    
  
  return (
    <>
    <span >
                                                <div className="absolute block z-[10000] scale-100 opacity-100 top-[72px] left-[460px]  max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                                    <ul>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'  onClick={openNewGroup} >New group</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Starred messages</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Select chats</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center pr-[58px] pl-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Log out</Link>
                                                        </li>
                                                        <hr className='border-t border-solid border-[#e9edef] mx-[1px] my-[4px]' />
                                                        <li>
                                                            <Link className='relative overflow-hidden text-ellipsis	nowrap flex items-center  px-[24px] text-[14.5px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'>Get WhatsApp for Windows</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span></>
  )
}

export default ChatListDotsModel