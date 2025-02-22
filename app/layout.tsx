import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { Space_Grotesk } from "next/font/google"
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { VideoProvider } from "@/context/video";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeoCreate AI",
  description: "Next-gen AI-powered content creation suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html  lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} bg-gradient-to-br from-gray-900 to-black text-white`}
      >
        <VideoProvider>
        <Navbar/>
        {children}
        </VideoProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
