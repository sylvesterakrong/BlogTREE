import { Exo_2} from 'next/font/google'
import 'bulma'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Exo_2({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogTREE',
  description: 'A blog space where anyone could express his or her thoughts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar/>
        </nav>

          {children}
          
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}




