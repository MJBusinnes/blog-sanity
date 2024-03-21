import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
      <div className="px-4 flex flex-col my-8 mx-8 bg-[#2f343f] border-2 border-slate-300 py-6 rounded-2xl lg:px-40 md:flex-row">
          <div className="flex flex-col space-y-2 justify-end flex-1 h-18">
              <h1 className=" text-white text-2xl sm:text-4xl px-10 -mx-10 mr-4 font-bold">
              "Veja em primeira mão as melhores novidades e estratégias personalizadas. Assine a Newsletter!”
              </h1>
              <p className="text-white mt-2 mb-1 underline decoration-4 decoration-[#f7ab0a] h-32">
              Receba as melhores dicas AI | Melhores PROMPTS | MATERIAIS GRÁTIS para você personalizar seu conteúdo e muito mais!
              </p>
              <Link 
                  href="/Blog"
                  className="flex items-center my-7 -mx-4.5 w-60 h-8 px-9 py-8 bg-yellow-400  text-sm font-semibold text-[#2f343f]  rounded"
              >
                 ASSINAR NEWSLETTER
              </Link> 
          </div>
          <div className="flex justify-center mt-18 rounded-2xl">
              <Image 
                  className="mt-6 rounded-3xl"
                  src="/images/newsletter.png"
                  alt="Loja petshop"
                  width={400}
                  height={60}
              />
          </div>
      </div>
    )
  }
  
  

export default Hero
