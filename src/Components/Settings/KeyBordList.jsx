import React from 'react'

const KeyBordList = ({ close }) => {
  const items = [
    {
      name: 'Mark as unread',
      keys: ['Ctrl', 'Alt', 'Shift', 'U']
    },
    {
      name: 'Mute',
      keys: ['Ctrl', 'Alt', 'Shift', 'M']
    },
    {
      name: 'Archive chat',
      keys: ['Ctrl', 'Alt', 'Shift', 'E']
    },
    {
      name: 'Delete chat',
      keys: ['Ctrl', 'Alt', 'Backspace']
    },
    {
      name: 'Pin chat',
      keys: ['Ctrl', 'Alt', 'Shift', 'P']
    },
    {
      name: 'Search',
      keys: ['Ctrl', 'Alt', '/']
    },
    {
      name: 'Search chat',
      keys: ['Ctrl', 'Alt', 'Shift', 'f']
    },
    {
      name: 'New chat',
      keys: ['Ctrl', 'Alt', 'N']
    },
    {
      name: 'Next chat',
      keys: ['Ctrl', 'Alt', 'Tab']
    },
    {
      name: 'Previous chat',
      keys: ['Ctrl', 'Alt', 'Shift', 'Tab']
    },
    {
      name: 'Close chat',
      keys: ['Escapere']
    },
    {
      name: 'Close chat',
      keys: ['Ctrl', 'Alt', 'Shift', 'N']
    },
    {
      name: 'Profile and About',
      keys: ['Ctrl', 'Alt', 'P']
    },
    {
      name: 'Increase speed of selected voice message',
      keys: ['Shift', '.']
    },
    {
      name: 'Decrease speed of selected voice message',
      keys: ['Shift', ',']
    },
    {
      name: 'Settings',
      keys: ['Ctrl', 'Alt', ',']
    },
    {
      name: 'Emoji panel',
      keys: ['Ctrl', 'Alt', 'E']
    },
    {
      name: 'GIF panel',
      keys: ['Ctrl', 'Alt', 'G']
    },
    {
      name: 'Sticker panel',
      keys: ['Ctrl', 'Alt', 'S']
    },
    {
      name: 'Extended search',
      keys: ['Alt', 'K']
    },
    {
      name: 'Lock App',
      keys: ['Ctrl', 'Alt', 'L']
    },

  ]
  return (
    <>
      <div className="key-board-list min-w-[748px] w-full min-h-full h-[600px] justify-center flex-col box-border flex items-center">
        <div className="overflow-hideen w-auto rounded-[3px] flex-col flex box-border flex shadow-shadow1 bg-[#fff]">
          <div className="shrink relative grow w-full">
            <div className="leading-[1.43] text-[.8875rem]">
              <div className="py-[24px] box-border px-[36px]">
                <div className="text-[#111b21] text-[1.1875rem] leading-[1.4737] ">
                  Keyboard shortcuts
                </div>
                <div className="w-[440px] lg:w-[840px] max-h-[400px] mt-[24px] lg:mx-[-22px] pr-[18px] lg:flex-row lg:flex-wrap overflow-auto flex flex-col">
                  {
                    items.map((item, index) => {
                      return (
                        <div className="item lg:overflow-hidden lg:py-[14px] lg:px-[22px] lg:box-border lg:shrink lg:basis-[50%]  flex items-center text-[.8125rem] flex-none" key={index}>
                          <div className="overflow-hidden mr-[10px] grow text-[.875rem]">{item.name}</div>
                          <div className="text-end grow">
                            <div className="items-center flex justify-end gap-[4px] flex-row ">
                              {item.keys.map((i, index) => {
                                return (
                                  <div className="border border-solid border-[#3b4a543d]  py-[4px] px-[8px] shrink inline-flex text-[#111b21] text-[.75rem] bg-[#3b4a541f] rounded-[6px]" key={index}>
                                    {i}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
            <div className="pb-[25px] pt-[5px] flex px-[29px] flex justify-end text-end">
              <div className="items-end shrink flex flex-row justify-start ">
                <button className='border border-transparent py-[10px] leading-[1.1429] px-[24px] font-[500] rounded-[24px] text-[#fff] relative text-[.875rem] bg-[#008069]' onClick={close}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyBordList