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
        <div className="text-2xl font-light text-black tracking-wider">
          <Link href="/">Muhammed Awwad</Link>
        </div>
        <ul className="hidden md:flex space-x-12 text-black font-light tracking-wide text-sm">
          <li>
            <Link
              href="/"
              className="hover:text-gray-600 relative transition-colors duration-200 after:content-[''] after:block after:h-[2px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 relative transition-colors duration-200 after:content-[''] after:block after:h-[2px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="hover:text-gray-600 relative transition-colors duration-200 after:content-[''] after:block after:h-[2px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-600 relative transition-colors duration-200 after:content-[''] after:block after:h-[2px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-lg z-50 animate-slideIn">
          <div className="relative flex flex-col items-center justify-center h-full py-4 space-y-4">
            <button 
              className="absolute top-0 right-0 p-6 text-black animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              className="w-full max-w-xs text-2xl bg-white/90 backdrop-blur-sm text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
              onClick={() => {
                router.push('/');
                setIsMenuOpen(false);
              }}
            >
              HOME
            </button>
            <button 
              className="w-full max-w-xs text-2xl bg-white/90 backdrop-blur-sm text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
              onClick={() => {
                router.push('/about');
                setIsMenuOpen(false);
              }}
            >
              ABOUT
            </button>
            <button 
              className="w-full max-w-xs text-2xl bg-white/90 backdrop-blur-sm text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
              onClick={() => {
                router.push('/portfolio');
                setIsMenuOpen(false);
              }}
            >
              PORTFOLIO
            </button>
            <button 
              className="w-full max-w-xs text-2xl bg-white/90 backdrop-blur-sm text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
              onClick={() => {
                router.push('/contact');
                setIsMenuOpen(false);
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}