import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, MessageCircle, Check, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { formatCurrency, MEERUT_SHOP_PHONE } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const { language, t, getLocalizedProduct } = useLanguage();
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'delivery'>('details');

  if (!product) return null;

  const localized = getLocalizedProduct(product);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const directWhatsAppUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(
    language === 'hi'
      ? `नमस्ते शहाबाज़ भाई, मुझे ऑर्डर करना है: *${quantity}x ${localized.name}* (कुल राशि: ${formatCurrency(product.price * quantity)})। कृपया उपलब्धता और डिलीवरी समय बताएं।`
      : `Hello Shabaz Bhai, I want to order *${quantity}x ${localized.name}* (Total: ${formatCurrency(product.price * quantity)}). Please confirm availability and delivery time.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Image Column */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <img
                  src={product.image}
                  alt={localized.name}
                  className="w-full h-full object-cover"
                />
                {localized.badge && (
                  <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {localized.badge}
                  </span>
                )}
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'hi' ? 'मेरठ वर्कशॉप में टेस्टेड एवं प्रमाणित' : 'Tested & Inspected at Meerut Workshop'}</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  {language === 'hi'
                    ? 'प्रत्येक मशीन और औजार को भेजने से पहले शहाबाज़ खान द्वारा व्यक्तिगत रूप से चेक किया जाता है।'
                    : 'Every machine and tool is personally checked by Shabaz Khan before dispatch to ensure 100% operational condition.'}
                </p>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-500 mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-900">{product.rating}</span>
                  <span className="text-gray-400">({product.reviewsCount} customer reviews)</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-serif leading-tight">
                  {localized.name}
                </h2>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl font-black text-emerald-800">
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Save {discountPercent}%
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {localized.description}
                </p>

                {/* Features list */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t.keyFeatures}</h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-700">
                    {localized.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quantity & Purchasing Controls */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-700">{language === 'hi' ? 'मात्रा (Quantity):' : 'Quantity:'}</span>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-xs font-bold text-gray-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t.addToCart} ({formatCurrency(product.price * quantity)})</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.orderOnWhatsApp}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Specs & Info Tabs */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex border-b border-gray-200 gap-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 text-xs font-bold border-b-2 transition-colors ${
                  activeTab === 'details'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {t.specs}
              </button>
              <button
                onClick={() => setActiveTab('delivery')}
                className={`pb-2 text-xs font-bold border-b-2 transition-colors ${
                  activeTab === 'delivery'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {language === 'hi' ? 'डिलीवरी एवं मेरठ पिकअप' : 'Delivery & Meerut Pickup'}
              </button>
            </div>

            <div className="py-4">
              {activeTab === 'details' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-xl text-xs">
                  {Object.entries(localized.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="font-semibold text-gray-600">{key}:</span>
                      <span className="font-bold text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="space-y-3 text-xs text-gray-700 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <div className="flex items-start gap-2">
                    <Truck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? 'घर पर डिलीवरी (Doorstep Delivery):' : 'Doorstep Delivery Across UP & India:'}
                      </span>
                      <p className="text-gray-600 mt-0.5">
                        {language === 'hi'
                          ? 'मेरठ शहर में फ्री होम डिलीवरी। गाजियाबाद, दिल्ली NCR, नोएडा, देहरादून और आसपास ट्रांसपोर्ट डिलीवरी उपलब्ध।'
                          : 'Free local delivery inside Meerut city. Express transport shipping available for Ghaziabad, Delhi NCR, Noida, Dehradun & nationwide.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? 'मेरठ दुकान से पिकअप:' : 'Self Pickup at Garden Care Meerut Shop:'}
                      </span>
                      <p className="text-gray-600 mt-0.5">
                        {language === 'hi'
                          ? 'आप मेरठ दुकान पर आकर सामान चलाकर देख सकते हैं। कैश ऑन डिलीवरी एवं UPI स्कैनर उपलब्ध है।'
                          : 'You can visit our shop directly in Meerut to test the equipment before purchasing. Cash on delivery accepted.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

