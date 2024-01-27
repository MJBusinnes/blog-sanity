import '../styles/globals.css';

import { Inter } from 'next/font/google';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog | AIdea Generate',
  description: 'Desbloqueie a sua criatividade tudo em um único lugar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
