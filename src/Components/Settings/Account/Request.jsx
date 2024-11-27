import React from 'react'
import { Link } from 'react-router-dom'

const Request = ({ close }) => {
  return (
    <>
      <div className="w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 ml-[64px] flex absolute">
        <div className="newchat-inner flex overflow-hidden box-border relative z-[300] w-full h-full">
          <div className="overflow-hidden w-full h-full flex flex-col bg-[#f0f2f5] ">
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
                  <span className='leading-[32px] text-inherit'>Request account info</span>
                </div>
              </div>
            </header>

            <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] ">
              <div className="mb-[10px] pt-[30px] pb-[18px] relative shadow-custom bg-[white]">
                <div className="mb-[14.5px] mt-[-12.5px] pl-[30px] flex flex-row justify-start items-start">
                  <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Account information</div>
                </div>
                <div className="relative flex items-center h-[60px] bg-[white] border-y borde-[#e9edef] cursor-pointer hover:bg-[#f5f6f6]">
                  <div className="flex justify-center w-[74px] text-[#8696a0]">
                    <span>
                      <img src="assets/Images/Report.svg" alt="" />
                    </span>
                  </div>
                  <div className="box-border flex flex-1 items-center h-full pr-[30px] overflow-hidden ">
                    <div className="mt-[-4px] overflow-hidden text-ellipsis ">
                      <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">Request report</div>
                    </div>
                  </div>
                </div>
                <div className="pt-[18px] px-[30px] ">
                  <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">
                    Create a report of your WhatsApp account information and settings, which you can access or port to another app. This report does not include your messages.
                    <Link to={'https://faq.whatsapp.com/526463418847093/?cms_platform=web&lang=en'} target='_blank' className='text-[#027eb5]'> Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="mb-[10px] pt-[30px] pb-[18px] relative shadow-custom bg-[white]">
                <div className="mb-[14.5px] mt-[-12.5px] pl-[30px] flex flex-row justify-start items-start">
                  <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Channels activity</div>
                </div>
                <div className="relative flex items-center h-[60px] bg-[white] border-y borde-[#e9edef] cursor-pointer hover:bg-[#f5f6f6]">
                  <div className="flex justify-center w-[74px] text-[#8696a0]">
                    <span>
                      <img src="assets/Images/Report.svg" alt="" />
                    </span>
                  </div>
                  <div className="box-border flex flex-1 items-center h-full pr-[30px] overflow-hidden " >
                    <div className="mt-[-4px] overflow-hidden text-ellipsis ">
                      <div className="text-[#111b21] leading-[1.2941] text-[1.0625rem] ">Request Channels report</div>
                    </div>
                  </div>
                </div>
                <div className="pt-[18px] px-[30px] ">
                  <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">
                    Create a report of your channel updates and information, which you can access or port to another app.
                    <Link to={'https://faq.whatsapp.com/6480469855345352/?cms_platform=web&lang=en'} target='_blank' className='text-[#027eb5]'> Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Request