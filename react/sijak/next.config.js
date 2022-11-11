/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 소스코드 압축 경량화 
  // distDir: "build",
  // basePath: "/src",
  // exportTrailingSlash: true,
  assetPrefix: "./",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// console.log('__dirname', __dirname);

module.exports = nextConfig
