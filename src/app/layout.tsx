import type { Metadata } from 'next'
import '@/style/globals.css'

export const metadata: Metadata = {
  title: `Nhan Nguyen Thanh's AI Chatbot`,
  description: 'An assignment by Permutation'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-brandon'>{children}</body>
    </html>
  )
}
