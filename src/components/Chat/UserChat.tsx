import Image from 'next/image'
import { FC } from 'react'

const UserChat: FC<{ content: string }> = ({ content }) => {
  return (
    <div className={`flex justify-end gap-3 md:gap-4`}>
      <p>{content}</p>
      <div className='bbasis-[32px] min-w-[32px] md:basis-[50px] md:min-w-[50px] flex justify-end'>
        <div className='h-8 w-8 max-w-8 md:h-[50px] md:w-[50px] md:max-w-[50px] relative bg-white rounded-full overflow-hidden'>
          <Image
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
            alt='User'
            fill
            sizes='10vw'
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}

export default UserChat
