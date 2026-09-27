import React from 'react';
import { MessageSquare, Phone, Volume2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/speakers.js';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Header */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-amber-500 p-0.5 mb-4 shadow-lg shadow-purple-600/30">
          <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-purple-400" />
          </div>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-wider uppercase">
          HYPER SOUNDS
        </h2>

        <p className="mt-3 text-lg font-medium text-amber-300">
          Book your sound system for your next event.
        </p>

        {/* Contact Info Card */}
        <div className="mt-8 max-w-md mx-auto p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl space-y-4">
          <div className="flex items-center justify-center gap-3 text-zinc-300">
            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-400">WhatsApp:</span>
            <a
              href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-mono font-bold text-white hover:text-amber-400 transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="pt-2">
            <a
              href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-500 hover:to-amber-500 shadow-lg shadow-purple-900/40 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 fill-current text-white" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
