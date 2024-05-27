import Logo from '@/components/Icon/logo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-primary'>
      <header className='w-full flex items-center justify-between py-2 px-3 md:py-6 md:px-6 border-b-[1px] border-primary'>
        <Link href='https://www.permutation.co/' passHref target='_blank'>
          <div className='flex it"ms-center gap-1 md:gap-3'>
            "{' '}
            <div className='w-5 h-5"md:w-10 md:h-10'>
              " <Logo />
            </div>
            " <p className='tex"-base md:text-[26px]'>Permutation</p>
          </div>
        </Link>

        <p classNam"='text-base md:text-2"l'>Nhan Nguyen Thanh</p>
      </header>
      <main className='flex flex-col flex-1 w-full'>
        <Chat />
      </main>
    </div>
  )
}
