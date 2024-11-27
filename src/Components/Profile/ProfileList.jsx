import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileList() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isAboutEditable, setIsAboutEditable] = useState(false);
    const [name, setName] = useState('Lucas...🦋');
    const [about, setAbout] = useState('This is my about section.');

    const MenuRef = useRef(null);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleNameEdit = () => {
        setIsNameEditable(!isNameEditable);
    };

    const handleAboutEdit = () => {
        setIsAboutEditable(!isAboutEditable);
    };

    const handleInputChange = (e, type) => {
        if (type === 'name') {
            setName(e.target.value);
        } else if (type === 'about') {
            setAbout(e.target.value);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (MenuRef.current && !MenuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="chatlist bg-[#f0f2f5]">
                <header>
                    <div className="h-[59px] color-[#3b4a54] pr-[20px] pl-[25px] box-border flex items-center bg-[#fff]">
                        <div className="w-full flex items-center justify-center">
                            <div className="-mt-[3px] text-[#111b21] grow text-[1.375rem]">
                                <h1 className='leading text-[22px] font-bold'>Profile</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex grow relative">
                    {/* Profile Image */}
                    <div className="mt-[28px] mb-[28px] justify-center flex">
                        <div className="w-[200px] h-[200px] mx-auto relative">
                            <button className='profile-image overflow-hidden rounded-[50%] relative'>
                                <div className="w-full h-full z-[1] ">
                                    <div className="w-full h-full overflow-hidden">
                                        <div className="w-[200] block h-[200]">
                                            <img src="assets/Images/user.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {!isOpen && (
                                    <span>
                                        <div className="change-image hidden pt-[15px] bg-[#54656fcc] w-full h-full top-0 rounded-[50%] z-[1000] justify-center flex items-center justify-center uppercase flex-col items-center leading-[1.2] text-[#ffffffcc] text-[.8125rem] left-0 absolute" onClick={handleOpen} ref={MenuRef}>
                                            <div className="">
                                                <span><img src="assets/Images/ChangeProfileImage.svg" alt="" /></span>
                                            </div>
                                            <div className="w-[100px] mt-[10px] text-center word-break">Change profile photo</div>
                                        </div>
                                    </span>
                                )}
                                {isOpen && (
                                    <span>
                                        <div className="pt-[15px] bg-[#54656fcc] w-full h-full top-0 rounded-[50%] z-[1000] justify-center flex items-center justify-center uppercase flex-col items-center leading-[1.2] text-[#ffffffcc] text-[.8125rem] left-0 absolute" onClick={handleOpen} ref={MenuRef}>
                                            <div className="">
                                                <span><img src="assets/Images/ChangeProfileImage.svg" alt="" /></span>
                                            </div>
                                            <div className="w-[ 100px] mt-[10px] text-center word-break">Change profile photo</div>
                                        </div>
                                    </span>
                                )}
                            </button>
                        </div>
                        {isOpen && (
                            <span>
                                <div className="absolute block z-[10000] scale-100 opacity-100 top-[125px] left-[250px] max-w-[340px] py-[9px] bg-[#fff] rounded-[3px] shadow-shadow1">
                                    <ul>
                                        <li>
                                            <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center text-[14.5px] pr-[8px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/View.svg" className='mr-[10px] ml-[8px]' alt="" />View photo</Link>
                                        </li>
                                        <li>
                                            <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center text-[14.5px] pr-[8px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/Take.svg" className='mr-[10px] ml-[8px]' alt="" />Take photo</Link>
                                        </li>
                                        <li>
                                            <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center text-[14.5px] pr-[8px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/Upload.svg" className='mr-[10px] ml-[8px]' alt="" />Upload photo</Link>
                                        </li>
                                        <hr className='border-t my-[4px] mx-[1px] border-[#111b211a]' />
                                        <li>
                                            <Link className='relative overflow-hidden text-ellipsis nowrap flex items-center text-[14.5px] pr-[8px] text-[#3b4a54] h-[40px] hover:bg-[#f5f6f6]'><img src="assets/Images/Remove.svg" className='mr-[10px] ml-[8px]' alt="" />Remove photo</Link>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        )}
                    </div>
                    {/* Your Name */}
                    <div className="mb-[10px] pt-[14px] pb-[10px] px-[30px] relative shadow-custom bg-white">
                        <div className="mb-[14px] ">
                            <div className="flex items-center">
                                <div className="overflow-hidden text-ellipsis relative flex-1">
                                    <div className="leading-[1.2] text-teal text-[.875rem]">Your name</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative word-break">
                            <div className={`border-b-[2px] relative z-[2] flex items-center ${isNameEditable && 'border-[#667781]'}`}>
                                <input
                                    type="text"
                                    readOnly={!isNameEditable}
                                    value={name}
                                    className='outline-none w-full pt-[8px] pb-[5px]'
                                    onChange={(e) => handleInputChange(e, 'name')}
                                />
                                <Link onClick={handleNameEdit}>
                                    <span><img src={`assets/Images/${isNameEditable ? 'Cheke' : 'Edit-2'}.svg`} alt="" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                     {/* Note */}
                     <div className="mt-[4px] mb-[28px] ml-[30px] mr-[20px]">
                        <span className='text-[#54656f] text-[.875rem] leading-[1.4286]'>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</span>
                    </div>
                    {/* About */}
                    <div className="mb-[10px] pt-[14px] pb-[10px] px-[30px] relative shadow-custom bg-white">
                        <div className="mb-[14px] ">
                            <div className="flex items-center">
                                <div className="overflow-hidden text-ellipsis relative flex-1">
                                    <div className="leading-[1.2] text-teal text-[.875rem]">About</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative word-break">
                            <div className={`border-b-[2px] relative z-[2] flex items-center ${isAboutEditable && 'border-[#667781]'}`}>
                                <input
                                    type="text"
                                    readOnly={!isAboutEditable}
                                    value={about}
                                    className='outline-none w-full pt-[8px] pb-[5px]'
                                    onChange={(e) => handleInputChange(e, 'about')}
                                />
                                <Link onClick={ handleAboutEdit}>
                                    <span><img src={`assets/Images/${isAboutEditable ? 'Cheke' : 'Edit-2'}.svg`} alt="" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default ProfileList;