'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ThumbsUp, Building2 } from 'lucide-react';
import { testimonials } from '@/data/properties';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-28 bg-[#0F172A] relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <ThumbsUp className="w-3 h-3 text-gold fill-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Happy Clients</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            What Our Clients{' '}
            <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Trusted by businesses across Indore — from startups to established enterprises. Here's what they say about working with Classic Realty.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Review Card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.97 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden"
              >
                {/* Quote decoration */}
                <Quote className="absolute top-6 right-6 w-20 h-20 text-gold/10" strokeWidth={1} />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-gold fill-gold' : 'text-white/20 fill-white/20'}`}
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-xl sm:text-2xl font-medium text-white mb-8 leading-relaxed">
                  "{testimonials[current].review}"
                </blockquote>

                {/* Investment Type Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
                  <Building2 className="w-3 h-3 text-gold" />
                  <span className="text-gold text-xs font-semibold">
                    {testimonials[current].investmentType}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0F172A] flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonials[current].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[current].title}</p>
                    <p className="text-gold text-sm font-medium">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 h-3 bg-gold' : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 text-white hover:text-gold transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-gold flex items-center justify-center hover:bg-[#b8960e] transition-all duration-300 text-[#0F172A]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side: All Reviews Thumbnails */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">All Reviews</p>
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setCurrent(i)}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  i === current
                    ? 'border-gold bg-gold/10'
                    : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white text-xs font-bold truncate">{t.name}</p>
                      <div className="flex gap-0.5 shrink-0">
                        {[...Array(t.rating)].map((_, si) => (
                          <Star key={si} className="w-2.5 h-2.5 text-gold fill-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/40 text-[10px] mb-1">{t.company}</p>
                    <p className="text-white/60 text-xs line-clamp-2">{t.review}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
