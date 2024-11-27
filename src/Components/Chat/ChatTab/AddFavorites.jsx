import React from 'react'

const AddFavorites = () => {
  return (
    <>
        <div className="favorites">
            <div className="py-[72px] flex flex-col box-border items-center text-[#8696a0] shrink-0 text-center justify-start px-[50px] grow-0 ">
                <span>
                    <img src="assets/Images/addfavorites.svg" alt="" />
                </span>
                <div className="mt-[24px] text-[1.5rem] text-[#111b21] leading-[1.5] font-bold ">Add to favorites</div>
                <div className="mt-[8px] text-[#3b4a54] leading-[20px] text-[.875rem]">
                    <span>Make it easy to find the people and groups that matter most across WhatsApp.</span>
                </div>
                <button className='py-[8px] bg-transparent text-[#008069] leading-[20px] text-[.875rem] '>Add to favorites</button>
            </div>
        </div>
    </>
  )
}

export default AddFavorites