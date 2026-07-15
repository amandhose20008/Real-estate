'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden" id="contact">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/25 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-playfair)]">
              Ready to Find Your
              <br />
              Perfect Commercial
              <br />
              <span className="text-gradient-gold">Space in Indore?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl">
              Our expert advisors are available Mon–Sat to help you find, evaluate and close the right commercial property deal in Indore. No obligation, maximum value.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 91799 05115 / +91 96440 94724' },
                { icon: Mail, label: 'Email', value: 'info@classicrealty.in' },
                { icon: Calendar, label: 'Office Hours', value: 'Mon–Sat, 9AM–7PM IST' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">2hr</div>
                <div className="text-white/40 text-xs">Response Time</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">98%</div>
                <div className="text-white/40 text-xs">Satisfaction Rate</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">₹200Cr+</div>
                <div className="text-white/40 text-xs">Deals Closed</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-white font-bold text-2xl mb-2 font-[family-name:var(--font-playfair)]">Book a Free Consultation</h3>
            <p className="text-white/50 text-sm mb-8">Fill out the form and our team will reach out within 2 hours</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 91799 05115"
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-xs font-medium mb-2 block">Property Type Required</label>
                <select className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white/80 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer">
                  <option className="bg-[#1E293B]" value="">Select property type</option>
                  <option className="bg-[#1E293B]">Office Space</option>
                  <option className="bg-[#1E293B]">Showroom</option>
                  <option className="bg-[#1E293B]">Warehouse</option>
                  <option className="bg-[#1E293B]">Commercial Land</option>
                </select>
              </div>

              <div>
                <label className="text-white/60 text-xs font-medium mb-2 block">Your Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your space requirements — area, location, budget..."
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  className="flex-1 bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold py-3.5 rounded-xl shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button
                    type="button"
                    className="w-full border-2 border-green-500/40 text-green-400 bg-green-500/10 hover:bg-green-500/20 font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </a>
              </div>

              <p className="text-white/30 text-xs text-center pt-2">
                By submitting, you agree to be contacted by Classic Realty Indore
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
