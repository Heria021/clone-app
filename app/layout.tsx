import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CentralAxis - Data Center Management Software",
  description: "Increase uptime, reduce costs, automate operations, and stay compliant. Built for colocations, data centers, and cloud providers.",
  icons: {
    icon: [
      { url: '/logo.webp' },
      { url: '/logo.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/logo.webp', sizes: '32x32', type: 'image/webp' },
    ],
    apple: [
      { url: '/logo.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
