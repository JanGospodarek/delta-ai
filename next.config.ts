import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/.' : '',
    output: 'export',
    trailingSlash: true,
    webpack(config, {isServer}) {
        if (!isServer) {
            config.devtool = 'source-map'; // Enable source maps
        }
        return config;
    },
};

export default nextConfig;
