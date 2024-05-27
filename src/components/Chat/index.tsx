'use client'
import { FC } from 'react'
import { useChat } from 'ai/react'

const Chat: FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: '/api/openai'
    })
  return (
    <div className='w-full h-full flex-1 flex flex-col justify-between items-center p-6'>
      <div>For chat response</div>
      <div id='input-wrapper' className='w-1/2'>
        <form onSubmit={handleSubmit} className='w-full relative'>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder='Type some word here...'
            className='w-full text-xl px-5 py-2 rounded-[12px]'
          />
          <button
            type='submit'
            className='transition duration-300 absolute -translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-amber-300 hover:bg-amber-500 px-2 py-1 rounded-full text-[18px] leading-none text-center'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
