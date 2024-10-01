import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Example from "@/components/navbar";
import Newsletter from "@/components/newsletter";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "farmopti",
  description: "AI-driven platform for crop yield prediction, optimized farming, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`
      }
      >
        <Example/>
        {children}
        <Newsletter/>
      </body>
    </html>
  );
}
