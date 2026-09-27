import React from 'react';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/speakers.js';

export const WhatsAppCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 via-purple-950/20 to-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fast Event Sound Quotations</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          READY TO POWER YOUR EVENT?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need and we'll help you build the right sound package for your event.
        </p>

        {/* WhatsApp & Call Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 hover:from-purple-500 hover:to-amber-500 shadow-xl shadow-purple-900/50 hover:shadow-purple-700/60 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5 fill-current text-white" />
            <span>CHAT WITH HYPER SOUNDS ON WHATSAPP</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-zinc-200 uppercase tracking-wider bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:text-white transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="mt-5 text-xs text-zinc-400 font-mono">
          WhatsApp / Phone: {BUSINESS_INFO.phone}
        </p>
      </div>
    </section>
  );
};
