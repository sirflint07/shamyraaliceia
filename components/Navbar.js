'use client';

import { Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Shamyra Aliceia</h1>
        <ul className="flex items-center space-x-6 text-white text-sm font-medium">
          <li>
            <a href="#contact" className="hover:text-gold-1 transition">Contact Me</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gold-1 transition">Gallery</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gold-1 transition">About</a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-gold-1 transition">Reviews</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gold-1 transition">Services</a>
          </li>
          <li>
            <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-gold-1 transition">
              <Mail className="h-4 w-4" />
              Mail
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}