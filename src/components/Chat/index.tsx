'use client'
import { FC, useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import Image from 'next/image'

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
    <div className='w-full h-full flex-1 flex flex-col justify-between items-center p-6'>
      {/*Height of max height = screen height - header - main's padding - input height*/}
      <div
        id='chat-response'
        ref={chatWrapperRef}
        className='text-xl overflow-y-auto w-3/4 h-[75vh] max-h-[calc(100vh-90px-48px-50px)] flex flex-col gap-7'
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className='basis-[5%] min-w-[5%]'>
              <div className='h-[50px] w-[50px] max-w-[50px] relative bg-white rounded-full overflow-hidden'>
                <Image
                  src={getAvatar(m.role === 'user' ? 'user' : 'bot')}
                  alt='User'
                  fill
                  sizes='10vw'
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className={`${m.role === 'user' ? 'text-right' : ''}`}>
              {m.content}
            </p>
          </div>
        ))}
      </div>
      <div id='input-wrapper' className='w-1/2'>
        <form onSubmit={handleSubmit} className='w-full relative'>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={
              isLoading ? 'AI is typing...' : 'Type some word here...'
            }
            className='w-full text-xl px-5 py-2 rounded-[12px]'
          />
          <button
            disabled={isLoading}
            type='submit'
            className={`transition duration-300 absolute -translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 
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
