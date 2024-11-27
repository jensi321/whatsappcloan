import React, { useState } from 'react'
import QrCode from './QrCode';
import MobileNumber from './MobileNumber';
import TutorialVideo from './TutorialVideo';

const LandingWindow = () => {
    const [isLink, setIsLink] = useState(0)

    return (
        <>
            <div className="z-2 flex flex-none flex-col lg:w-[1000px] w-[90%]  mx-auto overflow-hidden bg-white rounded-[3px] shadow-shadow1">
                <div className="p-[60px] pt-[64px] w-full relative box-border ">
                    {
                        isLink === 0 && (
                            <QrCode setIsLink={setIsLink}/>
                        )
                    }
                    {
                        isLink === 1 && (
                            <MobileNumber setIsLink={setIsLink}/>
                        )
                    }


                </div>
                <TutorialVideo />

            </div>
        </>
    )
}

export default LandingWindow



