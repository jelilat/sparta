/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    webpack: (config) => {
      config.externals.push("pino-pretty", "lokijs", "encoding");
      return config;
    },
    images: {
        domains: [
          "",
          "nftmedia.parallelnft.com",
          "oayc.io",
          "arweave.net",
          "i.seadn.io"
        ],
    }
}

module.exports = nextConfig
