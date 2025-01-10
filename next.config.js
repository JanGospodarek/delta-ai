/** @type {import('next').NextConfig} */
module.exports = {
  output: "extensions/dist",
  trailingSlash: true,
  outDir: "extensions/dist",
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename =
      (isServer ? "../" : "") + "static/wasm/webassembly.wasm";
    return config;
  },
};
