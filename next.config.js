/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth0/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

