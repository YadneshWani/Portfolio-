/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: {
  //       test: /\.(js|ts)x?$/,
  //      // for webpack 5 use
  //      // { and: [/\.(js|ts)x?$/] }
  //     },
      
  //     use: ['@svgr/webpack'],
  //   });
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
