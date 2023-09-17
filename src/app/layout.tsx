import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Splash from '@/components/splash'
import Header from './header/header'
import { ThemeProvider } from './theme-provider'
import Socials from '@/components/socials'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Connor Wilson',
  description: 'Connor Wilson\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            <Header></Header>
            <Socials></Socials>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
