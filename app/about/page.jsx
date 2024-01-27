// Esta parte conecta o roteamento do Blog, Produtos e Serviços e Materiais Grátis 
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
   // <div className="flex min-h-screen flex-col mb-8 lg:px-40 px-4">AboutPage</div>
   <div className="flex min-h-screen flex-col h-52">
    <div className="flex flex-col w-full justify-center items-center h-80 space-y-8">
        <h1 className="font-semibold text-5xl">Uh Oh</h1>
        <p className="flex text-center">
            Oops...O link da página que você acabou de clicar está quebrado ou foi removido. Tente novamente!
        </p>
        <Link 
        href="/"
        className="bg-primary-brand text-primary-bg py-1 px-8 rounded hover:bg-primary-hover"      
        >
            Voltar a Página Inicial    
        </Link>
    </div>
   </div>
  )
}

export default AboutPage