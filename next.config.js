/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: false,
  rewrites: false,
  headers: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/portofolio',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
