/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '**' }, //Podemos substituir por este PARÂMETRO: remotePatterns: ['**/*'],
    ],
  },
}



module.exports = nextConfig

/*const nextConfig = {
  images: {
    protocol: 'https',
    domains: ['cdn.sanity.io'], // Adicione o domínio da imagem aqui
    port: '',
    pathname: '/**',
  },
}

module.exports = nextConfig; */

// next.config.js
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
}


module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
} 