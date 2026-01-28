'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-yellow hover:text-yellow/80 transition-colors">
              <Image src="/DIVERGENT_transparant.png" alt="DIVER-GENT" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex space-x-8">
              <Link href="/" className="text-foreground hover:text-yellow transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-yellow transition-colors font-medium">
                Over Ons
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/divergent.studentteams"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DIVER-GENT op Instagram"
                className="text-foreground/80 hover:text-yellow transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/diver-gent"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DIVER-GENT op LinkedIn"
                className="text-foreground/80 hover:text-yellow transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-white/95 border-t border-yellow/10">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground hover:text-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Over Ons
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DIVER-GENT op Instagram"
                className="text-foreground/80 hover:text-yellow transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DIVER-GENT op LinkedIn"
                className="text-foreground/80 hover:text-yellow transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
