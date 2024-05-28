'use client'
import { FC, useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import UserChat from '@/components/Chat/UserChat'
import SystemChat from '@/components/Chat/SystemChat'

const getAvatar = (type: 'user' | 'bot') => {
  return type === 'user'
    ? 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
    : 'https://t3.ftcdn.net/jpg/03/22/38/32/360_F_322383277_xcXz1I9vOFtdk7plhsRQyjODj08iNSwB.jpg'
}

const Chat: FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/openai',
      initialMessages: [
        {
          role: 'system',
          content:
            'Hi, this is the AI chat box built by Nhan Nguyen Thanh. How can I help you?',
          id: '1'
        }
      ]
    })

  const chatWrapperRef = useRef<HTMLDivElement>(null)
  const scroll = () => {
    if (!chatWrapperRef.current) return
    const { offsetHeight, scrollHeight, scrollTop } = chatWrapperRef.current
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatWrapperRef.current.scrollTo(0, scrollHeight + 200)
    }
  }

  useEffect(() => {
    scroll()
  }, [messages])

  return (
    <div className='w-full h-full flex-1 flex flex-col justify-between items-center py-6 px-4 md:px-6'>
      {/*Height of max height = screen height - header - main's padding - input height*/}
      <div
        id='chat-response'
        ref={chatWrapperRef}
        className='text-base md:text-xl overflow-y-auto w-full md:w-3/4 h-[80vh] max-h-[calc(100vh-45px-48px-45px)]  md:max-h-[calc(100vh-90px-48px-50px)] flex flex-col gap-5 md:gap-7'
      >
        {messages.map((m) =>
          m.role === 'user' ? (
            <UserChat content={m.content} key={m.id} />
          ) : (
            <SystemChat content={m.content} key={m.id} />
          )
        )}
      </div>
      <div id='input-wrapper' className='w-full md:w-1/2'>
        <form onSubmit={handleSubmit} className='w-full relative'>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={
              isLoading ? 'AI is typing...' : 'Type some word here...'
            }
            className='w-full text-base md:text-xl px-5 py-2 rounded-[12px]'
          />
          <button
            disabled={isLoading}
            type='submit'
            className={`transition duration-300 absolute -translate-x-[calc(100%+14px)] top-1/2 -translate-y-1/2 
             px-2 py-1 rounded-full text-[18px] leading-none text-center 
             ${isLoading ? 'bg-gray-500 select-none cursor-not-allowed' : 'bg-amber-300 hover:bg-amber-500'}`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
