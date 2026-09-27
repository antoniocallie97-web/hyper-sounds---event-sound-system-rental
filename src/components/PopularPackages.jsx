import React from 'react';
import { POPULAR_PACKAGES, buildWhatsAppPresetPackageUrl } from '../data/speakers.js';
import { MessageSquare, Sliders, Sparkles } from 'lucide-react';

export const PopularPackages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-zinc-950/90 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready-To-Go Event Bundles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            POPULAR SOUND PACKAGES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Carefully balanced speaker combinations calibrated for standard event sizes.
            <span className="block mt-1 text-amber-300/90 text-xs sm:text-sm font-medium">
              * Note: These are sample packages. You are welcome to request fully customized quantities.
            </span>
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {POPULAR_PACKAGES.map((pkg) => {
            const isFeatured = pkg.badge === 'Most Popular';
            const totalSpeakers = pkg.equipment.bigBass + pkg.equipment.bass + pkg.equipment.mid;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-purple-950/40 via-zinc-900/90 to-zinc-950 border-2 border-purple-500/80 shadow-2xl shadow-purple-950/50 md:-translate-y-2'
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 shadow-xl'
                }`}
              >
                {/* Badge if featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-black text-white uppercase tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-snug">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Speaker Count Pill */}
                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 mb-6 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Included Speakers:
                    </span>
                    <span className="text-sm font-bold text-amber-400 font-mono">
                      {totalSpeakers} Units Total
                    </span>
                  </div>

                  {/* Equipment Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                      Equipment Specs:
                    </span>
                    {pkg.equipment.bigBass > 0 && (
                      <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="font-semibold text-white font-mono">{pkg.equipment.bigBass}x</span>
                        <span>Big Bass Speakers</span>
                      </div>
                    )}
                    {pkg.equipment.bass > 0 && (
                      <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="font-semibold text-white font-mono">{pkg.equipment.bass}x</span>
                        <span>Bass Speakers</span>
                      </div>
                    )}
                    {pkg.equipment.mid > 0 && (
                      <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="font-semibold text-white font-mono">{pkg.equipment.mid}x</span>
                        <span>Mid Speakers</span>
                      </div>
                    )}
                  </div>

                  {/* Suitable For */}
                  <div className="pt-4 border-t border-zinc-800/80 mb-6">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                      Suitable for:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.suitableFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-zinc-800/80 space-y-2.5">
                  <a
                    href={buildWhatsAppPresetPackageUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md shadow-purple-900/30 transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-white" />
                    <span>GET A QUOTE</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectPackage({
                        bigBass: pkg.equipment.bigBass,
                        bass: pkg.equipment.bass,
                        mid: pkg.equipment.mid,
                      });
                      const el = document.getElementById('builder');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-600/50 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    <span>Customize in Builder</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
