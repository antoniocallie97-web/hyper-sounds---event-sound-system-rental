import React from 'react';
import { Minus, Plus, MessageSquare, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppPackageUrl, BUSINESS_INFO } from '../data/speakers.js';

export const PackageBuilder = ({
  quantities,
  onUpdateQuantity,
  onSetQuantity,
  onReset,
}) => {
  const totalSpeakers = quantities.bigBass + quantities.bass + quantities.mid;
  const whatsAppUrl = buildWhatsAppPackageUrl(quantities);

  // Audio system estimation & advice
  const getCapacityAdvice = () => {
    if (totalSpeakers === 0) return 'Select your desired speakers to calculate event capacity';
    if (totalSpeakers <= 3) return 'Perfect for up to 80-150 guests (Birthdays, small indoor events)';
    if (totalSpeakers <= 6) return 'Ideal for 150-350 guests (Weddings, medium parties, church services)';
    if (totalSpeakers <= 10) return 'Robust setup for 350-700 guests (Outdoor ceremonies, school events, large parties)';
    return 'Concert-grade sound system for 700+ guests (Festivals, crusades, public rallies, large concerts)';
  };

  return (
    <section id="builder" className="py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Dynamic ambient backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sound Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            BUILD YOUR SOUND PACKAGE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Choose exactly how many Big Bass, Bass, and Mid speakers you require for your venue.
            Your total is calculated instantly and formatted ready for a WhatsApp quotation.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Control Item: Big Bass Speakers */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-600/40 transition-all duration-200 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                      BIG BASS SPEAKERS
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 max-w-md">
                    Heavy dual-loaded subwoofers for extreme deep low-end & outdoor sound throw.
                  </p>
                </div>

                <div className="flex items-center self-end sm:self-auto gap-3">
                  <div className="flex items-center rounded-xl bg-zinc-950 border border-zinc-700/80 p-1 shadow-inner">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('bigBass', -1)}
                      disabled={quantities.bigBass <= 0}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors cursor-pointer"
                      aria-label="Decrease big bass speaker count"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-mono font-bold text-lg text-white tabular-nums">
                      {quantities.bigBass}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('bigBass', 1)}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                      aria-label="Increase big bass speaker count"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Item: Bass Speakers */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-600/40 transition-all duration-200 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                      BASS SPEAKERS
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 max-w-md">
                    Punchy low-frequency bass speakers suited for party dance floors and medium halls.
                  </p>
                </div>

                <div className="flex items-center self-end sm:self-auto gap-3">
                  <div className="flex items-center rounded-xl bg-zinc-950 border border-zinc-700/80 p-1 shadow-inner">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('bass', -1)}
                      disabled={quantities.bass <= 0}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors cursor-pointer"
                      aria-label="Decrease bass speaker count"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-mono font-bold text-lg text-white tabular-nums">
                      {quantities.bass}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('bass', 1)}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                      aria-label="Increase bass speaker count"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Item: Mid Speakers */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-600/40 transition-all duration-200 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                      MID SPEAKERS
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 max-w-md">
                    High-output mid-range horn speakers for crystal clear vocals, instruments and speech.
                  </p>
                </div>

                <div className="flex items-center self-end sm:self-auto gap-3">
                  <div className="flex items-center rounded-xl bg-zinc-950 border border-zinc-700/80 p-1 shadow-inner">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('mid', -1)}
                      disabled={quantities.mid <= 0}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors cursor-pointer"
                      aria-label="Decrease mid speaker count"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-mono font-bold text-lg text-white tabular-nums">
                      {quantities.mid}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity('mid', 1)}
                      className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                      aria-label="Increase mid speaker count"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Presets / Actions Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 px-1">
              <span className="text-xs text-zinc-500 font-medium">Quick Presets:</span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSetQuantity('bigBass', 0);
                    onSetQuantity('bass', 1);
                    onSetQuantity('mid', 2);
                  }}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                >
                  Small Event (3 spk)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSetQuantity('bigBass', 0);
                    onSetQuantity('bass', 2);
                    onSetQuantity('mid', 2);
                  }}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                >
                  Party Rig (4 spk)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSetQuantity('bigBass', 2);
                    onSetQuantity('bass', 2);
                    onSetQuantity('mid', 4);
                  }}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                >
                  Concert Stack (8 spk)
                </button>
                {totalSpeakers > 0 && (
                  <button
                    type="button"
                    onClick={onReset}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-md text-zinc-400 hover:text-red-400 hover:bg-red-950/30 transition-colors"
                    title="Reset to 0"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Live Summary Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-purple-800/50 p-6 sm:p-7 shadow-2xl shadow-purple-950/30">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-purple-400" />
                  <h3 className="font-display text-xl font-extrabold text-white tracking-wider uppercase">
                    YOUR PACKAGE
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60">
                  LIVE QUOTE
                </span>
              </div>

              {/* Itemized Quantities */}
              <div className="py-5 space-y-3 font-medium text-sm">
                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>Big Bass Speakers:</span>
                  </div>
                  <span className="font-mono font-bold text-white text-base tabular-nums">
                    {quantities.bigBass}
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Bass Speakers:</span>
                  </div>
                  <span className="font-mono font-bold text-white text-base tabular-nums">
                    {quantities.bass}
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Mid Speakers:</span>
                  </div>
                  <span className="font-mono font-bold text-white text-base tabular-nums">
                    {quantities.mid}
                  </span>
                </div>

                {/* Total Line */}
                <div className="pt-4 mt-2 border-t border-zinc-800 flex items-center justify-between">
                  <span className="font-display text-base font-bold text-white uppercase tracking-wider">
                    Total Speakers:
                  </span>
                  <span className="font-display font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400 tabular-nums">
                    {totalSpeakers}
                  </span>
                </div>
              </div>

              {/* Capacity Insight */}
              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mb-6">
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{getCapacityAdvice()}</span>
                </div>
              </div>

              {/* WhatsApp Request Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 hover:from-purple-500 hover:to-amber-500 shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>REQUEST THIS PACKAGE ON WHATSAPP</span>
              </a>

              <p className="mt-3 text-center text-xs text-zinc-500 font-mono">
                Direct to Hyper Sounds: {BUSINESS_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
