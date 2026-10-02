/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5zchqatc5bfkxibe.public.blob.vercel-storage.com",
        pathname: "/politicos/**",
      },
      {
        protocol: "https",
        hostname: "5zchqatc5bfkxibe.public.blob.vercel-storage.com",
        pathname: "/partidos-siglas/**",
      },
    ],
  },
};

export default nextConfig;
