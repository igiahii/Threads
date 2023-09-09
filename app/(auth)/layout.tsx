import './../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import {Providers} from "./../providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads app',
  description: 'A Nextjs 13 Meta Threads Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
      <Providers>
        {children}
    </Providers>
        </body>
    </html>
    </ClerkProvider>
  )
}
