'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, ShoppingBag, Warehouse, LandPlot, Factory, Users, ArrowRight } from 'lucide-react';
import { propertyCategories } from '@/data/properties';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ShoppingBag, Warehouse, LandPlot, Factory, Users,
};

export default function PropertyCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Property Types</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Browse by
            <span className="text-gradient-gold"> Category</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From towering Class-A offices to vast industrial complexes, explore every commercial asset class
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {propertyCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Building2;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity duration-400`} />

                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Glow effect */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

                <div className="relative p-7 flex flex-col h-full min-h-[180px]">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-white font-bold text-xl mb-1">{cat.label}</h3>
                  <p className="text-white/70 text-sm mb-4">{cat.description}</p>

                  {/* Count + Arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/60 text-sm">
                      <span className="text-white font-bold text-lg">{cat.count.toLocaleString()}</span> listings
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
