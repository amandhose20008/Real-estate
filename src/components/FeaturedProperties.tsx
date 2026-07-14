'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Maximize, Building2, BadgeCheck, TrendingUp, ArrowRight, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import type { Property } from '@/types';

function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="skeleton h-56 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="skeleton h-4 w-1/2 rounded" />
        <div className="skeleton h-6 w-1/3 rounded" />
        <div className="flex gap-2">
          <div className="skeleton h-7 w-20 rounded-full" />
          <div className="skeleton h-7 w-20 rounded-full" />
        </div>
        <div className="skeleton h-10 w-full rounded-xl" />
      </div>
    </div>
  );
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            property.status === 'For Sale' ? 'bg-green-500 text-white' :
            property.status === 'For Lease' ? 'bg-blue-500 text-white' :
            'bg-orange-500 text-white'
          }`}>
            {property.status}
          </span>
          {property.isVerified && (
            <span className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-gold text-[#0F172A]">
              <BadgeCheck className="w-3 h-3" />
              Verified
            </span>
          )}
        </div>

        {/* ROI Badge */}
        <div className="absolute top-3 right-3 bg-[#0F172A]/90 text-gold text-xs font-bold px-3 py-1.5 rounded-full">
          <TrendingUp className="w-3 h-3 inline mr-1" />
          {property.roi} ROI
        </div>

        {/* Wishlist & View buttons (on hover) */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              isWishlisted ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 text-gray-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-500 transition-all duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-[#0F172A] text-lg mb-1.5 line-clamp-1 group-hover:text-gold transition-colors duration-300">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-[#0F172A]">{property.price}</span>
          <span className="text-gray-400 text-xs">{property.status}</span>
        </div>

        {/* Details Row */}
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 flex-wrap">
          <div className="flex items-center gap-1">
            <Maximize className="w-3.5 h-3.5" />
            <span>{property.area}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>{property.type}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{property.city}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Agent + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">{property.agent.name}</p>
              <div className="flex items-center gap-0.5">
                <span className="text-[10px] text-yellow-500">★</span>
                <span className="text-[10px] text-gray-500">{property.agent.rating}</span>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            className="bg-[#0F172A] hover:bg-gold hover:text-[#0F172A] text-white text-xs font-semibold transition-all duration-300 group"
          >
            View Details
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

const filterTabs = ['All', 'For Sale', 'For Rent'];

export default function FeaturedProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading] = useState(false);

  const filteredProperties = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.status === activeFilter);

  return (
    <section className="py-24 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Featured Listings — Indore</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-playfair)]">
              Premium Commercial
              <br />
              <span className="text-gradient-gold">Properties in Indore</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Explore our curated selection of verified commercial properties — offices, showrooms, warehouses and more across Indore.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex bg-gray-100 p-1 rounded-xl gap-1 shrink-0"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === tab
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'text-gray-500 hover:text-[#0F172A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [...Array(6)].map((_, i) => <PropertyCardSkeleton key={i} />)
            : filteredProperties.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/listings">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-semibold px-10 transition-all duration-300 group"
            >
              View All Listings
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
