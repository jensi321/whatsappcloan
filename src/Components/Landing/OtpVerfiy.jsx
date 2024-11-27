import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OtpVerfiy = ({ setIsLink }) => {
    const [otp, setOtp] = useState(['', '', '', '']); // State to hold OTP digits

    const handleChange = (index, value) => {
        // Update the OTP state for the specific index
        if (value.length <= 1 && /^[0-9]*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value; // Set the value at the specified index
            setOtp(newOtp);

            // Focus on the next input if the current one is filled
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="mb-[16px]">
                    <div className="text-[28px] font-300 text-[#41525d]">Verify Your OTP</div>
                </div>
                <div className="mb-[32px]">
                    <div className="text-[16px] font-300 text-secondary-stronger">Please enter the OTP sent to your registered WhatsApp number.</div>
                </div>
                <div className="">
                    <div className="h-[52px] w-[266px] mb-[12px]">
                        <div className='flex gap-4 rounded-[24px] leading-[1.14] py-[10px] px-[24px] w-full text-left'>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`} // Unique ID for each input
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    className='w-[40px] border border-[#e9edef] rounded-[5px] h-[40px] focus:outline-none text-center'
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onFocus={(e) => e.target.select()} // Select the input text on focus
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-[48px]"></div>
                <div className="mb-[24px] text-center">
                    <Link to='/chat' className='border inline-block border-transparent rounded-[24px] bg-teal leading-[1.14] text-white py-[10px] px-[24px]'>
                        <span>Next</span>
                    </Link>
                </div>
                <div className="">
                    <Link className='text-teal' onClick={() => setIsLink(0)}>
                        Link with QR code
                    </Link>
                </div>
            </div>
        </>
    );
}

export default OtpVerfiy;