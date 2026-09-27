import React from 'react';
import {
  PartyPopper,
  Heart,
  MicVocal,
  Building2,
  Church,
  GraduationCap,
  Cake,
  MoonStar,
  ArrowRight,
} from 'lucide-react';
import { EVENT_TYPES, BUSINESS_INFO } from '../data/speakers.js';

export const EventTypesSection = ({ onLoadPreset }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6 text-purple-400" />;
      case 'HeartHandshake':
        return <Heart className="w-6 h-6 text-pink-400" />;
      case 'MicVocal':
        return <MicVocal className="w-6 h-6 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'Church':
        return <Church className="w-6 h-6 text-purple-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'Cake':
        return <Cake className="w-6 h-6 text-amber-400" />;
      case 'MoonStar':
        return <MoonStar className="w-6 h-6 text-indigo-400" />;
      default:
        return <PartyPopper className="w-6 h-6 text-purple-400" />;
    }
  };

  const handleEventClick = (eventId, title) => {
    // Customize quantities based on event type
    let config = { bigBass: 0, bass: 2, mid: 2 };

    if (eventId === 'concerts' || eventId === 'outdoors') {
      config = { bigBass: 2, bass: 2, mid: 4 };
    } else if (eventId === 'birthdays' || eventId === 'schools') {
      config = { bigBass: 0, bass: 1, mid: 2 };
    } else if (eventId === 'church') {
      config = { bigBass: 0, bass: 1, mid: 4 };
    }

    onLoadPreset(config);
    const el = document.getElementById('builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-1 rounded-full mb-3">
            <span>Versatile Sound Coverage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            PERFECT FOR EVERY EVENT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            From intimate private dinners to multi-thousand attendee outdoor concerts, Hyper Sounds provides
            crystal acoustics and powerful low-end punch tailored to your specific venue.
          </p>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_TYPES.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/90 hover:border-purple-600/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-950/30"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  {getIcon(event.iconName)}
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {event.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-2">
                  Recommended Setup:
                </span>
                <p className="text-xs text-zinc-300 font-mono mb-4">
                  {event.recommendedSetup}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleEventClick(event.id, event.title)}
                    className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Configure package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(
                      `Hello Hyper Sounds, I need sound equipment for my ${event.title}. Please advise on the best setup and price quotation.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
