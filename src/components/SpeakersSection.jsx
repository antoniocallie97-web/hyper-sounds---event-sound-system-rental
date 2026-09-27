import React, { useState } from 'react';
import { Plus, Minus, Check, MessageSquare, Volume2, Sparkles } from 'lucide-react';
import { SPEAKER_PRODUCTS, buildWhatsAppSpeakerHireUrl } from '../data/speakers.js';

export const SpeakersSection = ({ onAddToPackage, onScrollToBuilder }) => {
  // Local quantity selections for each product card
  const [quantities, setQuantities] = useState({
    'big-bass': 1,
    bass: 2,
    mid: 2,
    'mid-bass-combo': 1,
  });

  const [addedFeedback, setAddedFeedback] = useState(null);

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(20, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const handleAdd = (product) => {
    const qty = quantities[product.id] || 1;
    if (product.id === 'big-bass') {
      onAddToPackage('bigBass', qty);
    } else if (product.id === 'bass') {
      onAddToPackage('bass', qty);
    } else if (product.id === 'mid') {
      onAddToPackage('mid', qty);
    } else if (product.id === 'mid-bass-combo') {
      // Combination adds 1 bass and 1 mid per combo unit
      onAddToPackage('bass', qty);
      onAddToPackage('mid', qty);
    }

    setAddedFeedback(product.id);
    setTimeout(() => {
      setAddedFeedback(null);
    }, 2000);
  };

  return (
    <section id="speakers" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-full mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Heavy Low-End & Crisp Vocals</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            OUR SOUND SYSTEMS
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Engineered for high acoustic clarity, punchy kick drums, and deep room-filling sub-bass.
            Select your preferred speaker units below or configure a customized package.
          </p>
        </div>

        {/* Product Cards Grid: 1 col on mobile, 2 col on md/lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPEAKER_PRODUCTS.map((speaker) => {
            const currentQty = quantities[speaker.id] || 1;
            const isAdded = addedFeedback === speaker.id;

            return (
              <div
                key={speaker.id}
                className="group flex flex-col rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-purple-600/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-950/30"
              >
                {/* Speaker Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Category Pill / Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-zinc-950/80 border border-zinc-700/80 backdrop-blur-md text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {speaker.category === 'subwoofer' && 'Deep Sub-Bass'}
                      {speaker.category === 'bass' && 'Punchy Bass'}
                      {speaker.category === 'mid' && 'Vocal Clarity'}
                      {speaker.category === 'combo' && 'Full Range Stack'}
                    </span>
                  </div>

                  {/* Pricing Notice */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-md bg-purple-950/80 border border-purple-700/80 backdrop-blur-md text-xs font-semibold text-purple-200">
                      Contact us for pricing
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide uppercase">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mt-0.5">
                      {speaker.tagline}
                    </p>

                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {speaker.description}
                    </p>

                    {/* Acoustic Feature Specs */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      {speaker.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 text-xs text-amber-400/90 font-medium">
                      <span className="text-zinc-500">Best for: </span>
                      {speaker.bestFor}
                    </div>
                  </div>

                  {/* Interactive Controls Module */}
                  <div className="mt-6 pt-5 border-t border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Hire Quantity:
                      </span>

                      {/* Quantity Stepper */}
                      <div className="flex items-center rounded-lg bg-zinc-950 border border-zinc-700 p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(speaker.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 rounded transition-colors"
                          aria-label={`Decrease quantity of ${speaker.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center font-mono font-bold text-sm text-white">
                          {currentQty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(speaker.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 rounded transition-colors"
                          aria-label={`Increase quantity of ${speaker.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons: Add to Package & Hire Now */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleAdd(speaker)}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-purple-950/70 hover:bg-purple-900 border border-purple-700/60 text-purple-200 hover:text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>Added to Package</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                            <span>Add to Package</span>
                          </>
                        )}
                      </button>

                      <a
                        href={buildWhatsAppSpeakerHireUrl(speaker.name, currentQty)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-md shadow-amber-600/20 transition-all duration-200"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Hire Now ({currentQty})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Route to Interactive Builder */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm mb-3">
            Want to combine multiple speaker types for a custom event setup?
          </p>
          <button
            onClick={onScrollToBuilder}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 hover:bg-purple-900 border border-purple-700/60 hover:text-white transition-all cursor-pointer"
          >
            <span>Open Custom Sound Package Builder</span>
            <span className="text-amber-400">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
