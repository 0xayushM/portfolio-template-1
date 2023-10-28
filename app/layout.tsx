import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import websiteData from './data/websiteData.json'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>{websiteData.title}</title>
      <meta name='description' content={websiteData.description}/>
      <link href={websiteData.icon} rel='icon' type='image/png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
