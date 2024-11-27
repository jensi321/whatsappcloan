import React from 'react'
import { Link } from 'react-router-dom'

const DownloadMsg = () => {
  return (
    <>
      <div className=" h-full overflow-hidden border-l flex border-solid border-[#d1d7db] w-full z-[100] box-border grow relative">
        <div className=" flex items-center grow z-[1] box-border absolute	justify-center w-full h-full py-[28px] bg-[#f0f2f5]">
          <div className="w-[80%] max-w-[560px] -mt-[20px] h-full	text-center flex flex-nowrap flex-col flex items-center justify-start h-full">

            <div className="h-full flex flex-col items-center justify-center">
              <div className="opacity-100	">
                <img width={320} className='mx-auto' src="assets/Images/downloadscreen.png" alt="" />
              </div>
              <div className="opacity-100">
                <h1 className='mt-[28px] text-[32px] font-[300] text-primary-title'>Download WhatsApp for Windows</h1>
                <div className="mt-[24px] text-secondary-emphasized text-[.875rem] leading-[1.4]">Make calls, share your screen and get a faster experience when you download the Windows app.</div>
                <div className="mt-[32px]">
                  <Link className='border py-[10px] border-transparent border-solid rounded-[24px] leading-[1.1] px-[24px] text-white font-[500] text-[.875rem] bg-[#008069]'>
                    <span className="">Get from Microsoft Store</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" mt-[3em]  shrink flex-col  mx-auto  flex items-center justify-center text-[#8696a0] text-[14px] leading-[20px]">
              <span >
                <img src="assets/Images/endtoend.svg" alt="" />
              </span>
              Your personal messages are end-to-end encrypted
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadMsg