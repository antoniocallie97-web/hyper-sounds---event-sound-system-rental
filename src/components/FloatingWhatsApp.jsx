import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/speakers.js';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:block px-3.5 py-1.5 rounded-lg bg-zinc-900/95 border border-zinc-700 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with Hyper Sounds
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-zinc-900 rotate-45 border-r border-t border-zinc-700" />
      </div>

      {/* Floating Button */}
      <a
        href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-600/60 transform hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Chat with Hyper Sounds on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
