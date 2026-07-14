'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Calendar, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '@/data/properties';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Calendar, FileCheck,
};

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle2 className="w-3 h-3 text-[#0F172A]" />
            <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">
            Find Your Space in
            <span className="text-gradient-gold"> 3 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our streamlined process helps businesses in Indore find, evaluate and secure the perfect commercial property with speed and confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number + Icon */}
                  <div className="relative mb-8">
                    {/* Outer ring */}
                    <div className="w-32 h-32 rounded-full border-2 border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-500">
                      {/* Inner circle */}
                      <div className="w-24 h-24 rounded-full bg-[#0F172A] flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-400">
                        <Icon className="w-8 h-8 text-gold mb-1" />
                      </div>
                    </div>
                    {/* Step Badge */}
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gold text-[#0F172A] font-bold text-sm flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
                    {step.description}
                  </p>

                  {/* Learn More Link */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute right-0 top-16 -translate-y-1/2 translate-x-4">
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`, backgroundSize: '32px 32px' }}
          />
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">Ready to Find Your Commercial Space?</h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Browse our curated listings or speak with our expert advisors to find the perfect commercial property in Indore.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/listings">
                <button className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Browse All Listings
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/20 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
