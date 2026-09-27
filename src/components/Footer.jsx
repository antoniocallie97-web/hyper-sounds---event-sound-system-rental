import React from 'react';
import { Volume2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/speakers.js';

export const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Packages', href: '#packages' },
    { name: 'Build Your Package', href: '#builder' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-amber-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-zinc-950 rounded-[6px] flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                HYPER SOUNDS
              </span>
            </div>
            <p className="text-sm text-amber-300/90 font-medium">
              Powerful Sound. Unforgettable Events.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp Contact */}
          <div className="flex items-center gap-3">
            <a
              href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-600 text-xs font-semibold text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span>WhatsApp: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>© 2026 Hyper Sounds. All rights reserved.</p>
          <p className="text-zinc-500">
            Professional Event Sound Equipment Rental · Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};
