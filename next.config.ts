import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

interface MyNextConfig extends NextConfig {
  eslint?: {
    dirs: string[];
  };
}

const nextConfig: MyNextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [{ hostname: 'eu-west-2.graphassets.com' }],
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.*.*:3000'],
};

const withNextIntl = createNextIntlPlugin();

const config = withNextIntl(nextConfig);

(config as MyNextConfig).eslint = { dirs: ['src'] };

export default config;
