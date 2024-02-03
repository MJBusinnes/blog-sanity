"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-40 px-4 mt-8 items-center">
      <div className="p-2 px-4 rounded-full">
        <Link href="/">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <h1 className="flex text-gray-400 hover:text-teal-400 duration-300 px-12 -mt-7 font-semibold text-center sm:text-left">AIdea Generate</h1>
        </Link>
      </div>

      {/* Botão com link externo */}
      <a
        href="https://ai-saas-project-mu.vercel.app/"
        target="_blank"  // Abre em uma nova aba
        rel="noopener noreferrer"  // Boas práticas de segurança para links externos
        className="bg-[#111827] text-center text-white rounded-full py-4 px-6 sm:w-auto w-full mx-4 my-2 md:my-0 leading-4"
      >
        CRIE SUA CONTA GRÁTIS<br />
        <small className="text-primary-brand font-light">Não é necessário inserir cartão de crédito</small>
      </a>

      <nav className="lg:flex lg:flex-row font-semibold space-x-4 mt-4 hidden">
        <Link href="/">Blog</Link>
        <Link href="/about">Produtos e Serviços</Link>
        <Link href="/contact">Materiais Grátis</Link>
      </nav>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {showMenu && (
        <div className="lg:hidden absolute top-16 right-4 bg-[#111827] p-4 rounded-md shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/blog" className="text-white font-semibold">
              Blog
            </Link>
            <Link href="/about" className="text-white font-semibold">
              Produtos e serviços
            </Link>
            <Link href="/contact" className="text-white font-semibold">
              Materiais Grátis
            </Link>
            {/* Adicione os outros links do menu conforme necessário */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;