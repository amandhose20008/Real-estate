'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Users, TrendingUp, Award, Heart, Clock, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const team = [
  { name: 'Lokesh Koushal', role: 'Founder & CEO', experience: '15+ Years', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', speciality: 'Commercial Leasing' },
  { name: 'Priya Joshi', role: 'Senior Property Advisor', experience: '10+ Years', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', speciality: 'Showroom & Retail' },
  { name: 'Amit Patel', role: 'Industrial Property Expert', experience: '12+ Years', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', speciality: 'Warehouse & Industrial' },
  { name: 'Sneha Gupta', role: 'Investment Advisor', experience: '8+ Years', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', speciality: 'Commercial Investments' },
];

const values = [
  { icon: Shield, title: 'Trust & Transparency', desc: 'Every listing is verified. We believe in complete transparency with our clients at every step of the process.' },
  { icon: Heart, title: 'Client First Always', desc: "Your business goals are our priority. We don't just close deals — we build long-term relationships." },
  { icon: Award, title: 'Local Expertise', desc: "10+ years of deep Indore market knowledge. We know every locality, every micro-market and every opportunity." },
  { icon: Clock, title: 'Fast & Efficient', desc: "We respect your time. Our streamlined process ensures you find the right space without unnecessary delays." },
];

const milestones = [
  { year: '2014', event: 'Classic Realty Indore Founded in Vijay Nagar' },
  { year: '2016', event: 'Expanded to industrial segment — Pithampur' },
  { year: '2018', event: 'Crossed 100 successful deals milestone' },
  { year: '2020', event: 'Launched Super Corridor commercial portfolio' },
  { year: '2022', event: 'CREDAI Indore Best Commercial Agency Award' },
  { year: '2024', event: '350+ happy clients and ₹200Cr+ deals closed' },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          {/* Animated dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold/10"
                style={{ width: `${60 + i * 40}px`, height: `${60 + i * 40}px`, left: `${10 + i * 15}%`, top: `${20 + i * 10}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
            ))}
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">About Us</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                Indore's Most <span className="text-gradient-gold">Trusted</span>
                <br />Commercial Property Partner
              </h1>
              <p className="text-white/70 text-xl max-w-2xl">
                Since 2014, Classic Realty Indore has been connecting businesses with their ideal commercial spaces — offices, showrooms, warehouses and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#0F172A] border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Building2, value: '500+', label: 'Properties Listed' },
                { icon: Users, value: '350+', label: 'Happy Clients' },
                { icon: MapPin, value: '25+', label: 'Indore Areas' },
                { icon: TrendingUp, value: '₹200Cr+', label: 'Deals Closed' },
              ].map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">{value}</div>
                  <div className="text-white/50 text-sm mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Our Story</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 font-[family-name:var(--font-playfair)]">
                  Born in Indore, <span className="text-gradient-gold">Built for Indore</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Classic Realty Indore was founded in 2014 with a simple mission: make commercial property search in Indore transparent, efficient and trustworthy. We started with a small office in Vijay Nagar and a deep belief that every business deserves the right space to grow.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Over the years, we've built an unmatched portfolio of verified commercial properties — from premium office spaces in the city center to large industrial warehouses in Pithampur — and a reputation built on integrity, expertise and results.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we are Indore's most trusted commercial real estate agency, having helped 350+ businesses find their perfect space and closing over ₹200 Crore worth of transactions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" alt="Office" className="rounded-2xl object-cover h-48 w-full shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Showroom" className="rounded-2xl object-cover h-48 w-full shadow-lg mt-8" />
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" alt="Warehouse" className="rounded-2xl object-cover h-48 w-full shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80" alt="Commercial" className="rounded-2xl object-cover h-48 w-full shadow-lg mt-8" />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#0F172A] text-white rounded-2xl px-6 py-4 shadow-2xl">
                  <div className="text-3xl font-bold text-gold font-[family-name:var(--font-playfair)]">10+</div>
                  <div className="text-sm text-white/60">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">
                Our Core <span className="text-gradient-gold">Values</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at Classic Realty Indore
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:border-gold/30 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">
                Meet Our <span className="text-gradient-gold">Expert Team</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Experienced professionals who know Indore's commercial market inside out
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-gold/40 transition-all duration-300" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-lg">{member.name}</h3>
                  <p className="text-gold text-sm font-medium">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{member.speciality} • {member.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                Our <span className="text-gradient-gold">Journey</span>
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block">
                      <div className="text-gold font-bold text-xl mb-1 font-[family-name:var(--font-playfair)]">{m.year}</div>
                      <div className="text-white/70 text-sm">{m.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-[#0F172A] shrink-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gold">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">Ready to Work With Us?</h2>
            <p className="text-[#0F172A]/70 text-lg mb-8">Let Classic Realty Indore help you find the perfect commercial space for your business.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/listings">
                <button className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                  View Listings
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent hover:bg-[#0F172A]/10 text-[#0F172A] font-bold px-8 py-4 rounded-xl border-2 border-[#0F172A] transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
