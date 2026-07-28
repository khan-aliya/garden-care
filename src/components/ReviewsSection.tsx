import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="reviews-section" className="py-14 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            {language === 'hi' ? 'मेरठ के ग्राहकों की राय' : 'LOCAL TRUSTED FEEDBACK'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
            {language === 'hi' ? 'हमारे ग्राहकों का अनुभव' : 'What Customers in Meerut & UP Say About Us'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {language === 'hi'
              ? 'मेरठ के बगीचे वाले, फार्महाउस, माली और पौधे-प्रेमी शहाबाज़ खान और गार्डन केयर पर भरोसा करते हैं।'
              : 'Generations of lawn owners, farmhouses, gardeners, and plant lovers trust Shabaz Khan and Garden Care.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-amber-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" /> {language === 'hi' ? 'सत्यापित ग्राहक' : 'Verified Buyer'}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-900">{rev.author}</h4>
                <p className="text-[11px] text-gray-500">{rev.location}</p>
                <p className="text-[10px] text-emerald-800 font-medium truncate mt-1">
                  {language === 'hi' ? 'खरीदा गया सामान:' : 'Item:'} {rev.productName}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

