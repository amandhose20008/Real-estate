'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = ['All Cities', 'New York', 'Los Angeles', 'Chicago', 'Dallas', 'San Francisco', 'Miami', 'Boston', 'Seattle'];
const propertyTypes = ['All Types', 'Office Space', 'Retail Shop', 'Warehouse', 'Commercial Land', 'Industrial', 'Co-working Space'];
const dealTypes = ['Buy / Rent / Lease', 'For Sale', 'For Lease', 'For Rent'];
const priceRanges = ['Any Price', '$500K - $1M', '$1M - $5M', '$5M - $20M', '$20M+'];

interface SearchSectionProps {
  onSearch?: (filters: Record<string, string>) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    deal: '',
    price: '',
    keyword: '',
  });

  const handleSearch = () => {
    onSearch?.(filters);
    // Scroll to properties
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50" id="search">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <SlidersHorizontal className="w-3 h-3 text-gold" />
            <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Advanced Search</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Find Your Perfect
            <span className="text-gradient-gold"> Property</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Filter through thousands of verified listings using our advanced search tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Search Header */}
          <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gold" />
              <span className="text-white text-sm font-semibold">Property Search Engine</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Search Filters */}
          <div className="p-6 sm:p-8">
            {/* Keyword Search */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 mb-6 focus-within:border-gold/50 focus-within:ring-2 focus-within:ring-gold/20 transition-all duration-300">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by property name, location, or keyword..."
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                value={filters.keyword}
                onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
              />
              {filters.keyword && (
                <button
                  onClick={() => setFilters({ ...filters, keyword: '' })}
                  className="text-gray-400 hover:text-gray-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Location */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    className="w-full pl-9 pr-8 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gold/50 focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc === 'All Cities' ? '' : loc}>{loc}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Property Type */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 pr-8 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gold/50 focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type === 'All Types' ? '' : type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Deal Type */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Transaction Type
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 pr-8 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gold/50 focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    value={filters.deal}
                    onChange={(e) => setFilters({ ...filters, deal: e.target.value })}
                  >
                    {dealTypes.map((deal) => (
                      <option key={deal} value={deal === 'Buy / Rent / Lease' ? '' : deal}>{deal}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Price Range */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 pr-8 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gold/50 focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    value={filters.price}
                    onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range === 'Any Price' ? '' : range}>{range}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters).filter(([, v]) => v).map(([k, v]) => (
                  <span key={k} className="inline-flex items-center gap-1.5 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-full px-3 py-1 text-xs text-[#0F172A] font-medium">
                    {v}
                    <button onClick={() => setFilters({ ...filters, [k]: '' })} className="text-gray-400 hover:text-gray-600">×</button>
                  </span>
                ))}
              </div>
              <Button
                onClick={handleSearch}
                className="w-full sm:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <Search className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Search Properties
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
