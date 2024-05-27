'use client'
import { FC } from 'react'
import { useChat } from 'ai/react'

const Chat: FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: '/api/openai'
    })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
      <p>Is Loading {isLoading}</p>
      <p>Error {JSON.stringify(error)}</p>
      {JSON.stringify(messages)}
    </div>
  )
}

export default Chat
