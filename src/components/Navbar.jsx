import React, { useState, useEffect } from 'react';
import { Volume2, Menu, X, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/speakers.js';

export const Navbar = ({ totalInPackage, onOpenBuilder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Packages', href: '#packages' },
    { name: 'Build Your Package', href: '#builder' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-purple-900/30 shadow-2xl shadow-purple-950/20 py-3'
          : 'bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-white focus:outline-none"
            aria-label="Hyper Sounds Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-purple-400 group-hover:text-amber-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                HYPER <span className="text-purple-400 group-hover:text-amber-400 transition-colors">SOUNDS</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {totalInPackage > 0 && (
              <button
                onClick={onOpenBuilder}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-800/60 rounded-lg hover:bg-purple-900/60 hover:text-white transition-colors cursor-pointer"
                title="View your custom sound package"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Package: {totalInPackage} speakers</span>
              </button>
            )}

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {totalInPackage > 0 && (
              <button
                onClick={onOpenBuilder}
                className="px-2.5 py-1 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-800/60 rounded-md"
              >
                {totalInPackage} spk
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-zinc-950 border-b border-purple-900/40 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-purple-950/40 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Now on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
