import React from 'react'
import ChatMsgItems from '../../Items/ChatMsgItems'

const AllChatList = () => {
    return (
        <> 
            <div className="chat-items h-full overflow-hidden "> 
                <div className="chat-items-inner h-full overflow-y-auto">
                   
                   <ChatMsgItems/>
                </div>
            </div>
        </>
    )
}

export default AllChatList