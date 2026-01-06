'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Short Essays' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.startsWith('/posts');
    }
    return pathname === href;
  };

  return (
    <header className="w-full bg-header-bg">
      <div className="max-w-content mx-auto px-page-x py-5 md:py-6">
        <nav className="flex items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl text-header-logo hover:opacity-80 transition-opacity mr-8">
            <span className="font-bold">Greg</span>
            <span className="font-normal">Condit</span>
          </Link>

          {/* Desktop Navigation - left aligned after logo */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-header-nav-hover'
                      : 'text-header-nav hover:text-header-nav-hover'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - pushed to right */}
          <button
            className="md:hidden p-2 -mr-2 ml-auto text-header-nav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-header-nav/30 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-header-nav-hover'
                      : 'text-header-nav hover:text-header-nav-hover'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
