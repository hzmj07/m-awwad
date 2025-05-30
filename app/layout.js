import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { StrictMode } from 'react'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammed Awwad",
  description: "The world through the lens of a creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StrictMode>
           <Layout>{children}</Layout>
        </StrictMode>
      </body>
    </html>
  );
}
