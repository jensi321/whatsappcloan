import React, { useState } from 'react'
import AccountList from './Account/AccountList'
import KeyBordList from './KeyBordList'
import HelpList from './HelpList'
import PrivacyList from './Privacy/PrivacyList'
import ChatSettingList from './Chats/ChatSettingList'
import NotificationList from './Notification/NotificationList'
import { Modal } from 'react-bootstrap'
import LogOutModal from '../Models/LogOutModal'

const SettingsList = () => {
    const [account, setAccount] = useState(false)
    const [privacy, setPrivacy] = useState(false)
    const [chats, setChats] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const [keyboard, setKeyboard] = useState(false)
    const [help, setHelp] = useState(false)
    const [logout, setLogout] = useState(false)

    const items = [
        {
            img: 'assets/Images/Account.svg',
            name: 'Account',
            action: () => setAccount(true)
        },
        {
            img: 'assets/Images/Privacy.svg',
            name: 'Privacy',
            action: () => setPrivacy(true)

        },
        {
            img: 'assets/Images/ChatsSettings.svg',
            name: 'Chats',
            action: () => setChats(true)

        },
        {
            img: 'assets/Images/NotificationSettings.svg',
            name: 'Notifications',
            action: () => setNotifications(true)

        },
        {
            img: 'assets/Images/Keyboard.svg',
            name: 'Keyboard shortcuts',
            action: () => setKeyboard(true)

        },
        {
            img: 'assets/Images/Help.svg',
            name: 'Help',
            action: () => setHelp(true)

        },
    ]

    const handleAccountClose = () => {
        setAccount(false);
    };
    const handlePrivacyClose = () => {
        setPrivacy(false);
    };

    const handleChatsClose = () => {
        setChats(false);
    }
    const handleNotificationsClose = () => {
        setNotifications(false);
    }
    const handleKeyboardClose = () => {
        setKeyboard(false);
    }
    const handleHelpClose = () => {
        setHelp(false);
    }

    return (
        <>
            <div className="chatlist bg-[white]">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Settings</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col">
                    <div className="flex">
                        <div className="h-[49px] w-full flex items-center px-[12px] z-[100] relative box-border">
                            <div className="bg-[#f0f2f5] rounded-[8px] flex items-center justify-center w-full h-[35px] pl-[10px]">
                                <button className=' flex items-center justify-center  '>
                                    <img src="assets/Images/search.svg" className='w-[24px] h-[24px]' alt="" />
                                </button>
                                <input type="text" className='ml-[30px] bg-transparent w-full text-[15px] outline-none' placeholder='Search Settings' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shrink flex-nowrap overflow-hidden flex-col flex justify-start items-stretch ">
                    <div className="w-full h-full flex grow ">
                        <div className="h-full w-full overflow-hidden block">
                            <div className="h-full overflow-y-auto ">
                                <button className="w-full overflow-hidden flex text-start grow">
                                    <div className="w-full box-border flex relative grow">
                                        <div className="min-h-[60px]  wrap-nowrap box-border flex items-stretch flex-row justify-start ">
                                            <div className="py-[8px] min-w-[40px] flex-nowrap flex items-center px-[16px] flex-row ">
                                                <div className="w-[82px] h-[82px] relative rounded-[50%] overflow-hidden">
                                                    <img src="assets/Images/user.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 py-[8px] flex-nowrap justify-center flex-col border-box flex items-stretch pr-[16px]">
                                            <div className="shrink flex-nowrap flex  items-center flex-row justify-start">
                                                <div className="grow overflow-hidden shrink border-box">
                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">
                                                        <span className='overflow-hidden text-ellipsis relative'>Lucas...🦋</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                {
                                    items.map((i, index) => {
                                        return (
                                            <button className='w-full overflow-hidden flex grow hover:bg-[#f5f6f6]' key={index} onClick={i.action}>
                                                <div className="w-full box-border">
                                                    <div className="min-h-[60px] shrink flex-nowrap box-border  flex items-stretch flex-row justify-start grow ">
                                                        <div className="py-[8px] min-w-[40px] flex-nowrap justify-center flex items-center px-[16px] flex-row">
                                                            <span><img src={i.img} alt="" /></span>
                                                        </div>
                                                        <div className="flex-1 py-[8px] border-b border-[#e9edef] flex-nowrap justify-center flex-col box-border flex items-stretch">
                                                            <div className="shrink flex-nowrap flex justify-start">
                                                                <div className="grow overflow-hidden shrink box-border">
                                                                    <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] text-left">{i.name}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })
                                }
                                <button className='w-full overflow-hidden flex grow hover:bg-[#f5f6f6]' onClick={() => setLogout(true)}>
                                    <div className="w-full box-border">
                                        <div className="min-h-[60px] shrink flex-nowrap box-border  flex items-stretch flex-row justify-start grow ">
                                            <div className="py-[8px] min-w-[40px] flex-nowrap justify-center flex items-center px-[16px] flex-row">
                                                <span><img src='assets/Images/Logout.svg' alt="" /></span>
                                            </div>
                                            <div className="flex-1 py-[8px]  flex-nowrap justify-center flex-col box-border flex items-stretch">
                                                <div className="shrink flex-nowrap flex justify-start">
                                                    <div className="grow overflow-hidden shrink box-border">
                                                        <div className="text-[#ea0038] leading-[1.2941] text-[1.0625rem] text-left">Log out</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {account && <AccountList close={handleAccountClose} />}
            {privacy && <PrivacyList close={handlePrivacyClose} />}
            {chats && <ChatSettingList close={handleChatsClose} />}
            {notifications && <NotificationList close={handleNotificationsClose} />}
            {keyboard &&
                <Modal show={keyboard} onHide={handleKeyboardClose}>
                    <KeyBordList close={handleKeyboardClose} />
                </Modal>}
            {help && <HelpList close={handleHelpClose} />}
            {
                logout &&
                <Modal show={logout} onHide={() => setLogout(false)}>
                    <LogOutModal close={() => setLogout(false)} />
                </Modal>
            }
        </>
    )
}

export default SettingsList