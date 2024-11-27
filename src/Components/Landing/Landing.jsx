import React from 'react'
import LandingWindow from './LandingWindow'

const Landing = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-start pb-[92px] ">
            <div className="absolute top-0 left-0 z-[-1] w-full h-[222px] bg-green-1"></div>
            <div className="flex flex-none items-center justify-start lg:w-[1000px] mt-[27px] min-h-[39px] mb-[28px] mx-auto landing-header">
                <span className="inline-block">
                    <img src="assets/Images/whatsapp.svg" className='w-[39px] h-[39px]'  alt="" />
                </span>
                    <div className="inline-block ml-[14px] text-[14px] font-[500] leading-normal text-white uppercase ">WhatsApp Web</div>
            </div>

            {/* Lending Window */}
            <LandingWindow/>
        </div>
    </>
  )
}

export default Landing