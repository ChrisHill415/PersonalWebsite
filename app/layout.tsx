import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisjhill.com"),
  title: "Chris Hill — Computer Science & Statistics at Duke",
  description:
    "Chris Hill is a computer science and statistics student at Duke University, building useful software and exploring artificial intelligence. Explore projects, research, and experience.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chris Hill — Curiosity, turned into code.",
    description:
      "Software, AI research, and technology with purpose. Computer Science & Statistics at Duke University.",
    url: "https://chrisjhill.com",
    siteName: "Chris Hill",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Hill — Curiosity, turned into code.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
