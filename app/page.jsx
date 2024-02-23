import Image from 'next/image'
import Hero from '/components/Hero'
import BlogSection from '../components/BlogSection'

export const metadata = {
  title: "Blog | AIdea Generate",
  description: "Receba as melhores dicas AI | Melhores PROMPTS | MATERIAIS GRÁTIS para você personalizar seu conteúdo e muito mais!"
} 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mb-8 text-blue-600">
      <Hero />
      <BlogSection />
      
    </main>
  )
}
