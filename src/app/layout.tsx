import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeApp24 - Do what you like, with who you like",
  description: "VibeApp24 is a social media platform that allows you to connect with others who share your interests to organize and enjoy activities together. That can be team sports events, eating, or any kind of social gathering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
