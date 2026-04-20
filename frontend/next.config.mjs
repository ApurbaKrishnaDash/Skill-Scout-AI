/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://192.168.0.106:5000/:path*",
      },
    ];
  },
};

export default nextConfig;
