import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/saas-starter",
        destination: "https://github.com/hellrae/saas-starter",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
