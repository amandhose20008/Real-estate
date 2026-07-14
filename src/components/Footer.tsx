'use client';

import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from '@/components/SocialIcons';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Property Listings', href: '/listings' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  'Property Types': [
    { label: 'Office Space', href: '/listings?type=office' },
    { label: 'Showroom', href: '/listings?type=showroom' },
    { label: 'Warehouse', href: '/listings?type=warehouse' },
    { label: 'Commercial Land', href: '/listings?type=land' },
    { label: 'For Rent', href: '/listings?status=rent' },
    { label: 'For Sale', href: '/listings?status=sale' },
  ],
  'Locations': [
    { label: 'Vijay Nagar', href: '/listings?area=vijay-nagar' },
    { label: 'AB Road', href: '/listings?area=ab-road' },
    { label: 'Palasia', href: '/listings?area=palasia' },
    { label: 'Super Corridor', href: '/listings?area=super-corridor' },
    { label: 'Pithampur', href: '/listings?area=pithampur' },
    { label: 'MG Road', href: '/listings?area=mg-road' },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com', color: 'hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-400' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com', color: 'hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com', color: 'hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/919179905115', color: 'hover:bg-green-500/20 hover:border-green-500/40 hover:text-green-400' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5" id="footer">
      {/* Contact Bar */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold text-xl mb-1 font-[family-name:var(--font-playfair)]">Ready to find your space?</h4>
              <p className="text-white/50 text-sm">Our experts are available Mon–Sat, 9 AM – 7 PM IST</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 9179905115
              </a>
              <a
                href="https://wa.me/919179905115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-lg">
                <Building2 className="w-5 h-5 text-[#0F172A]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight font-[family-name:var(--font-playfair)]">
                  Classic <span className="text-gold">Realty</span>
                </span>
                <span className="text-white/40 text-[10px] tracking-widest uppercase">Indore</span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Indore's premier commercial real estate platform. Connecting businesses with 
              verified office spaces, showrooms, warehouses & commercial plots across all 
              major localities of Indore.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: '175 office No. Kanchan Tilak, Palasia, AB Road, Indore, Madhya Pradesh 452010' },
                { icon: Phone, text: '+91 98765 43210 / +91 87654 32109' },
                { icon: Mail, text: 'info@classicrealty.in' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-white/50 text-sm">
                  <Icon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Follow us on</p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 ${color} transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-5">{title}</h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 overflow-hidden" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Classic Realty Indore. All rights reserved. | RERA Registered
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'RERA Compliance'].map((item) => (
              <Link key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
