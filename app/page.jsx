import Image from 'next/image'
import Hero from '/components/Hero'
import BlogSection from '../components/BlogSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mb-8 text-blue-600">
      <Hero />
      <BlogSection />
      
    </main>
  )
}
