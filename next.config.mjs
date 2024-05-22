/** @type {import('next').NextConfig} */

const source = '/themoviedb-api/:path*';
const imgSource = '/themoviedb-api-img/:path*';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    { source, destination: 'https://api.themoviedb.org/3/:path*' },
    { source: imgSource, destination: 'https://image.tmdb.org/t/p/original/:path*' },
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

export default nextConfig;
