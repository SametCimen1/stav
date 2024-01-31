/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pisces.bbystatic.com',
          },
        ],
      },
};

export default nextConfig;
