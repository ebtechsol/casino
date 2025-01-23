import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    AUTHENTICATION_SESSION_TIMEOUT: process.env.AUTHENTICATION_SESSION_TIMEOUT,
    AUTHENTICATION_SESSION_SECRET: process.env.AUTHENTICATION_SESSION_SECRET,
  },
};

export default nextConfig;
