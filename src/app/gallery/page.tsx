'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Building2, ShoppingBag, Warehouse, LandPlot } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/properties';

const categories = ['All', 'Office', 'Showroom', 'Warehouse', 'Land'];

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Office: Building2,
  Showroom: ShoppingBag,
  Warehouse: Warehouse,
  Land: LandPlot,
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const currentImg = filtered[lightbox.idx];

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-gray-50 min-h-screen">
        {/* Hero */}
        <section className="relative bg-[#0F172A] pt-28 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#0F172A]/70" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold/6"
                style={{ width: `${60 + i * 45}px`, height: `${60 + i * 45}px`, right: `${5 + i * 10}%`, top: `${10 + i * 15}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
            ))}
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">Property Gallery</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                Our <span className="text-gradient-gold">Gallery</span>
              </h1>
              <p className="text-white/70 text-xl max-w-2xl">
                Explore our portfolio of premium commercial properties across Indore — offices, showrooms, warehouses and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {categories.map(cat => {
                  const Icon = categoryIcons[cat];
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                          : 'bg-white text-[#0F172A]/60 border-gray-200 hover:border-[#0F172A]/30 hover:text-[#0F172A]'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {cat}
                    </button>
                  );
                })}
              </div>
              <span className="text-gray-400 text-sm shrink-0 ml-4">{filtered.length} Photos</span>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-400 break-inside-avoid mb-5"
                    onClick={() => setLightbox({ open: true, idx: i })}
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ height: `${220 + (i % 3) * 80}px` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-bold text-sm">{img.title}</p>
                      <span className="text-gold text-xs">{img.category}</span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && currentImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightbox({ ...lightbox, open: false })}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={currentImg.image}
                  alt={currentImg.title}
                  className="w-full rounded-2xl object-cover max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <p className="text-white font-bold text-xl font-[family-name:var(--font-playfair)]">{currentImg.title}</p>
                  <span className="text-gold text-sm">{currentImg.category}</span>
                </div>
                <button
                  onClick={() => setLightbox({ ...lightbox, open: false })}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                {/* Navigation */}
                <button
                  onClick={() => setLightbox({ ...lightbox, idx: Math.max(0, lightbox.idx - 1) })}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  disabled={lightbox.idx === 0}
                >
                  ‹
                </button>
                <button
                  onClick={() => setLightbox({ ...lightbox, idx: Math.min(filtered.length - 1, lightbox.idx + 1) })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  disabled={lightbox.idx === filtered.length - 1}
                >
                  ›
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
