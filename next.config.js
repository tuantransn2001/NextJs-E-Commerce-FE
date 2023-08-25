/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lenleys.co.uk',
      },
<<<<<<< HEAD
=======
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
    ],
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
