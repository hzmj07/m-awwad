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
        <div className="md:hidden absolute top-0 items-center justify-center flex z-0 w-full h-screen bg-gray-900">
          <div className="flex flex-col items-center py-4 space-y-4 text-black font-light tracking-wide text-sm">
            <button 
              className="absolute top-0 right-0 p-6 text-black"
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
              HOME
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/about');
                setIsMenuOpen(false);
              }}
            >
              ABOUT
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                router.push('/portfolio');
                setIsMenuOpen(false);
              }}
            >
              PORTFOLIO
            </button>
            <button 
              className="w-full text-2xl bg-white text-black p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
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