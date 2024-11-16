/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withVanillaExtract(nextConfig);
