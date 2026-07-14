'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, MapPin, BarChart2, ArrowUpRight, ArrowRight } from 'lucide-react';
import { investmentOpportunities } from '@/data/properties';
import { Button } from '@/components/ui/button';

export default function InvestmentOpportunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden" id="investments">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/25 rounded-full px-4 py-1.5 mb-4">
            <TrendingUp className="w-3 h-3 text-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Investment Opportunities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trending Markets &
            <span className="text-gradient-gold"> Top ROI Cities</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Data-driven market analysis identifying the highest-yield commercial real estate markets in North America
          </p>
        </motion.div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {investmentOpportunities.map((opp, i) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={opp.image}
                  alt={opp.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

                {/* City Label */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-white font-bold text-lg">{opp.city}</span>
                  <span className="text-white/50 text-sm">{opp.region}</span>
                </div>

                {/* Growth Badge */}
                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1.5 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 text-xs font-bold">{opp.growth}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="p-5 bg-[#1E293B] border-t border-white/5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-gold font-bold text-xl">{opp.roi}</div>
                    <div className="text-white/40 text-xs mt-0.5">Avg. ROI</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-white font-bold text-xl">{opp.properties.toLocaleString()}</div>
                    <div className="text-white/40 text-xs mt-0.5">Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-xl">{opp.growth}</div>
                    <div className="text-white/40 text-xs mt-0.5">YoY Growth</div>
                  </div>
                </div>

                <button className="w-full mt-4 py-2.5 text-sm text-gold border border-gold/30 rounded-xl hover:bg-gold hover:text-[#0F172A] font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore {opp.city} Market
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
              <BarChart2 className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Get Your Free Market Analysis Report</h3>
              <p className="text-white/60 text-sm mt-1">Custom ROI projections, cap rate benchmarks, and deal flow insights for your target market</p>
            </div>
          </div>
          <Button className="shrink-0 bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-8 shadow-lg hover:shadow-gold/30 transition-all duration-300">
            Request Free Report
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
