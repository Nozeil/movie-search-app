/** @type {import('next').NextConfig} */
const source = '/themoviedb-api/:path*';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [{ source, destination: 'https://api.themoviedb.org/3/:path*' }],
};

export default nextConfig;
