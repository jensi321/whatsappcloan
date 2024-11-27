import React from 'react';
import { Link } from 'react-router-dom';

const SecurityNotification = ({ close }) => {

  const items = [
    {
      img: 'assets/Images/Text.svg',
      desc: 'Text and voice messages',
    },
    {
      img: 'assets/Images/calls.svg',
      desc: 'Audio and calls',
    },
    {
      img: 'assets/Images/PhotosPin.svg',
      desc: 'Photos, videos and documents',
    },
    {
      img: 'assets/Images/Loction.svg',
      desc: 'Location sharing',
    },
    {
      img: 'assets/Images/StatusUpdates.svg',
      desc: 'Status Updates',
    },
  ];


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
                  <span className='leading-[32px] text-inherit'>Security</span>
                </div>
              </div>
            </header>

            <div className="overflow-x-hidden overflow-y-auto z-[100] flex-col relative grow opacity-[1] bg-[white] ">
              <div className="mb-[10px] pt-[28px] pb-[19px] px-[30px] relative bg-[#fff] shadow-custom">
                <div className="pb-[20px] border-b border-[#e9edef]">
                  <div className="justify-center flex flex-col items-stretch">
                    <div className="shrink flex items-center justify-center">
                      <span>
                        <img src="assets/Images/SecurityLock.svg" alt="" />
                      </span>
                    </div>
                    <div className="my-[16px] text-[#111b21] text-[1.1875rem] text-[500] leading-[1.4737]">
                      Your chats and calls are private
                    </div>
                    <div className="mb-[8px] text-[#54656f] text-[.875rem] leading-[1.4286]">
                      End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:
                    </div>
                    <ul>
                      {
                        items.map((i, index) => {
                          return (
                            <li className='my-[8px] flex items-center flex-row justify-start' key={index}>
                              <span className='pr-[16px]'>
                                <img src={i.img} alt="" />
                              </span>
                              <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">
                                {i.desc}
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">
                      <Link to={'https://www.whatsapp.com/security/?lg=en'} className='text-[#027eb5] ' target='_blank'>Learn more</Link>
                    </div>
                  </div>
                </div>
                <div className="mt-[28px] pb-[26px] flex flex-row justify-start items-start ">
                  <div className="checkbox mt-[2px] pr-[15px] relative">
                  <input type="checkbox" defaultChecked />
                 
                  </div>
                  <div className="shrink ">
                    <div className="mb-[8px] text-[#111b21] leading-[1.2941] text-[1.0625rem]">Show security notifications on this computer</div>
                    <div className="text-[#54656f] text-[.875rem] leading-[1.4286]">Get notified when your security code changes for a contact's phone. If you have multiple devices, this setting must be enabled on each device where you want to get notifications. 
                    <Link to={'https://faq.whatsapp.com/1524220618005378/?cms_platform=web&lang=en'} className='text-[#027eb5]' target='_blank'> Learn more</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityNotification;