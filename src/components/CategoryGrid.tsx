import React from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (slug: string) => void;
  selectedCategory: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section id="categories-section" className="py-12 bg-emerald-50/50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              EXPLORE OUR RANGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
              Popular Product Collections
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Quality garden tools, planters, and lawn mowers designed for durability and longevity.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <span>View All Products ({CATEGORIES.reduce((acc, c) => acc + c.itemCount, 0)})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`group cursor-pointer rounded-2xl bg-white border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl ${
                  isSelected
                    ? 'border-emerald-600 ring-2 ring-emerald-600/30'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white">
                    {cat.itemCount} Items
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-extrabold leading-snug">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {cat.subtitle}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1">
                    {cat.popularItems.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
