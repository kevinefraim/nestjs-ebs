/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
output:'standalone',
  images:{
    unoptimized:true
  },
  exportPathMap: ()=>  {return {'/': { page: '/' }}}
}

module.exports = nextConfig
