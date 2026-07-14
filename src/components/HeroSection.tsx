'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, Play, Building2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const floatingStats = [
  { value: '500+', label: 'Properties Listed' },
  { value: '350+', label: 'Happy Clients' },
  { value: '₹200Cr+', label: 'Deals Closed' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90')`,
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/97 via-[#0F172A]/85 to-[#0F172A]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/5 border border-gold/10"
            style={{
              width: `${100 + i * 70}px`,
              height: `${100 + i * 70}px`,
              left: `${5 + i * 18}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5 + i * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                #1 Commercial Real Estate — Indore
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-[1.08] mb-6 font-[family-name:var(--font-playfair)]"
            >
              Find Your Perfect{' '}
              <span className="text-gradient-gold">Commercial</span>
              <br />
              Space in <span className="text-gold">Indore</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/70 text-lg max-w-xl mb-8 leading-relaxed"
            >
              Classic Realty Indore — your trusted partner for office spaces, showrooms, 
              warehouses & commercial properties across Indore. Rent or buy with confidence.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              {['RERA Registered', 'Verified Properties', '10+ Years Experience'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="/listings">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-8 py-4 text-base shadow-2xl hover:shadow-gold/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  Explore Listings
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-gold/60 transition-colors group-hover:bg-gold/10">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                  <span className="text-sm font-medium">Contact Us</span>
                </button>
              </Link>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="glass rounded-2xl p-3 sm:p-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Location Input */}
                <div className="flex items-center gap-2 flex-1 bg-white/10 rounded-xl px-4 py-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <input
                    type="text"
                    placeholder="Search Vijay Nagar, AB Road, Pithampur..."
                    className="bg-transparent text-white placeholder-white/50 text-sm flex-1 outline-none"
                  />
                </div>

                {/* Property Type */}
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 min-w-[150px]">
                  <select className="bg-transparent text-white text-sm flex-1 outline-none cursor-pointer">
                    <option value="" className="bg-[#0F172A]">All Types</option>
                    <option value="office" className="bg-[#0F172A]">Office Space</option>
                    <option value="showroom" className="bg-[#0F172A]">Showroom</option>
                    <option value="warehouse" className="bg-[#0F172A]">Warehouse</option>
                    <option value="land" className="bg-[#0F172A]">Commercial Land</option>
                  </select>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 min-w-[120px]">
                  <select className="bg-transparent text-white text-sm flex-1 outline-none cursor-pointer">
                    <option value="" className="bg-[#0F172A]">Rent / Sale</option>
                    <option value="rent" className="bg-[#0F172A]">For Rent</option>
                    <option value="sale" className="bg-[#0F172A]">For Sale</option>
                  </select>
                </div>

                {/* Search Button */}
                <Link href="/listings">
                  <Button className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </Link>
              </div>

              {/* Quick Search Tags */}
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                <span className="text-white/40 text-xs">Popular:</span>
                {['Vijay Nagar Office', 'AB Road Showroom', 'Pithampur Warehouse', 'Super Corridor'].map((tag) => (
                  <Link key={tag} href="/listings">
                    <button
                      className="text-xs text-gold/80 hover:text-gold bg-gold/10 hover:bg-gold/20 border border-gold/20 rounded-full px-3 py-1 transition-all duration-200"
                    >
                      {tag}
                    </button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Stats */}
          <div className="hidden lg:flex flex-col gap-6 items-end">
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                className="glass rounded-2xl px-8 py-6 text-right border border-white/10"
              >
                <div className="text-4xl font-bold text-gold mb-1 font-[family-name:var(--font-playfair)]">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}

            {/* Mini Property Card */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="glass rounded-2xl overflow-hidden border border-white/15 w-64"
            >
              <div
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80')" }}
              />
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-gold" />
                  <span className="text-white/60 text-xs">Office Space</span>
                  <span className="ml-auto bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full">For Rent</span>
                </div>
                <p className="text-white font-semibold text-sm">Vijay Nagar Office Tower</p>
                <p className="text-gold text-sm font-bold mt-1">₹35,000/mo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
