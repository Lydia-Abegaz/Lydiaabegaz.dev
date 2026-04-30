import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lidia Aliso | Full Stack & Blockchain Developer",
  description:
    "Full-stack and blockchain developer from Ethiopia. Crafting digital experiences with React, Next.js, Node.js, and Soroban smart contracts.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Soroban",
    "Stellar",
    "React",
    "Next.js",
    "MERN Stack",
    "Portfolio",
    "Ethiopia",
    "Addis Ababa",
    "AASTU",
  ],
  authors: [{ name: "Lidia Aliso" }],
  openGraph: {
    title: "Lidia Aliso | Full Stack & Blockchain Developer",
    description:
      "Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
