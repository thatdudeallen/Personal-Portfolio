"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap py-4">
      <Image
        src="/images/logo.png"
        alt="Allen Logo"
        width={140}
        height={40}
        className="w-[140px] h-auto"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-foreground text-lg relative after:content-[''] after:w-0 after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-1.5 after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-foreground"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-0 right-0 w-[200px] h-screen bg-primary z-50 pt-12 transition-transform duration-500 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 text-primary-foreground"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href} className="my-4 mx-6">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground text-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
