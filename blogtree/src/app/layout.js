import { Raleway } from 'next/font/google'
import 'bulma'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogTREE',
  description: 'A blog space where anyone could express his or her thoughts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}</body>
    </html>
  )
}




