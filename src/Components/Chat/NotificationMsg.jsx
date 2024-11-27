import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NotificationMsg = () => {
    const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }
  return (
    <>
        {
        isVisible &&  <div className="bg-[#53bdeb] min-h-[62px] flex items-center justify-between pt-[13px] pr-[12px] pb-[14px] pl-[13px]">
        <div className="">
            <img src="assets/Images/notification.svg" alt="" />
        </div>
        <div className="">
            <div className="text-[16px] leading-[21px] text-[#111b21]">Turn on notifications</div>
            <div className="mt-[2px] text-[14px] leading-[19px] text-[#111b21] ">
                <div>Get notified of new messages on your computer.
                    <div className="block">
                        <div className="flex  justify-start">
                        <Link className='hover:text-inherit  hover:underline  		'>Turn on desktop notifications</Link>
                        <span>
                            <img src="assets/Images/ArrowRight.svg" alt="" />
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ml-[15px]" onClick={handleClose} style={{ cursor: 'pointer' }}>
            <span>
                <img src="assets/Images/close.svg" alt="" />
            </span>
        </div>
    </div>
    }
      
    </>
  )
}

export default NotificationMsg