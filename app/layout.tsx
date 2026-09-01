import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Nikita — Roblox / Luau Developer",
  description: "Roblox developer specializing in gameplay systems, client-server architecture, data systems and scalable game mechanics.",
  keywords: ["Roblox Developer", "Luau Developer", "Roblox Studio", "Gameplay Systems", "Client Server Architecture"],
  openGraph: {
    title: "Nikita — Roblox / Luau Developer",
    description: "Gameplay Systems · Architecture · Luau",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08090c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}><body>{children}</body></html>;
}
