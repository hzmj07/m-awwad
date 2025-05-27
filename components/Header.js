"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="text-2xl font-light text-white tracking-wider">
          <Link href="/">Muhammed Awwad </Link>
        </div>
        <ul className="hidden md:flex space-x-12 text-white font-light tracking-wide text-sm">
          <li><Link href="/" className="hover:text-gray-300">ANA SAYFA</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">HAKKIMDA</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300">PORTFOLYO</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">İLETİŞİM</Link></li>
        </ul>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 items-center justify-center flex z-0 w-full h-screen bg-gray-900">
          <div className="flex flex-col items-center py-4 space-y-4 text-white font-light tracking-wide text-sm">
            <button 
              className="absolute top-0 right-0 p-6 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/');
                setIsMenuOpen(false);
              }}
            >
              ANA SAYFA
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/about');
                setIsMenuOpen(false);
              }}
            >
              HAKKIMDA
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/portfolio');
                setIsMenuOpen(false);
              }}
            >
              PORTFOLYO
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/contact');
                setIsMenuOpen(false);
              }}
            >
              İLETİŞİM
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 