/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: '**.r2.dev',
        },
      ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/admin/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ]
      }
    ]
  }
};

export default nextConfig;
