"use client";

import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Disc,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black py-16 text-gray-400 overflow-hidden">
      {/* Neon top gradient line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-sm" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Brand & Socials */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 flex items-center justify-center text-black font-bold text-sm">
              J
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Journal
            </span>
          </div>
          <p className="text-sm mb-6 text-gray-500">
            Built by traders, for traders.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200" />
            </Link>
            <Link href="#" aria-label="Discord">
              <Disc className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Blog", "Pricing", "Features", "Join Discord"].map((link, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            {["Terms of Service", "Privacy Policy", "Refund Policy"].map((link, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-xs text-gray-500 relative z-10">
        &copy; {new Date().getFullYear()} Journal. All rights reserved.
      </div>
    </footer>
  );
}
