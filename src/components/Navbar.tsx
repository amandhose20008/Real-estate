'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from '@/components/SocialIcons';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Listings', href: '/listings' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: WhatsAppIcon, href: 'https://wa.me/919179905115', label: 'WhatsApp', color: 'hover:text-green-400' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-5 h-5 text-[#0F172A]" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0F172A] animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-tight font-[family-name:var(--font-playfair)]">
                Classic <span className="text-gold">Realty</span>
              </span>
              <span className="text-white/50 text-[10px] tracking-widest uppercase">Indore</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Social Media + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5 mr-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/60 ${color} hover:border-white/30 hover:bg-white/15 transition-all duration-300`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
            <div className="w-px h-6 bg-white/20" />
            <a href="tel:+919179905115">
              <Button
                className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-semibold text-sm shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-[#0F172A]/98 border-t border-white/10 px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                        isActive
                          ? 'text-gold bg-gold/10 border border-gold/20'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              {/* Social Media Mobile */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 px-4">Follow Us</p>
                <div className="flex gap-3 px-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/60 ${color} transition-all duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-3 px-4">
                <a href="tel:+919876543210" className="block">
                  <Button className="w-full bg-gold hover:bg-[#b8960e] text-[#0F172A] font-semibold flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now: +91 91799 05115
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
