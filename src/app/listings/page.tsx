'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Building2, Warehouse, ShoppingBag, LandPlot, Filter, Phone, MessageCircle, ArrowRight, CheckCircle2, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { properties } from '@/data/properties';
import Link from 'next/link';

const propertyTypes = ['All', 'Office Space', 'Showroom', 'Warehouse', 'Commercial Land'];
const statusOptions = ['All', 'For Rent', 'For Sale'];
const locationOptions = ['All', 'Vijay Nagar', 'AB Road', 'Palasia', 'Super Corridor', 'Pithampur', 'Scheme 54'];

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Office Space': Building2,
  'Showroom': ShoppingBag,
  'Warehouse': Warehouse,
  'Commercial Land': LandPlot,
};

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const Icon = typeIcons[property.type] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 hover:border-gold/30 overflow-hidden hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${property.status === 'For Rent' ? 'bg-green-500 text-white' : 'bg-gold text-[#0F172A]'}`}>
            {property.status}
          </span>
          {property.isVerified && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">{property.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-[#0F172A] flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-gold" />
          </div>
          <span className="text-[#0F172A]/60 text-xs font-medium">{property.type}</span>
        </div>
        <h3 className="text-[#0F172A] font-bold text-base mb-2 line-clamp-1">{property.title}</h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
          {property.location}
        </div>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4">{property.description}</p>

        {/* Area */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Area</p>
            <p className="text-[#0F172A] text-sm font-semibold">{property.area}</p>
          </div>
          {property.yearBuilt > 0 && (
            <div>
              <p className="text-xs text-gray-400">Built</p>
              <p className="text-[#0F172A] text-sm font-semibold">{property.yearBuilt}</p>
            </div>
          )}
          <div className="flex gap-2">
            <a href={`https://wa.me/919179905115?text=Hi, I am interested in ${property.title}`} target="_blank" rel="noopener noreferrer">
              <button className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
            </a>
            <a href="tel:+919179905115">
              <button className="w-8 h-8 rounded-lg bg-[#0F172A]/5 border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A]/10 transition-colors">
                <Phone className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {property.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-gold/10 text-[#0F172A]/70 border border-gold/20 rounded-full px-2.5 py-0.5 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      const matchesType = selectedType === 'All' || p.type === selectedType;
      const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;
      const matchesLocation = selectedLocation === 'All' || p.location.includes(selectedLocation);
      const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesStatus && matchesLocation && matchesSearch;
    });
  }, [searchQuery, selectedType, selectedStatus, selectedLocation]);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-gray-50 min-h-screen">
        {/* Hero */}
        <section className="relative bg-[#0F172A] pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold/5 border border-gold/10"
                style={{ width: `${70 + i * 50}px`, height: `${70 + i * 50}px`, left: `${5 + i * 20}%`, top: `${10 + i * 15}%` }}
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              />
            ))}
          </div>
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">Commercial Listings — Indore</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                Commercial <span className="text-gradient-gold">Properties</span>
                <br />in Indore
              </h1>
              <p className="text-white/70 text-xl max-w-2xl mb-8">
                Browse our verified listings of offices, showrooms, warehouses & commercial spaces across Indore.
              </p>

              {/* Search Bar */}
              <div className="glass rounded-2xl p-4 max-w-3xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 flex-1 bg-white/10 rounded-xl px-4 py-3">
                    <Search className="w-4 h-4 text-gold shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search by name or location..."
                      className="bg-transparent text-white placeholder-white/50 text-sm flex-1 outline-none"
                    />
                  </div>
                  <select
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                    className="bg-white/10 text-white text-sm rounded-xl px-4 py-3 outline-none cursor-pointer border border-white/10 min-w-[130px]"
                  >
                    {statusOptions.map(s => <option key={s} value={s} className="bg-[#0F172A]">{s}</option>)}
                  </select>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm rounded-xl px-4 py-3 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters + Listings */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Pills */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-3">Property Type</p>
                        <div className="flex flex-wrap gap-2">
                          {propertyTypes.map(type => (
                            <button
                              key={type}
                              onClick={() => setSelectedType(type)}
                              className={`text-sm px-4 py-2 rounded-xl border transition-all duration-200 ${
                                selectedType === type
                                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                  : 'bg-white text-[#0F172A]/70 border-gray-200 hover:border-[#0F172A]/30'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-3">Location</p>
                        <div className="flex flex-wrap gap-2">
                          {locationOptions.map(loc => (
                            <button
                              key={loc}
                              onClick={() => setSelectedLocation(loc)}
                              className={`text-sm px-4 py-2 rounded-xl border transition-all duration-200 ${
                                selectedLocation === loc
                                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                  : 'bg-white text-[#0F172A]/70 border-gray-200 hover:border-[#0F172A]/30'
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-playfair)]">
                  {filtered.length} Properties Found
                </h2>
                <p className="text-gray-500 text-sm">
                  {selectedType !== 'All' && `${selectedType} • `}
                  {selectedStatus !== 'All' && `${selectedStatus} • `}
                  Indore
                </p>
              </div>
              {(selectedType !== 'All' || selectedStatus !== 'All' || selectedLocation !== 'All' || searchQuery) && (
                <button
                  onClick={() => { setSelectedType('All'); setSelectedStatus('All'); setSelectedLocation('All'); setSearchQuery(''); }}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0F172A] border border-gray-200 hover:border-[#0F172A]/30 rounded-lg px-3 py-1.5 transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Property Grid */}
            {filtered.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((property, i) => (
                    <PropertyCard key={property.id} property={property} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">No properties found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => { setSelectedType('All'); setSelectedStatus('All'); setSelectedLocation('All'); setSearchQuery(''); }}
                  className="bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-gold hover:text-[#0F172A] transition-all duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* CTA Banner */}
            <div className="mt-16 bg-[#0F172A] rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 relative z-10 font-[family-name:var(--font-playfair)]">
                Can't find what you need?
              </h3>
              <p className="text-white/60 mb-8 relative z-10">
                Tell us your requirements and we'll find the perfect commercial space for you in Indore.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link href="/contact">
                  <button className="bg-gold hover:bg-[#b8960e] text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2">
                    Share Your Requirements <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="https://wa.me/919179905115" target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
