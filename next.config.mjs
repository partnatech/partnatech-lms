/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "34.133.45.178",
        port: "",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
