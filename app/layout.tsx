import type { Metadata } from "next";
import "./globals.css";

const [githubOwner, githubRepository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const pagesBasePath = githubRepository && githubRepository.toLowerCase() !== `${githubOwner?.toLowerCase()}.github.io` ? `/${githubRepository}` : "";

export const metadata: Metadata = {
  title: "MAISON BLUSH — Your Beauty, Beautifully Defined",
  description: "A modern beauty experience. Explore the Maison Blush portfolio concept for considered hair, skin and beauty rituals.",
  openGraph: { title: "MAISON BLUSH", description: "Your Beauty, Beautifully Defined.", type: "website" },
  icons: { icon: `${pagesBasePath}/icon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
