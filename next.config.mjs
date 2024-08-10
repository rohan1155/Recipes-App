/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"], // Add 'cdn.dummyjson.com' to the list of allowed domains
  },
};

export default nextConfig;
