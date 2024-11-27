import React from 'react'
import Header from '../Header'
import StatusList from './StatusList'
import DownloadMsg from '../Chat/DownloadMsg'

const Status = () => {
  return (
    <>
          <div className="status ">
            <div className="2xl-block none absolute top-0 left-0 z-[-1] w-full h-[127px] bg-green-1"></div>
            <div className="flex relative whatsapp bg-[#f7f8fa] shadow-custom" >
                <Header/>
                <StatusList/>
                <DownloadMsg/>
            </div>
        </div>
    </>
  )
}

export default Status