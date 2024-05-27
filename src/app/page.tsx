import Logo from '@/components/Icon/logo'
import Link from 'next/link'
import Chat from '@/components/Chat'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-primary'>
      <header className='w-full flex items-center justify-between p-6 border-b-[1px] border-primary'>
        <Link href='https://www.permutation.co/' passHref target='_blank'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10'>
              <Logo />
            </div>
            <p className='text-[26px]'>Permutation</p>
          </div>
        </Link>

        <p className='text-2xl'>Nhan Nguyen Thanh</p>
      </header>
      <main className='flex flex-col flex-1 w-full'>
        <Chat />
      </main>
    </div>
  )
}
