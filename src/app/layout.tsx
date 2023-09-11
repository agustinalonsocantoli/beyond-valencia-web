import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Valencia',
  description: 'Generated by create next app',
  icons: {
    icon: "/icon.svg",
    apple: "icon.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
