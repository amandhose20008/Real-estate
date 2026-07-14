'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, UserCheck, ShieldCheck, BarChart3, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Verified Listings Only',
    description: 'Every property is independently verified and authenticated by our team of licensed commercial real estate analysts before going live.',
    color: 'bg-blue-50 text-blue-600',
    highlight: 'bg-blue-600',
  },
  {
    icon: UserCheck,
    title: 'Expert Agent Network',
    description: '500+ certified agents with deep market expertise across 180 cities. Average 12 years of experience in commercial real estate transactions.',
    color: 'bg-purple-50 text-purple-600',
    highlight: 'bg-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Transactions',
    description: 'Bank-grade encryption, escrowed payments, and airtight NDAs protect every deal from initial inquiry to final closing.',
    color: 'bg-green-50 text-green-600',
    highlight: 'bg-green-600',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Market Insights',
    description: 'Live cap rate data, vacancy trends, and price analytics powered by proprietary AI tools to inform your investment strategy.',
    color: 'bg-orange-50 text-orange-600',
    highlight: 'bg-orange-600',
  },
  {
    icon: Zap,
    title: 'Fast Response Times',
    description: 'Our dedicated deal team responds to serious inquiries within 2 business hours. Time is money in CRE — we get it.',
    color: 'bg-yellow-50 text-yellow-600',
    highlight: 'bg-yellow-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Opportunities',
    description: 'Access off-market deals, distressed assets, and institutional-grade investment opportunities not available anywhere else.',
    color: 'bg-red-50 text-red-600',
    highlight: 'bg-red-600',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Why Classic Realty Indore</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight font-[family-name:var(--font-playfair)]">
              The Advantage You
              <br />
              Get With
              <br />
              <span className="text-gradient-gold">Classic Realty</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Classic Realty Indore isn't just a listing service — we are your dedicated commercial real estate partners with deep market knowledge across all of Indore's prime zones.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: '98%', label: 'Client Satisfaction' },
                { value: '2 Wks', label: 'Avg. Deal Time' },
                { value: '₹200Cr+', label: 'Deals Closed' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-[#0F172A] mb-1 font-[family-name:var(--font-playfair)]">{item.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 text-[#0F172A] font-semibold hover:text-gold transition-colors group">
              Explore Our Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:border-gray-200 transition-all duration-400 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`inline-flex w-11 h-11 rounded-xl ${feature.color} items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${feature.highlight} group-hover:w-full transition-all duration-500`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
