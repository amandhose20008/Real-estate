'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Users, TrendingUp } from 'lucide-react';
import { statistics } from '@/data/properties';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  MapPin,
  Users,
  TrendingUp,
};

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof statistics[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = iconMap[stat.icon] || Building2;
  const numericTarget = parseInt(stat.value.replace(/[^0-9]/g, ''));
  const prefix = stat.value.includes('₹') ? '₹' : '';
  const count = useCountUp(numericTarget, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold/40 overflow-hidden hover:-translate-y-2"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0F172A]/5 to-transparent rounded-bl-full" />

      {/* Icon */}
      <div className="relative inline-flex w-16 h-16 rounded-2xl bg-[#0F172A] items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
        <Icon className="w-8 h-8 text-gold" />
        {/* Glowing ring */}
        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 ring-gold/20 transition-all duration-300" />
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-5xl font-bold text-[#0F172A] font-[family-name:var(--font-playfair)]">
          {prefix}{count}
        </span>
        <span className="text-3xl font-bold text-gold">{stat.suffix}</span>
      </div>

      <p className="text-gray-500 text-sm font-medium relative z-10">{stat.label}</p>

      {/* Bottom animated bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] group-hover:w-full transition-all duration-700 rounded-b-3xl" />
    </motion.div>
  );
}

export default function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="stats">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0F172A]/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Our Impact in Indore</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">
            Trusted by{' '}
            <span className="text-gradient-gold">Businesses</span>
            <br />Across Indore
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Over a decade of serving Indore's commercial real estate market — from Vijay Nagar offices to Pithampur warehouses, we deliver results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
