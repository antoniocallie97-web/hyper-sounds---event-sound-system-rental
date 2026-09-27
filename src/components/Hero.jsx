import React from 'react';
import { ArrowDown, MessageSquare, Radio, Sparkles, Volume2 } from 'lucide-react';
import { BUSINESS_INFO, HERO_ASSET } from '../data/speakers.js';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Background Hero Image with Measured Gradient Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_ASSET}
          alt="Hyper Sounds professional concert sound system with stacked subwoofers and mid-range speaker arrays"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-125 saturate-110"
        />
        {/* Dark Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-amber-950/30 mix-blend-screen" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Audio Wave Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-purple-500/30 backdrop-blur-md mb-6 shadow-inner">
          <div className="flex items-end gap-1 h-5 text-purple-400">
            <span className="w-1 bg-purple-400 rounded-full animate-soundwave-1" />
            <span className="w-1 bg-purple-400 rounded-full animate-soundwave-2" />
            <span className="w-1 bg-amber-400 rounded-full animate-soundwave-3" />
            <span className="w-1 bg-amber-400 rounded-full animate-soundwave-4" />
            <span className="w-1 bg-purple-400 rounded-full animate-soundwave-5" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-300">
            Live Event Sound Reinforcement & Hire
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
          <span className="block text-white">HYPER</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-amber-400">
            SOUNDS
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-amber-300 max-w-2xl text-balance">
          {BUSINESS_INFO.tagline}
        </p>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed text-balance">
          {BUSINESS_INFO.supportingText}
        </p>

        {/* Prominent Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=Hello%20Hyper%20Sounds%2C%20I%20would%20like%20to%20hire%20sound%20equipment%20for%20my%20event.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 hover:from-purple-500 hover:to-amber-500 shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-purple-500/40"
          >
            <MessageSquare className="w-5 h-5 fill-current text-white" />
            <span>BOOK NOW ON WHATSAPP</span>
          </a>

          <a
            href="#speakers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-zinc-200 uppercase tracking-wider bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-purple-500/60 transition-all duration-200 backdrop-blur-sm hover:text-white"
          >
            <span>VIEW SPEAKERS</span>
            <ArrowDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Sound Highlights Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Radio className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Deep Low-End</span>
            </div>
            <p className="text-sm font-semibold text-white">Big Bass & Subwoofers</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Speech & Vocals</span>
            </div>
            <p className="text-sm font-semibold text-white">High-Throw Mid Speakers</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Custom Rigs</span>
            </div>
            <p className="text-sm font-semibold text-white">Any Speaker Quantity</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Fast Quotation</span>
            </div>
            <p className="text-sm font-semibold text-white">WhatsApp 0721748401</p>
          </div>
        </div>
      </div>
    </section>
  );
};
