import type { NextConfig } from 'next';

export const basePath =
    process.env.NODE_ENV === 'production'
        ? '/bookclub-management-ui'
        : undefined; // for GitHub Pages deployment only

const nextConfig: NextConfig = {
    output: 'export',
    basePath,
    images: {
        unoptimized: true,
        // dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
