import React from 'react'

const ThemeModal = ({close}) => {
  return (
    <>
        <div className="theme-modal pb-[20px] mx-auto w-[500px] overflow-hidden pt-[22px] px-[24px] rounded-[3px] box-border flex bg-[white] shadow-shadow1">
            <div className="relative grow shrink ">
                <h2 className='mb-[20px] text-[1.25rem] text-start font-[400] leading-[1.25]'>Theme</h2>
                <div className="leading-[1.43] text-[.8875rem]">
                    <ol>
                        <li className='min-h-[40px] items-center text-[.8875rem] flex'>
                            <div className="flex">
                                <div className="m-[5px]">
                                <input type="radio" name="theme" id=""  className='w-[20px] h-[20px]'/>
                            </div>
                            </div>
                            <div className="pl-[12px] inline-block leading-[1.25]">
                            Light
                            </div>
                        </li>
                        <li className='min-h-[40px] items-center text-[.8875rem] flex'>
                            <div className="flex">
                                <div className="m-[5px]">
                                <input type="radio" name="theme" id=""  className='w-[20px] h-[20px]'/>
                            </div>
                            </div>
                            <div className="pl-[12px] inline-block leading-[1.25]">
                            Dark
                            </div>
                        </li>
                        <li className='min-h-[40px] items-center text-[.8875rem] flex'>
                            <div className="flex">
                                <div className="m-[5px]">
                                <input type="radio" name="theme" id="" defaultChecked  className='w-[20px] h-[20px]'/>
                            </div>
                            </div>
                            <div className="pl-[12px] inline-block leading-[1.25]">
                            System default
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="pt-[50px] flex px-[5px] justify-end">
                    <div className="flex items-flex-end shrink flex-nowrap flex gap-[16px] flex-row justify-start" >
                        <button className='border border-[#e9edef] px-[10px] leading-[1.1429] px-[24px] font-[500] rounded-[24px] inline-block text-[#008069] offset-[2px] text-[.875rem] ' onClick={close}>
                            <div className="justify-center flex items-center flex-row ">
                                <div className="grow shrink flex-nowrap justify-center gap-[8px] flex items-center flex-row ">Cancel</div>
                            </div>
                        </button>
                        <div className="border border-transparent py-[10px] leading-[1.1429] px-[24px] font-[500] rounded-[24px] inline-block text-[#fff] relative offset-[2px] text-[.875rem] bg-[#008069]">
                        <div className="justify-center flex items-center flex-row ">
                                <div className="grow shrink flex-nowrap justify-center gap-[8px] flex items-center flex-row ">Ok</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThemeModal