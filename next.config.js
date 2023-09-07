/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/service/:path*",
  //         destination: process.env.NEXT_PUBLIC_SERVER_PARKING_DOMAIN + "/:path*",
  //       },
  //     ];
  //   },
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["vi", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "vi",
    localeDetection: false,
  },
  images: {
    domains: [
      "localhost",
      "192.168.103.92",
      "phannv.vercel.app",
      "images.unsplash.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
