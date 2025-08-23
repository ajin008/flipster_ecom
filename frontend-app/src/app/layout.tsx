import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopProgressBar from "@/components/shared/TopProgressBar";
import GamingToaster from "@/components/shared/GamingToaster";
import { Analytics } from "@vercel/analytics/next";
import PWAInstallModal from "@/components/shared/PWAInstallModal";
import ServiceWorkerProvider from "@/providers/ServiceWorkerProvider";

import { GoogleSignupModalProvider } from "@/context/GoogleSignupModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlipSter",
  description: "E-commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/ICON.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleSignupModalProvider>
          <div className="container mx-auto px-2 sm:px-4 py-4 flex min-h-screen flex-col">
            <TopProgressBar />
            <GamingToaster />
            <PWAInstallModal />
            <main className="flex-grow">
              {children}
              <ServiceWorkerProvider />
              <Analytics />
            </main>
          </div>
        </GoogleSignupModalProvider>
      </body>
    </html>
  );
}
