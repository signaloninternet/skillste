"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "#" },
    { name: "Join Discord", href: "#" },
    { name: "Pricing", href: "#" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-30 p-6 flex justify-between items-center max-w-7xl mx-auto"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-white">Journal</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-lg">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-accent-purple transition-colors text-white">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:text-accent-purple">Login</Button>
        <Button className="bg-accent-purple hover:bg-accent-purple/90 text-white px-6 py-3 rounded-lg">
          Sign Up
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-black text-white flex flex-col justify-between p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Journal</span>
              <SheetTrigger asChild>
              </SheetTrigger>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-accent-purple transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <Button variant="ghost" className="text-white justify-start px-0 hover:text-accent-purple">
                Login
              </Button>
              <Button className="bg-accent-purple hover:bg-accent-purple/90 text-white px-6 py-3 rounded-lg">
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
