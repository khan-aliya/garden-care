import React, { useState } from 'react';
import { Search, ShoppingBag, Phone, Menu, X, Leaf, MessageSquare, MapPin, Award, Globe } from 'lucide-react';
import { MEERUT_SHOP_PHONE, formatCurrency } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenEnquiry: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenEnquiry,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'all', label: t.allCategories },
    { id: 'lawn-mowers', label: t.lawnMowers },
    { id: 'planters', label: t.planters },
    { id: 'garden-tools', label: t.gardenTools },
    { id: 'sprinklers', label: t.sprinklers },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white shadow-sm border-b border-emerald-100">
      {/* Top Banner Ticker */}
      <div id="top-announcement-bar" className="bg-emerald-900 text-emerald-50 px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-amber-300">
              <Award className="w-3.5 h-3.5" /> {t.trustedSince}
            </span>
            <span className="hidden md:inline text-emerald-300">•</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {t.topBarText.split('|')[0]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Button in Top Bar */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-amber-300 text-[11px] font-bold border border-amber-400/40 transition-all shadow-xs"
              title="Change Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? '🇮🇳 हिंदी में देखें' : '🇬🇧 Switch to English'}</span>
            </button>

            <a
              href={`https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(language === 'hi' ? 'नमस्ते शहाबाज़ भाई, मुझे गार्डन केयर सामान के बारे में जानकारी चाहिए।' : 'Hello Shabaz Bhai, I visited your Garden Care website and need help with garden equipment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-400 fill-green-400/20" />
              <span>{t.callDirectly}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Legacy Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectCategory('all')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:bg-emerald-700 transition-colors">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-2xl tracking-tight text-gray-900 font-serif">
                    GARDEN CARE
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    Meerut
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">
                  {language === 'hi' ? 'लॉन मूवर, फाइबर गमले व औजार (1976 से)' : 'Lawn Mowers, Garden Tools & Planters Since 1976'}
                </p>
              </div>
            </button>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Language Toggle Badge on Desktop Header */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            <button
              id="header-bulk-enquiry-btn"
              onClick={onOpenEnquiry}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-emerald-600 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.bulkEnquiry}</span>
            </button>

            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/30"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-bold">{t.cart}</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1 bg-amber-400 text-emerald-950 font-extrabold text-[11px] rounded-full border border-white">
                  {cartCount}
                </span>
              )}
              {cartTotal > 0 && (
                <span className="hidden md:inline text-xs font-medium border-l border-emerald-500 pl-2">
                  {formatCurrency(cartTotal)}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 lg:hidden flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-emerald-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-bold shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'en' ? 'हिंदी' : 'Eng'}</span>
          </button>
        </div>
      </div>

      {/* Category Nav Strip (Desktop) */}
      <nav id="category-nav-strip" className="hidden lg:block border-t border-gray-100 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-1">
            {navItems.map((item) => {
              const isActive = selectedCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectCategory(item.id)}
                  className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-200/60 hover:text-emerald-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="ml-auto flex items-center gap-4 text-xs font-semibold text-gray-600">
              <a
                href="#legacy-section"
                className="hover:text-emerald-700 transition-colors"
              >
                {t.ourStory}
              </a>
              <button
                onClick={onOpenEnquiry}
                className="text-emerald-700 font-bold hover:underline"
              >
                {t.bulkEnquiry}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.switchLanguage}</p>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-700 text-white rounded-md text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}</span>
            </button>
          </div>

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Browse Collections</p>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectCategory(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === item.id
                    ? 'bg-emerald-100 text-emerald-900 font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenEnquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
            >
              {t.bulkEnquiry}
            </button>
            <a
              href={`https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(language === 'hi' ? 'नमस्ते शहाबाज़ भाई, मुझे गार्डन केयर सामान के बारे में बात करनी है।' : 'Hello Shabaz Khan, I have an inquiry about Garden Care products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600 text-white text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.quickWhatsApp} (+91 98370 12345)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

