'use client';

import { SocialIcon } from 'react-social-icons';
import Image from "next/image";
import CookieNotification from './CookieNotification';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 bg-[rgb(47,52,63)] sm:grid-cols-2 lg:grid-cols-3 items-center h-70 mb-18">
      <a href="/" className='flex items-center mx-auto'>
        <Image
          className='h-8 w-10 flex items-center mx-auto mt-8'
          src="/favicon.ico"
          alt="Logo"
          width={50}
          height={30}
        />
        <h1 className="flex items-center text-gray-400 hover:text-teal-400 duration-300 ml-2 mt-8 text-center sm:text-left">AIdea Generate</h1>
      </a>
      <div className="text-center text-gray-400 hover:text-teal-400 duration-300 text-sm leading-6 mt-4 sm:mt-0">
        <p className='mt-8'>Cachoeirinha/RS</p>
        <p>Brasil</p>
      </div>
      <div className="text-center text-gray-400 hover:text-teal-400 duration-300 text-sm leading-6 mt-4 sm:mt-0">
        <h3 className="text-bold mt-8">Atendimento:</h3>
        <p>Suporte via chat 24/7</p>
        <p>Email: suporte-aidea@zohomail.com</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center px-4 sm:px-8 py-4 sm:py-8 mb-8 mt-8 ">
        <div className="items-center text-sm mx-0 pr-6 pt-2 gap-4 relative h-14 w-full sm:w-40 mt-2 leading-4 sm:leading-2">
          <p className='text-center ml-5 mb-4 text-gray-400 hover:text-teal-400 duration-300 sm:text-left '>Mídias Sociais</p>
          <div className="flex items-center justify-center">
            <SocialIcon url="https://linkedin.com/company/aidea-generate" className="mx-1" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://twitter.com/" className="mx-1" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="http://instagram.com/" className="mx-1" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="http://medium.com/" className="mx-1" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
          </div>
        </div>
      </div>
      <div className='text-center px-0 sm:py-8 text-white mt-16 mb-8'>
        <p>©Copyright 2024 - Todos os direitos reservados | <span className="text-[#44E3D3]">Termos de Uso.</span></p>
      </div>
      
    <div className="grid grid-cols-1 text-center bg-[#2f343f] sm:grid-cols-2 lg:grid-cols-3 items-center h-70 mb-18">
      {/* ... (seu código existente) ... */}

      {/* Adicione o CookieNotification aqui */}
      <CookieNotification />
    </div>

    </div>

    
  );
};

export default Footer;
