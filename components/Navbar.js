'use client';

import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm shadow-md p-3">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <h1 className="text-white text-2xl lg:text-3xl font-bold">Shamyra Aliceia</h1>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-white text-sm lg:text-base font-medium">
          <li><a href="#contact" className="hover:text-gold-1 transition">Contact Me</a></li>
          <li><a href="#gallery" className="hover:text-gold-1 transition">Gallery</a></li>
          <li><a href="#about" className="hover:text-gold-1 transition">About</a></li>
          <li><a href="#reviews" className="hover:text-gold-1 transition">Reviews</a></li>
          <li><a href="#services" className="hover:text-gold-1 transition">Services</a></li>
          <li>
            <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-gold-1 transition">
              <Mail className="h-4 w-4" />
              Mail
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav with Animation */}
      <div
        className={clsx(
          "overflow-hidden md:hidden transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-sm text-white text-sm",
          menuOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"
        )}
      >
        <div className="space-y-4">
          <a href="#contact" className="block hover:text-gold-1">Contact Me</a>
          <a href="#gallery" className="block hover:text-gold-1">Gallery</a>
          <a href="#about" className="block hover:text-gold-1">About</a>
          <a href="#reviews" className="block hover:text-gold-1">Reviews</a>
          <a href="#services" className="block hover:text-gold-1">Services</a>
          <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-gold-1">
            <Mail className="h-4 w-4" />
            Mail
          </a>
        </div>
      </div>
    </header>
  );
}
