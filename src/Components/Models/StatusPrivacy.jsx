import React from 'react'
import { Link } from 'react-router-dom'

const StatusPrivacy = ({ close }) => {
  return (
    <>
      <div className="chatlist  w-full h-full newchat overflow-hidden top-0 left-0 right-0 bottom-0 ml-[64px] flex absolute">
        <div className="w-full flex overflow-hidden box-border relative z-[300] w-full h-full">
          <div className="overflow-hidden w-full h-full flex flex flex-col bg-[#f0f2f5] ">
            <header className='min-h-[64px] text-[#3b4a54] pr-[20px] pl-[20px] flex items-center bg-[#fff] '>
              <div className="w-full flex items-center text-[#111b21]">
                <div className="w-[54px]">
                  <Link onClick={close}>
                    <span >
                      <img src="assets/Images/ArrowLeft.svg" alt="" />
                    </span>
                  </Link>
                </div>
                <div className="overflow-hidden max-h-[46px] mt-[-4px] text-[1rem] ">
                  <span className='leading-[32px] text-inherit'>Status privacy</span>
                </div>
              </div>
            </header>
            <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col flex grow relative">
              <div className="mb-[10px] pl-[30px] pr-[30px] relative badow-custom bg-[#fff]">
                <div className="mb-[20px] mt-[20px] color-teal text-[1rem] leading-[20px]">Who can see my status updates on WhatsApp</div>
                <div className="">
                  <div className="py-[18px] ">
                    <div className="flex justify-start items-start">
                      <div className="">
                        <span className='w-[20px] h-[20px] relative'>
                          <input type="radio" name='statusprivacy' defaultChecked className='w-[20px] h-[20px]' />
                        </span>
                      </div>
                      <div className="pl-[20px] grow">
                        <span className='inline-block text-[1rem] leading-[20px]'>My contacts</span>
                        <div className="text-[#667781] leading-[1.5385] text-[.8125rem] ">Share with all of your contacts</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-[18px] ">
                    <div className="flex justify-start items-start">
                      <div className="">
                        <span className='w-[20px] h-[20px] relative'>
                          <input type="radio" name='statusprivacy' className='w-[20px] h-[20px]' />
                        </span>
                      </div>
                      <div className="pl-[20px] grow">
                        <span className='inline-block text-[1rem] leading-[20px]'>My contacts except...</span>
                        <div className="text-[#667781] leading-[1.5385] text-[.8125rem] ">Share with your contacts except people you select</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-[18px] ">
                    <div className="flex justify-start items-start">
                      <div className="">
                        <span className='w-[20px] h-[20px] relative'>
                          <input type="radio" name='statusprivacy' className='w-[20px] h-[20px]' />
                        </span>
                      </div>
                      <div className="pl-[20px] grow">
                        <span className='inline-block text-[1rem] leading-[20px]'>Only share with...</span>
                        <div className="text-[#667781] leading-[1.5385] text-[.8125rem] ">Only share with selected contacts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div >
    </>
  )
}

export default StatusPrivacy