import React from 'react'
import Header from '../Header'
// import DownloadMsg from './DownloadMsg'
import ChatList from './ChatList'
import ChatHistory from './ChatHistory'

const ChatFirst = () => {
  return (
    <>
      <div className="chat ">
        <div className="chat-inner relative z-[100] w-full h-full">

          <div className=" whatsapp" >
            <Header />
            <ChatList/>
            <ChatHistory/>
            {/* <DownloadMsg /> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default ChatFirst