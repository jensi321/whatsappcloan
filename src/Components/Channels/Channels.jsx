import React from 'react'
import Header from '../Header'
import ChannelsList from './ChannelsList'
import ChannelMsgHistory from './ChannelMsgHistory'

const Channels = () => {
  return (
    <>
          <div className="channels ">
            <div className="2xl-block none absolute top-0 left-0 z-[-1] w-full h-[127px] bg-green-1"></div>
            <div className="flex relative whatsapp bg-[#f7f8fa] shadow-custom" >
                <Header/>
                <ChannelsList/>
                {/* <DownloadMsg/> */}
                <ChannelMsgHistory/>
            </div>
        </div>
    </>
  )
}

export default Channels