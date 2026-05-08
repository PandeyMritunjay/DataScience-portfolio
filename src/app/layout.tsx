import type { Metadata } from "next";
import { Allura, Dancing_Script, Inter, Parisienne } from "next/font/google";
import "./globals.css";
import SpotlightCursor from "@/components/SpotlightCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const parisienne = Parisienne({
  subsets: ["latin"],
  variable: "--font-parisienne",
  weight: ["400"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: ["400"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hire Data Scientist",
  description: "Portfolio of Mritunjay Pandey, a Data Scientist and AI Engineer specializing in machine learning, deep learning, and artificial intelligence solutions.",
  keywords: ["Data Science", "AI Engineer", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Portfolio"],
  authors: [{ name: "Mritunjay Pandey" }],
  openGraph: {
    title: "Mritunjay Pandey - Data Scientist & AI Engineer",
    description: "Portfolio showcasing AI and Data Science projects",
    url: "https://thedatascientist.live",
    siteName: "Mritunjay Pandey Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mritunjay Pandey - Data Scientist & AI Engineer",
    description: "Portfolio showcasing AI and Data Science projects",
  },
  icons: {
    icon: "fav1.png",
    shortcut: "D:\AI Fullstack\CascadeProjects\windsurf-project\logos\fav1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${parisienne.variable} ${allura.variable} ${dancing.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
