import React from 'react'
import { Link } from 'react-router-dom'

const QrCode = ({setIsLink}) => {
  return (
    <>
    <div className="mt-[-24px] min-w-0	mb-[30px] min-h-0 flex justify-center items-center  flex-nowrap flex-row">
        <div className="pb-[24px] border border-gray-200 py-[24px] gap-4 px-[40px] shrink flex items-center lg:flex-row flex-col " >
            <div className="mt-[6px]">
                <span>
                    <img src="assets/Images/whatsappWeb.svg" className='h-[55px]' alt="" />
                </span>
            </div>
            <div className="flex flex-col px-[24px] lg:text-left text-center">
                <div className="">
                    <div className="mb-[2px] text-primary-text leading-5 text-[17px]">Download WhatsApp for Windows</div>
                </div>
                <div className="">
                    <div className="mb-[2px] text-black-rgb text-[14px] ">Get calling, screen sharing and a faster experience with the new Windows app.</div>
                </div>
            </div>
            <div className="">
                <button className='border border-transparent px-[24px] py-[10px] text-[14px] leading-[1.1] text-white font-[500] rounded-[24px] bg-button-1'>
                    <div className="">Get the app</div>
                </button>
            </div>
        </div>
    </div>

    <div className="pb-[50px] qr-code">
        <div className="pb-[40px] border-b border-border-default flex lg:flex-row flex-col items-start justify-between pb-[40px] mb-[20px] ">
            <div className="left lg:max-w-[556px] w-full  ">
                <div className="mb-[20px] text-[28px] font-[300] text-[#41525d]">Use WhatsApp on your computer</div>
                <div className="h-[28px]"></div>
                <ol className='leading-[28px] pl-[24px] list-decimal ' >
                    <li className='text-[18px] text-[#3b4a54]'>Open WhatsApp on your phone</li>
                    <li className='mt-[18px] list-item text-[18px] text-[#3b4a54] '>
                        <div className="flex flex-wrap gap-2 items-center">
                            Tap
                            <strong className='flex gap-2 items-center font-[500] leading-[24px]'>
                                Menu
                                <span>
                                    <img src="assets/Images/Menu.svg" alt="" />
                                </span>
                            </strong>
                            on Android, or
                            <strong className='flex gap-2 items-center font-[500] leading-[24px]'>
                                Settings
                                <span>
                                    <img src="assets/Images/Settings.svg" alt="" />
                                </span>
                            </strong>
                            on iPhone
                        </div>
                    </li>
                    <li className='mt-[18px] list-item text-[18px] text-[#3b4a54] '>
                        <div className="flex gap-2 items-center">
                            Tap
                            <strong className='flex gap-2 items-center font-[500] leading-[24px]'>
                                Linked devices
                            </strong>
                            and then
                            <strong className='flex gap-2 items-center font-[500] leading-[24px]'>
                                Link a device
                            </strong>
                        </div>
                    </li>
                    <li className='mt-[18px] list-item text-[18px] text-[#3b4a54] '>
                        <span>Point your phone at this screen to capture the QR code</span>
                    </li>
                </ol>
            </div>
            <div className="right lg:ml-[60px] w-full text-center flex items-center justify-center relative" >
                <div className="">
                    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">

                        <img src="assets/Images/whatsappqr.svg" className='w-[64px] h-[64px]' alt="" />
                    </div>
                    <img src="assets/Images/qrCode.png" className='w-[264px] h-[264px]' alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className="absolute bottom-[66px] left-[60px] text-[18px] ">
        <Link className='text-teal' onClick={() => setIsLink(1)}>
            <span>Link with phone number</span>
        </Link>
    </div>
</>
  )
}

export default QrCode