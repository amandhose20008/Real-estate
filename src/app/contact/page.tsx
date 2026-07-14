'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from '@/components/SocialIcons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+91 91799 05115',
    sub: '+91 966440 94724',
    color: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    href: 'tel:+919876543210',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+91 91799 05115',
    sub: 'Chat with us now',
    color: 'bg-green-500/10 border-green-500/20 text-green-400',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@classicrealty indore.com',
    sub: 'We reply within 2 hours',
    color: 'bg-gold/10 border-gold/20 text-gold',
    href: 'mailto:info@classicrealty.in',
  },
  {
    icon: MapPin,
    title: 'Visit Office',
    detail: 'Vijay Nagar, Indore',
    sub: 'Mon–Sat, 9 AM – 7 PM',
    color: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    href: 'https://maps.google.com',
  },
];

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com', color: 'hover:bg-pink-500/20 hover:text-pink-400', bgColor: 'bg-pink-500/10 text-pink-400' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com', color: 'hover:bg-blue-500/20 hover:text-blue-400', bgColor: 'bg-blue-500/10 text-blue-400' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com', color: 'hover:bg-red-500/20 hover:text-red-400', bgColor: 'bg-red-500/10 text-red-400' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/919876543210', color: 'hover:bg-green-500/20 hover:text-green-400', bgColor: 'bg-green-500/10 text-green-400' },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    budget: '',
    location: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Contact Page' }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send enquiry.');
      }

      setStatus('success');
      setForm({ name: '', phone: '', email: '', type: '', budget: '', location: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#0F172A]/80" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold/8"
                style={{ width: `${80 + i * 50}px`, height: `${80 + i * 50}px`, right: `${5 + i * 10}%`, top: `${10 + i * 15}%` }}
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
            ))}
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                Contact <span className="text-gradient-gold">Classic Realty</span>
                <br />Indore
              </h1>
              <p className="text-white/70 text-xl max-w-2xl">
                Ready to find your ideal commercial space? Our experts are here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30 hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-base mb-1">{method.title}</h3>
                  <p className="text-[#0F172A] text-sm font-medium">{method.detail}</p>
                  <p className="text-gray-400 text-xs mt-1">{method.sub}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-playfair)]">
                  Send Us a <span className="text-gradient-gold">Message</span>
                </h2>
                <p className="text-gray-500 mb-8">Fill in your details and we'll get back to you within 2 hours.</p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Sent Successfully!</h3>
                    <p className="text-green-600 mb-4">
                      Thank you! Our team will call you within 2 hours. A confirmation has been sent to your email (if provided).
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm text-green-700 underline hover:no-underline"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Error banner */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMsg}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">Property Type *</label>
                        <select
                          required
                          value={form.type}
                          onChange={e => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm text-gray-700"
                        >
                          <option value="">Select Property Type</option>
                          <option>Office Space</option>
                          <option>Showroom</option>
                          <option>Warehouse</option>
                          <option>Commercial Land</option>
                          <option>Residential Plot</option>
                          <option>Flat / Apartment</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">Budget Range</label>
                        <select
                          value={form.budget}
                          onChange={e => setForm({ ...form, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm text-gray-700"
                        >
                          <option value="">Select Budget</option>
                          <option>Under ₹25 Lakh</option>
                          <option>₹25 – 50 Lakh</option>
                          <option>₹50 Lakh – 1 Cr</option>
                          <option>₹1 Cr – 2 Cr</option>
                          <option>₹2 Cr – 5 Cr</option>
                          <option>Above ₹5 Cr</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">Preferred Location in Indore</label>
                      <input
                        type="text"
                        value={form.location}
                        onChange={e => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Vijay Nagar, AB Road, Scheme 54…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">Your Requirements</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your requirement — area needed, timeline, specific features, etc."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#0F172A] hover:bg-gold disabled:opacity-60 disabled:cursor-not-allowed text-white hover:text-[#0F172A] font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Enquiry…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      By submitting this form, you agree to be contacted by Classic Realty Indore regarding your property requirements.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Info + Social */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Office Info */}
                <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Office Information</h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Office Address</p>
                        <p className="text-white/60 text-sm">Classic Realty Indore<br />175 office No. Kanchan Tilak, Palasia, Indore<br />Madhya Pradesh — 452010</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Business Hours</p>
                        <p className="text-white/60 text-sm">Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: By appointment only</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Phone Numbers</p>
                        <p className="text-white/60 text-sm">+91 91799 05115<br />+91 966440 94724</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-playfair)]">Follow Us on Social Media</h3>
                  <p className="text-gray-500 text-sm mb-6">Stay updated with the latest listings, market trends and property news from Indore.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map(({ icon: Icon, label, href, bgColor, color }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 ${bgColor} rounded-xl px-4 py-3 ${color} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="font-semibold text-sm">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 relative">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/60 flex items-center justify-center">
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <button className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Open in Maps
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
