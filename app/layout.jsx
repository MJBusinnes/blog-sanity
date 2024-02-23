import '../styles/globals.css';

import { Inter } from 'next/font/google';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: "Blog | AIdea Generate",
  description: 'Receba as melhores dicas AI | Melhores PROMPTS | MATERIAIS GRÁTIS para você personalizar seu conteúdo e muito mais!',
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
