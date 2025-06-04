import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { StrictMode } from "react";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Muhammed Awwad",
  description: "The world through the lens of a creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
        <StrictMode>
          <Layout>{children}</Layout>
        </StrictMode>
      </body>
    </html>
  );
}
