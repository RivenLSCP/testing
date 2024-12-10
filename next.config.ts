import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/x',
        destination: 'https://x.com/kyne_ai',
        permanent: false,
      },
      {
        source: '/tg',
        destination: 'https://t.me/kyne_ai',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'https://blog.kyne.ai',
        permanent: false,
      },
      {
        source: '/docs',
        destination: 'https://docs.kyne.ai',
        permanent: false,
      },
      {
        source: '/career',
        destination: 'https://careers.kyne.ai',
        permanent: false,
      },
      {
        source: '/join',
        destination: 'https://join.kyne.ai',
        permanent: false,
      },
      // {
      //   source: '/:path*',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
