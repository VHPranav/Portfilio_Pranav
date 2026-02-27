import type { Metadata } from "next";
import { DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { GridLines } from "@/components/ui/grid-lines";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://vhpranav.com"),
  title: "V H Pranav",
  description: "Front-end developer and UI/UX Designer",
};

import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${caveat.variable}`}>
        <Navbar />
        <GridLines />
        {children}
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-7CG0MCY0K4"} />
      </body>
    </html>
  );
}
