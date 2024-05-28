import Image from 'next/image'
import { FC } from 'react'

const SystemChat: FC<{ content: string }> = ({ content }) => {
  return (
    <div className={`flex gap-3 md:gap-4`}>
      <div className='basis-[32px] min-w-[32px] md:basis-[50px] md:min-w-[50px] flex justify-start'>
        <div className='h-8 w-8 max-w-8 md:h-[50px] md:w-[50px] md:max-w-[50px] relative bg-white rounded-full overflow-hidden'>
          <Image
            src='https://t3.ftcdn.net/jpg/03/22/38/32/360_F_322383277_xcXz1I9vOFtdk7plhsRQyjODj08iNSwB.jpg'
            alt='System'
            fill
            sizes='10vw'
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <p>{content}</p>
    </div>
  )
}
export default SystemChat
