import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
