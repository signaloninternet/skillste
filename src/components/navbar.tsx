"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - hidden when scrolled */}
          <div
            className={`flex-shrink-0 transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            <h1 className="text-2xl font-bold">Journal</h1>
          </div>

          {/* Nav Links */}
          <nav
            className={`hidden md:flex h-full w-content border-[2px] rounded-2xl px-10 items-center space-x-8 transition-all duration-300 ${
              scrolled
                ? "bg-white border-gray-200 shadow-md"
                : "bg-white/80 border-white"
            }`}
          >
            <a
              href="/"
              className="text-gray-900 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              About
            </a>
            <a
              href="/howitworks"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              How it Works
            </a>
            <a
              href="/services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Services
            </a>
          </nav>

          {/* Waitlist Button - hidden when scrolled */}
          <div
            className={`hidden md:block transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            <Link href="/auth">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-lg transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-all duration-300 ${
                scrolled
                  ? "bg-white shadow-md text-gray-800"
                  : "text-white hover:text-purple-600 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="/"
                className="block px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a
                href="/howitworks"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                How it Works
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                Services
              </a>
              <div className="px-3 py-2">
                <Link href="/auth">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-lg transition-all duration-300">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
