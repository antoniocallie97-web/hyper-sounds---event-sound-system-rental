import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/speakers.js';
import { Maximize2, X, Volume2 } from 'lucide-react';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Concerts & Outdoor', 'Bass Power', 'Sound Systems', 'Vocal Clarity', 'Full Systems'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-1 rounded-full mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Heavy Audio In Action</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            HYPER SOUNDS IN ACTION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Real event sound setups, subwoofer power arrays, and high-clarity mid-range towers delivering
            unrivaled acoustic punch.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/90 shadow-xl cursor-pointer hover:border-purple-600/60 transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image with Aspect Ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Zoom Icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-zinc-950/80 border border-zinc-800 text-amber-300 backdrop-blur-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Expanded Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="p-6 bg-zinc-900 border-t border-zinc-800">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
