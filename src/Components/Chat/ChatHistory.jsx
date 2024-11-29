import React, { useEffect, useRef, useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { Link } from 'react-router-dom'
import VideocallModel from '../Models/VideocallModel';
import ChatFooterModel from '../Models/ChatFooterModel';
import ChatDotsModal from '../Models/ChatDotsModal';
import SearchMsgModel from '../Models/SearchMsgModel';
import Picker, { SkinTones } from 'emoji-picker-react';


const ChatHistory = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDotsMenu, setIsDotsMenu] = useState(false);
    const [videoCall, setVideoCall] = useState(false);
    const [search, setSearch] = useState(false);
    const [emojiPicker, setEmojiPicker] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const [messages, setMessages] = useState([
        { text: "Hello! How are you?", sender: "receiver" },
        { text: "I'm good, thanks! How about you?", sender: "sender" },
        { text: "What are you doing today?", sender: "receiver" }
    ]);
    const onEmojiClick = ( emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(chosenEmoji);
    }



    // Create refs for the menus
    const menuRef = useRef(null);
    const dotsMenuRef = useRef(null);
    const videoRef = useRef(null);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDotsMenu = () => {
        setIsDotsMenu(!isDotsMenu);
    };
    const toggleVideoCall = () => {
        setVideoCall(!videoCall);
    };

    const openSearch = () => {
        setSearch(true);
    }

    const openEmojiPicker = () => {
        setEmojiPicker(!emojiPicker);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents the default action (like a form submission)
            sendMessage(); // Call the sendMessage function
        }
    };
    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            // Add the new message to the messages array
            setMessages(prevMessages => [
                ...prevMessages,
                { text: inputValue, sender: 'sender' } // Assuming the current user is the sender
            ]);
            setInputValue(''); // Clear the input field after sending
        }
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // if (menuRef.current && !menuRef.current.contains(event.target)) {
            //     setIsMenuOpen(false);
            // }
            if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
                setIsDotsMenu(false);
            }
            if (videoRef.current && !videoRef.current.contains(event.target)) {
                setVideoCall(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className=" chat-history h-full border-l border-solid border-[#d1d7db] w-full z-[100] grow relative">
                <div className="flex flex-col h-full bg-[#efeae2] ">
                    <div className="w-full h-full top-0 left-0 absolute bg-img  opacity-[0.4]"></div>
                    {/* Header */}
                    <header className='relative z-[1000] border-box flex items-center w-full h-[59px] px-[16px] py-[10px] bg-[#f0f2f5]'>
                        <div className="-mt-[1px] pr-[15px]">
                            <div className="h-[40px] w-[40px] rounded-[50%] relative " >
                                <div className="w-full h-full flex justify-center">
                                    <span>
                                        <img src="assets/Images/single.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col grow justify-center ">
                            <div className="flex items-start mt-[-1px] ">
                                <div className="flex grow overflow-hidden text-[16px] leading-[16px] color-[#111b21] text-left text-ellipsis	">
                                    <div className="inline-flex items-center">
                                        <span className='text-ellipsis	inline-block relative grow '>John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-[20px] ">
                            <div className="flex items-center">
                                <div className={` h-full pb-[3px] pt-[5px] leading-[1] px-[10px] relative rounded-[100px] ${videoCall && 'bg-[#0b141a1a]'}`}>
                                    <Link className='' onClick={toggleVideoCall} ref={videoRef}>
                                        <div className="flex justify-center items-center text-[#54656f80]">
                                            <span className='mr-[6px]'>
                                                <img src="assets/Images/video-call.svg" alt="" />
                                            </span>
                                            <span className=''><GoTriangleDown /></span>
                                        </div>
                                    </Link>

                                </div>
                                <div className="pl-[10px] ">
                                    <Link className="flex items-center p-[8px] rounded-[50%] overflow-hidden hover:bg-[#0b141a1a]" onClick={openSearch}>
                                        <span>
                                            <img src="assets/Images/search.svg" alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="pl-[10px] ">
                                    <Link className={`flex items-center p-[8px] rounded-[50%] overflow-hidden ${isDotsMenu && 'bg-[#0b141a1a]'}`} onClick={toggleDotsMenu} ref={dotsMenuRef}>
                                        <span>
                                            <img src="assets/Images/dots.svg" alt="" />
                                        </span>
                                    </Link>
                                    {isDotsMenu && (
                                        <ChatDotsModal />
                                    )}

                                </div>
                            </div>

                        </div>
                    </header>

                    {/* Chat */}
                    <div className="z-[1] relative oreder-2 flex-[1]">
                        <div className="">
                            <div className="w-full overflow-x-[hidden] overflow-y-auto h-full top-0 z-[100] flex-col border-box flex left absolute">
                                <div className="flex-1 min-h-[12px]"></div>
                                <div className="pb-[8px] flex-initial">
                                    <div className="flex flex-row justify-center mb-[12px] px-[9%]">
                                        <div className="mb-0 border-box inline-block flex-none max-w-[100%] pt-[5px] px-[12px] pb-[6px] text-[12.5px] leading-[21px] rounded-[7.5px] text-[#54656f] text-center bg-[#fffffff2] shadow-custom">
                                            <span>Today</span>
                                        </div>
                                    </div>
                                    <div className="">

                                        {
                                            messages.map((i,index) =>{
                                                return(
                                                    <div className={`${i.sender}`} key={index}>
                                                    <div className="mb-[12px] relative">
                                                        <div className={` px-[63px] flex flex-col ${i.sender !== 'sender' ? 'items-start' : 'items-end'}`}>
                                                            <div className="max-w-[65%] relative text-[14.2px] leading-[19px] color-[#111b21] rounded-[7.5px]">
                                                                <span className={`absolute  top-0 z-index-[100] block w-[8px] h-[13px]  ${i.sender !== 'sender' ? 'left-[-8px]': 'right-[-8px]'}`}>
                                                                    <img src={i.sender !== 'sender' ? 'assets/Images/Resivemsg.svg' : 'assets/Images/sendmsg.svg' } alt="" />
                                                                </span>
                                                                <div className={`${ i.sender !== 'sender' ? 'rounded-tl-[0] bg-[#fff]' : 'rounded-tr-[0] bg-[#d9fdd3]'}  shadow-custom relative z-[200] rounded-[7.5px]`}>
                                                                    <div className="pb-[8px] pt-[6px] box-border pl-[9px] pr-[7px] ">
                                                                        <div className="flex flex-row justify-start items-start ">
                                                                            <span>{i.text}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {
                        emojiPicker && (
                            <div className="w-full " >
                                <Picker onEmojiClick={onEmojiClick} skinTone={SkinTones} style={{width:'100%'}} />

                            </div>
                        )
                    }
                    {/* Footer */}
                    <footer className='relative z-[2] box-border order-3 w-full h-[62px] block'>
                        <div className="pb-[5px] min-h-[62px] items-end z-[2] box-border flex px-[16px] flex-row relative bg-[#f0f2f5]">
                            <div className="w-full min-w-0 min-h-[52px] relative flex-[1]">
                                <span>
                                    <div className='flex items-center'>
                                        <div className="flex text-[#54656f] items-center justify-center border-box min-h-[52px]">
                                            <div className="w-[26px] flex mx-[8px] h-[42px]">

                                                <button className={`bottom-[8px] w-[26px] top-[9px]  rounded-[2px] absolute`} onClick={openEmojiPicker}>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src='assets/Images/Emoji.svg' alt="" />
                                                        </span>
                                                    </div>
                                                </button>


                                            </div>
                                            <div className="flex items-center ">
                                                <div className={`rounded-[50%]  relative ${isMenuOpen === true && 'bg-[#0b141a1a] rotate-[135deg]'} ease-in-out	duration-[.3s] transition-transform	`}>
                                                    <Link className="p-[8px] flex items-center" onClick={toggleMenu} ref={menuRef}>
                                                        <span>
                                                            <img src="assets/Images/plus.svg" alt="" />
                                                        </span>
                                                    </Link>

                                                </div>
                                                {isMenuOpen && (
                                                    <ChatFooterModel />
                                                )}
                                            </div>

                                        </div>
                                        <div className="flex items-end w-full">
                                            <div className="my-[5px] border w-full border-[white] border-solid min-h-[20px] px-[12px] mx-[8px] bg-white rounded-[8px] flex text-[.9375rem] leading-[20px] py-[9px]">
                                                <input type="text" className='w-full outline-none' placeholder='Type a message'
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)} 
                                                    onFocus={() => setIsInputFocused(true)}
                                                    onBlur={() => setIsInputFocused(false)}
                                                    onKeyDown={handleKeyDown}
                                                    />
                                            </div>
                                            <div className="w-[26px] flex mx-[8px] h-[42px]">
                                                <button className='bottom-[8px] w-[26px] top-[9px]  rounded-[2px] absolute block' onClick={sendMessage}>
                                                    <div className="m-[1px]">
                                                        <span>
                                                            <img src={`assets/Images/Sendicon.svg` } className={isInputFocused ? 'opacity-[1]' : 'opacity-[.4]'} alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>


            {
                search && (
                    <SearchMsgModel search={search} close={() => { setSearch(false) }} />
                )
            }



            {videoCall && (
                <VideocallModel />
            )}

        </>
    )
}

export default ChatHistory