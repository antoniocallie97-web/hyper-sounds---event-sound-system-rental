import React from 'react';
import { Volume2, SlidersHorizontal, MessageSquare, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'CHOOSE YOUR SPEAKERS',
      description: 'Select the speaker type and quantity you need for your event venue.',
      icon: Volume2,
      accent: 'text-purple-400',
      border: 'border-purple-600/40',
    },
    {
      step: '02',
      title: 'BUILD YOUR PACKAGE',
      description: 'Combine bass, big bass and mid speakers according to your event acoustics.',
      icon: SlidersHorizontal,
      accent: 'text-amber-400',
      border: 'border-amber-600/40',
    },
    {
      step: '03',
      title: 'BOOK THROUGH WHATSAPP',
      description: 'Send your package requirements to Hyper Sounds and receive an immediate quotation.',
      icon: MessageSquare,
      accent: 'text-purple-400',
      border: 'border-purple-600/40',
    },
  ];

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-full mb-3">
            <span>Fast & Straightforward</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Hiring event sound in Kenya has never been simpler. No complicated accounts or hidden fees.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-black text-zinc-700/60">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${item.accent}`} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                  <span>Step {idx + 1} of 3</span>
                  {idx < 2 ? (
                    <ArrowRight className="w-4 h-4 text-zinc-600 hidden md:block" />
                  ) : (
                    <span className="text-amber-400 font-semibold font-mono">0721748401</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
