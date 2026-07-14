'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { partners } from '@/data/properties';

const allPartners = [...partners, ...partners]; // duplicate for seamless loop

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Trusted Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Working With
            <span className="text-gradient-gold"> World-Class Firms</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Strategic partnerships with global financial institutions and real estate leaders
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-marquee gap-6">
          {allPartners.map((partner, i) => (
            <div
              key={`p1-${i}`}
              className="shrink-0 bg-white border border-gray-200 rounded-2xl px-8 py-5 flex items-center justify-center min-w-[180px] hover:border-gold/40 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <span className="text-[#0F172A] font-bold text-base group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div
          className="flex gap-6"
          style={{ animation: 'marquee 25s linear infinite reverse' }}
        >
          {[...allPartners].reverse().map((partner, i) => (
            <div
              key={`p2-${i}`}
              className="shrink-0 bg-[#0F172A] border border-white/10 rounded-2xl px-8 py-5 flex items-center justify-center min-w-[180px] hover:border-gold/40 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <span className="text-white/70 font-bold text-base group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
