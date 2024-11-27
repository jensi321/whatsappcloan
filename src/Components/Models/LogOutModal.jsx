import React from 'react'
import { Link } from 'react-router-dom'

const LogOutModal = ({close}) => {
    return (
        <>
            <div className="logoutmodal pb-[20px] pt-[22px] w-[500px] mx-auto overflow-hidden items-center justify-center rounded-[3px] flex-col flex box-border bg-[white] shadow-shadow1 px-[24px]">
                <div className="w-full shrink relative grow ">
                    <div className="mb-[20px] text-[1.25rem] font-[400] text-start leading-[1.25]">Log out?</div>
                    <div className="leading-[1.43] text-[.8875rem]">
                        Are you sure you want to log out?
                        <br />
                        You can turn on <Link > app lock </Link>  instead.
                    </div>
                    <div className="pt-[50px] text-end flex px-[5px] justify-end">
                        <div className="items-end shrink flex gap-[16px] flex-row justify-start ">
                            <button className='border border-[#e9edef] py-[10px] leading-[1.1429] px-[24px] bg-[white] font-[500] rounded-[24px] relative text-[#008069] text-[.875rem] ' onClick={close}>Cancel</button>
                            <Link to={'/'} className='border border-transparent py-[10px] leading-[1.1429] px-[24px] bg-[#008069] font-[500] rounded-[24px] relative text-[#fff] text-[.875rem]'>Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogOutModal