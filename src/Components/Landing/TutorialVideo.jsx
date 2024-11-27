import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TutorialVideo = () => {
    const [video, setVideo] = useState(false);

    return (
        <div className="sm:px-[60px] sm:py-[40px] p-[20px] bg-black-rgba">
            <div className="text-[28px] mx-auto mb-[16px] text-center font-[300] text-[#41525d]">Tutorial</div>
            <div className="mb-[40px] mx-auto text-center text-[14px]">
                <Link to={'https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en'} target='_blank' className='text-teal'>Need help to get started?</Link>
            </div>
            <div className="relative flex justify-center">
                <div className="sm:w-[560px] sm:h-[314px] w-full h-full relative flex-none">

                    {
                        video ?
                            <video controls autoPlay>
                                <source src="assets/Videos/connect.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> : <span>
                                <button className='absolute top-0 right-0 bottom-0 left-0 z-[100] flex items-center justify-center' onClick={() => setVideo(true)}>
                                    <div className="flex items-center justify-center w-[80px] h-[80px] overflow-hidden text-white bg-[#0b141a73] rounded-[50%]">
                                        <div className="ml-[5px]">
                                            <img src="assets/Images/play.svg" alt="" />
                                        </div>
                                    </div>
                                </button>
                                <img src="assets/Images/videoposter.png" className='w-full' alt="" />
                            </span>

                    }

                </div>
            </div>
        </div>
    )
}

export default TutorialVideo