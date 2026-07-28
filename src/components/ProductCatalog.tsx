import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, RotateCcw, SearchX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onQuickView,
}) => {
  const { language, t } = useLanguage();
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(30000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesDesc = p.description.toLowerCase().includes(q);
          const matchesCat = p.category.toLowerCase().includes(q);
          const matchesBadge = p.badge?.toLowerCase().includes(q);
          if (!matchesName && !matchesDesc && !matchesCat && !matchesBadge) {
            return false;
          }
        }
        // Price filter
        if (p.price > maxPriceFilter) {
          return false;
        }
        // Stock filter
        if (inStockOnly && !p.inStock) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.reviewsCount - a.reviewsCount; // popular
      });
  }, [products, selectedCategory, searchQuery, maxPriceFilter, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    setMaxPriceFilter(30000);
    setInStockOnly(false);
    setSortBy('popular');
  };

  const categoriesMap = [
    { id: 'all', name: t.allCategories },
    { id: 'lawn-mowers', name: t.lawnMowers },
    { id: 'planters', name: t.planters },
    { id: 'garden-tools', name: t.gardenTools },
    { id: 'sprinklers', name: t.sprinklers },
  ];

  return (
    <section id="catalog-section" className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-200 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
              {language === 'hi' ? 'गार्डन केयर मेरठ - सामान कैटलॉग' : 'Our Garden Equipment Catalog'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {language === 'hi'
                ? `मेरठ दुकान में उपलब्ध ${products.length} में से ${filteredProducts.length} सामान दिखाए जा रहे हैं।`
                : `Showing ${filteredProducts.length} of ${products.length} products available from Garden Care Meerut.`}
            </p>
          </div>

          {/* Quick Category Buttons Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categoriesMap.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filter & Sort Control Strip */}
        <div className="my-6 p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-700">
            {/* Price Slider */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
              <span>{language === 'hi' ? 'अधिकतम कीमत:' : 'Max Price:'}</span>
              <input
                type="range"
                min="500"
                max="30000"
                step="500"
                value={maxPriceFilter}
                onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                className="w-28 sm:w-36 accent-emerald-600 cursor-pointer"
              />
              <span className="font-bold text-gray-900 min-w-16">₹{maxPriceFilter.toLocaleString('en-IN')}</span>
            </div>

            {/* In Stock Only */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
              <span>{t.inStock}</span>
            </label>
          </div>

          {/* Sort Dropdown & Reset */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">{t.sortBy}:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="popular">{t.topRated}</option>
                <option value="rating">{t.topRated}</option>
                <option value="price-low">{t.priceLowToHigh}</option>
                <option value="price-high">{t.priceHighToLow}</option>
              </select>
            </div>

            {(selectedCategory !== 'all' || searchQuery || maxPriceFilter < 30000 || inStockOnly) && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-bold underline ml-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Result */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 p-8 my-6">
            <SearchX className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">
              {language === 'hi' ? 'कोई सामान नहीं मिला' : 'No Matching Equipment Found'}
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              {language === 'hi'
                ? 'आपकी खोज के अनुसार कोई सामान नहीं मिला। कृपया फ़िल्टर बदलें या शहाबाज़ खान से सीधे बात करें।'
                : "We couldn't find any products matching your current search or price filters. Try adjusting your filters or send Shabaz Khan a custom query."}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                {language === 'hi' ? 'सभी फ़िल्टर हटाएं' : 'Reset All Filters'}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

