import { Badge } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='w-[64px] h-full border-r border-solid flex items-center justify-center box-border relative z-[200] bg-[#f0f2f5] border-[#e9edef] px-[12px]'>
                <div className="h-full flex-col flex flex-nowrap items-center justify-start shrink ">
                    <div className="shrink h-full grow">
                        <div className="color-[#54656f] h-full">
                            <div className="flex items-start h-full">
                                <span className='flex items-center h-full '>
                                    <div className="flex items-center flex-col flex-nowrap h-full  justify-start shrink">
                                        <div className="shrink grow h-full">
                                            <NavLink to={'/chat'}>
                                                {({ isActive }) => (
                                                    <div title='Chats' className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] ${isActive ? 'bg-active' : ''}`}>
                                                        <div className="flex items-center justify-center p-[8px]">
                                                            <Badge count={5} style={{
                                                                backgroundColor: '#25d366',

                                                            }}>

                                                                <div className="shrink w-[24px] h-[24px]">
                                                                    <img src={isActive ? "assets/Images/chat-active.svg" : "assets/Images/chat.svg"} alt="" />
                                                                </div>
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                )}
                                            </NavLink>
                                            <NavLink to={'/status'} className={({ isActive }) => `w-[40px] h-[40px] flex items-center justify-center mt-[10px] ${isActive ? 'active' : ''}`}>
                                                {({ isActive }) => (
                                                    <div className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] ${isActive ? 'bg-active' : ''}`}>
                                                        <div className="flex items-center justify-center p-[8px]">
                                                            <Badge dot style={{
                                                                backgroundColor: '#25d366',
                                                                width: '8px',
                                                                height: '8px'
                                                            }}>
                                                                <div className="shrink w-[24px] h-[24px]">
                                                                    <img src={isActive ? "assets/Images/status-active.svg" : "assets/Images/status.svg"} alt="" />
                                                                </div>
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                )}
                                            </NavLink>
                                            <NavLink to={'/channels'} className={({ isActive }) => `w-[40px] h-[40px] flex items-center justify-center mt-[10px] ${isActive ? 'active' : ''}`}>
                                                {({ isActive }) => (
                                                    <div className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] ${isActive ? 'bg-active' : ''}`}>
                                                        <div className="flex items-center justify-center p-[8px]">
                                                            <Badge dot style={{
                                                                backgroundColor: '#25d366',
                                                                width: '8px',
                                                                height: '8px'
                                                            }}>
                                                                <div className="shrink w-[24px] h-[24px]">
                                                                    <img src={isActive ? "assets/Images/Channels-active.svg" : "assets/Images/Channels.svg"} alt="" />
                                                                </div>
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                )}
                                            </NavLink>
                                            <NavLink to='/communities' className={({ isActive }) => `w-[40px] h-[40px] flex items-center justify-center mt-[10px] ${isActive ? 'active' : ''}`}>
                                                {({ isActive }) => (
                                                    <div className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] ${isActive ? 'bg-active' : ''}`}>
                                                        <div className="flex items-center justify-center p-[8px]">
                                                            <Badge dot style={{
                                                                backgroundColor: '#25d366',
                                                                width: '8px',
                                                                height: '8px'
                                                            }}>
                                                                <div className="shrink w-[24px] h-[24px]">
                                                                    <img src={isActive ? "assets/Images/Communities-active.svg" : "assets/Images/Communities.svg"} alt="" />
                                                                </div>
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                )}
                                            </NavLink>
                                            <NavLink className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px]`}>

                                                <div className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] `}>
                                                    <div className="flex items-center justify-center p-[8px]">
                                                        <div className="shrink w-[24px] h-[24px]">
                                                            <img src="assets/Images/meta.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="mb-[10px] shrink  flex flex-col items-center justify-center">
                                            <NavLink to={'/settings'} className={({ isActive }) => `w-[40px] h-[40px] flex items-center justify-center mt-[10px] ${isActive ? 'active' : ''}`}>
                                                {({ isActive }) => (
                                                    <div className={`w-[40px] h-[40px] flex items-center justify-center mt-[10px] rounded-[50%] ${isActive ? 'bg-active' : ''}`}>
                                                        <div className="flex items-center justify-center p-[8px]">
                                                            <div className="shrink w-[24px] h-[24px]">
                                                                <img src={isActive ? "assets/Images/Settings-active.svg" : "assets/Images/Settings.svg"} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </NavLink>
                                            <NavLink to={'/profile'} className={({ isActive }) => `w-[40px] h-[40px] mt-[10px] flex items-center justify-center ${isActive ? 'active' : ''}`}>
                                                <div className="flex items-center p-[8px]">
                                                    <div className="shrink w-[32px] h-[32px] ">
                                                        <img src="assets/Images/user.jpg" className='w-full h-full rounded-[50%]' alt="" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;