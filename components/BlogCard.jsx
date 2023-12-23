import Image from "next/image";

const BlogCard = () => {
  return (
    <div className='flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden'>
        <Image src="/images/creators-content.png" 
               alt="creators-content"
               width={300}
               height={50}
               />
        <div className="flex flex-col">
        <p className="font-semibold text-sm text-dark-accent">
            Maicon, 23 Dez 2023
        </p>
        <p className="font-semibold text-sm text-light-accent">
            Redator
        </p>
        </div>
        <div>
        <h1 className="text-xl font-bold text-primary-brand">Como criar vídeos com IA em 2024</h1>    
        </div>
        <div>
        <p className="line-clamp-2 text-primary-dark">
        Olá, criadores de conteúdo, chegou a mais nova IA que vai revolucionar a forma como você gera e desenvolve seus conteúdos nas mídias sociais, seja um dos primeiros a experimentar.
        </p>
        </div> 
        <div className="flex flex-row flex-wrap space-x-2">
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">Chatgpt</p>
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">Prompts</p>
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">Ferramentas IA</p>
        </div>      
    </div>
    
  )
};

export default BlogCard;