import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const GroupInfo = ({ close }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [name, setName] = useState('Lucas...🦋');

    const MenuRef = useRef(null);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleNameEdit = () => {
        setIsNameEditable(!isNameEditable);
    };

    const handleInputChange = (e, type) => {
        if (type === 'name') {
            setName(e.target.value);
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
                                    <span className='leading-[32px] text-inherit'>New group</span>
                                </div>

                            </div>
                        </header>

                        <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[#f0f2f5] ">
                            <div className="flex-col flex bg-white mb-[10px]">
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
                                <div className="my-[1.75rem] mx-[2rem]">
                                    <div className="relative word-wrap">
                                        <div className={`border-b-[2px] relative z-[2] flex items-center ${isNameEditable && 'border-[#667781]'}`}>
                                            <input
                                                type="text"
                                                readOnly={!isNameEditable}
                                                value={name}
                                                placeholder='Group subject (optional)'
                                                className='outline-none w-full pt-[8px] pb-[5px]'
                                                onChange={(e) => handleInputChange(e, 'name')}
                                            />
                                            <Link onClick={handleNameEdit}>
                                                <span><img src={`assets/Images/${isNameEditable ? 'Cheke' : 'Edit-2'}.svg`} alt="" /></span>
                                            </Link>
                                        </div>
                                        <div className="flex flex-row ">
                                            <div className="flex flex-col-reverse grow ">
                                                <div className="relative flex items-start min-h-[16px] pt-[3px] text-[12px] leading-[16px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col flex bg-white mb-[10px]">
                                <div className="pl-[30px] cursor-[pointer]">
                                    <div className="pr-[30px] flex items-center">
                                        <div className="pb-[19px] pt-[19px] overflow-hidden flex flex-row items-center justify-between shrink text-ellipsis grow">
                                            <div className="mb-[2px] ">
                                                <h3 className='text-[#111b21] leading-[1.2941] text-[1.0625rem] '  >Disappearing messages</h3>
                                                <span className='text-[#54656f] text-[.875rem] leading-[1.4286]'>Off</span>
                                            </div>
                                            <div className="ml-[15px] ">
                                                <span>
                                                    <img src="assets/Images/ArrowRight.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className=""></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col flex bg-white mb-[10px]">
                                <div className="pl-[30px] cursor-[pointer]">
                                    <div className="pr-[30px] flex items-center">
                                        <div className="pb-[19px] pt-[19px] overflow-hidden flex flex-row items-center justify-between shrink text-ellipsis grow">
                                            <div className="mb-[2px] ">
                                                <h3 className='text-[#111b21] leading-[1.2941] text-[1.0625rem] '  >Group permissions</h3>
                                            </div>
                                            <div className="ml-[15px] ">
                                                <span>
                                                    <img src="assets/Images/ArrowRight.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className=""></div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="pb-[2rem] mt-[1.75rem] flex text-center items-centter justify-center">
                                    <Link className="h-[46px] w-[46px] cursor-pointer rounded-[50%] justify-center flex shadow-1 uppercase justify-center font-[500] text-[#fff] bg-[#00a884] text-[.875rem]" >
                                        <span className='flex items-center justify-center'>
                                            <img src="assets/Images/ArrowRightWhite.svg" alt="" />
                                        </span>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupInfo