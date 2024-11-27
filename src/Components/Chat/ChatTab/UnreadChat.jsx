import React from 'react'
import ChatMsgItems from '../../Items/ChatMsgItems'

const UnreadChat = () => {
  return (
    <>
        <div className="chat-items h-full overflow-hidden">
                <div className="chat-items-inner unreadchats h-full overflow-y-auto">

                    <ChatMsgItems/>
                </div>
            </div>
    </>
  )
}

export default UnreadChat