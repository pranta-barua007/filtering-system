import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Filtering System',
  description: 'This app showcases best practices and techniques for filtering data in Next.js',
}

const links = [{
  name: 'Josh (Client Side)',
  route: '/'
},
{
  name: 'Good (Client+QueryParam) 👍',
  route: '/good'
},
{
  name: 'Bad (Client+QueryPram) 👎',
  route: '/bad'
},
{
  name: 'SSR ⚡',
  route: '/ssr'
},
{
  name: 'Streaming 🚀',
  route: '/streaming'
}]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
         <header>
          <nav className='flex flex-wrap gap-10 w-full justify-center items-center'>
            <p className='font-bold text-2xl'>All Examples:</p>
            {
              links.map((link, idx) => <Link key={idx} href={link.route}>{link.name}</Link>)
            }
          </nav>
         </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
