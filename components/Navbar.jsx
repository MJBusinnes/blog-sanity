import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between lg:px-40 px-4 mt-8 items-center">
            <div className="p-2 px-4 rounded-full">
        <Link href="/">        
            <Image 
                src="/images/AIdea-logo-1.png" 
                width={40} 
                height={40} 
                alt="logo" />
            </Link>    
            </div>

            <nav className="flex flex-row space-x-4 mt-4">
                <Link href="/">Blog</Link>
                <Link href="/about">Produtos e Serviços</Link>
                <Link href="/contact">Materiais Grátis</Link>
            </nav>
        </div>
    )
}

export default Navbar