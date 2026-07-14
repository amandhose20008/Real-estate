'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/properties';
import { Badge } from '@/components/ui/badge';

const categoryColors: Record<string, string> = {
  'Market Trends': 'bg-blue-100 text-blue-700',
  'Investment Guide': 'bg-green-100 text-green-700',
  'Market Analysis': 'bg-purple-100 text-purple-700',
};

function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <div className="skeleton h-52 w-full" />
      <div className="p-6 space-y-3">
        <div className="skeleton h-4 w-24 rounded-full" />
        <div className="skeleton h-6 w-full rounded" />
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-4 w-1/2 rounded" />
      </div>
    </div>
  );
}

export default function LatestInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-white" id="insights">
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
              <Tag className="w-3 h-3 text-[#0F172A]" />
              <span className="text-[#0F172A] text-xs font-semibold tracking-widest uppercase">Latest Insights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Market News &
              <span className="text-gradient-gold"> Investment Tips</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Expert analysis and intelligence to keep you ahead of market trends
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 flex items-center gap-2 text-[#0F172A] font-semibold hover:text-gold transition-colors group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#0F172A] font-bold text-lg mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="ml-auto text-[#0F172A] font-semibold group-hover:text-gold transition-colors flex items-center gap-1">
                    Read
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
