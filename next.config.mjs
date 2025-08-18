import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Adicione esta linha para resolver o warning
  allowedDevOrigins: ['192.168.1.*', 'localhost'],
  
  // Ou se preferir uma configuração mais flexível:
  // allowedDevOrigins: ['192.168.1.*', 'localhost'],
};

export default withMDX(nextConfig);