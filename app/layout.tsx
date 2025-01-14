import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import  Navbar  from "./components/Navbar";
import  Footer  from "./components/Footer";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from './AddBootstrap';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Casino",
  description: "Casino Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <meta name="darkreader-lock" /> 
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        <AddBootstrap />
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
