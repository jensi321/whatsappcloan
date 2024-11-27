import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../codes.json'
import OtpVerfiy from './OtpVerfiy';


const MobileNumber = ({ setIsLink }) => {
    const [selectedCountry, setSelectedCountry] = useState('+91');

    const [verifyOtp, setVerifyOtp] = useState(false);

    const handleOtpOpen = () => {
        setVerifyOtp(true)
    }
 

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);

        console.log(selectedCountry)
    };
    return (
        <>
            {verifyOtp ? <OtpVerfiy setIsLink={setIsLink}/> :<div className="flex flex-col flex-col items-center  justify-center">
                <div className="mb-[16px]">
                    <div className="text-[28px] font-300 text-[#41525d]">Enter phone number</div>
                </div>
                <div className="mb-[32px]">
                    <div className="text-[16px] font-300 text-secondary-stronger">Select a country and enter your WhatsApp phone number.</div>
                </div>
                <div className="">
                    <div className="">
                        <div className="h-[52px] w-[266px] mb-[12px]">
                            <button className='border border-[#e9edef] rounded-[24px] leading-[1.14]  py-[10px] px-[24px] w-full text-left' >
                                <select className='w-full bg-transparent' name="dial-code" value={selectedCountry} onChange={handleCountryChange}>
                                    {data.map((data, index) => (
                                        <option key={index} value={data.dial_code} >
                                            {data.emoji} &nbsp; {data.name}
                                        </option>
                                    ))}
                                </select>
                            </button>
                        </div>
                        <div className="h-[52px] w-[266px] mb-[12px]">
                            <div className='border border-[#e9edef] flex gap-2 rounded-[24px] leading-[1.14]  py-[10px] px-[24px] w-full text-left' >
                                <span>
                                    {selectedCountry} </span> <input type="text" className='focus:outline-none' /></div>
                        </div>
                    </div>
                    <div className="h-[48px]"></div>
                    <div className="mb-[24px] text-center">
                        <Link className=' border inline-block border-transparent rounded-[24px] bg-teal leading-[1.14] text-white py-[10px] px-[24px]' onClick={handleOtpOpen}>
                            <span>Send OTP</span>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Link className='text-teal' onClick={() => setIsLink(0)}>
                        Link with QR code
                    </Link>
                </div>

            </div>}
        </>
    )
}

export default MobileNumber