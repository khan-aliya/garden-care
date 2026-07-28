import React from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, MessageCircle, Check } from 'lucide-react';
import { formatCurrency, MEERUT_SHOP_PHONE } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const { language, t, getLocalizedProduct } = useLanguage();
  const localized = getLocalizedProduct(product);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const directWhatsAppUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(
    language === 'hi'
      ? `नमस्ते शहाबाज़ भाई, मुझे यह सामान ऑर्डर करना है: *${localized.name}* (मूल्य: ${formatCurrency(product.price)})। कृपया उपलब्धता बताएं।`
      : `Hello Shabaz Bhai, I am interested in ordering: *${localized.name}* (Price: ${formatCurrency(product.price)}). Please confirm stock availability.`
  )}`;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Product Image & Badges */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={localized.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            {localized.badge ? (
              <span className="bg-emerald-800/90 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                {localized.badge}
              </span>
            ) : <span />}

            {discountPercent > 0 && (
              <span className="bg-amber-400 text-emerald-950 text-[10px] font-black px-2 py-1 rounded-md shadow-md">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Quick View Floating Action */}
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
            title={t.viewDetails}
          >
            <Eye className="w-4 h-4 text-emerald-800" />
          </button>
        </div>

        {/* Product Details Content */}
        <div className="p-4 space-y-2.5">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-900 font-bold">{product.rating}</span>
            <span className="text-gray-400 text-[11px]">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-sm font-bold text-gray-900 line-clamp-2 hover:text-emerald-700 cursor-pointer transition-colors leading-snug"
          >
            {localized.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-lg font-black text-emerald-800">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through font-medium">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Highlights */}
          <ul className="space-y-1 text-[11px] text-gray-600 pt-1">
            {localized.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-tight">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.addToCart}</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-800 border border-green-300 text-xs font-bold transition-colors"
            title="Order directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

