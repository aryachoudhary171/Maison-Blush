import type { NextConfig } from "next";
const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserSite = repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repository && !isUserSite ? `/${repository}` : "",
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
