/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

//module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mzamin.com",
        port: "",
        pathname: "/uploads/worldcup/**",
      },
    ],
  },
};
