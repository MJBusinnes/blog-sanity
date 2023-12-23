import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between lg:px-40 px-4 mt-8 items-center">
            <div className="p-2 px-4 rounded-full">
            <Image 
                src="/images/AIdea-logo-1.png" 
                width={40} 
                height={40} 
                alt="logo" />
            </div>

            <nav className="flex flex-row space-x-4 mt-4">
                <p>Blog</p>
                <p>Produtos e Serviços</p>
                <p>Materiais Grátis</p>
            </nav>
        </div>
    )
}

export default Navbar