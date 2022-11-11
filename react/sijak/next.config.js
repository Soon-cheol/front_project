/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  exportTrailingSlash: true,
  assetPrefix: "http://localhost:3000/",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// console.log('__dirname', __dirname);

module.exports = nextConfig
