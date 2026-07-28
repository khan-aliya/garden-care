import React from 'react';
import { Leaf, Phone, MapPin, MessageSquare, Heart } from 'lucide-react';
import { MEERUT_SHOP_PHONE } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenEnquiry }) => {
  const { language, t } = useLanguage();

  return (
    <footer id="main-footer" className="bg-emerald-950 text-emerald-100 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-serif">
                {language === 'hi' ? 'गार्डन केयर मेरठ' : 'GARDEN CARE MEERUT'}
              </span>
            </div>

            <p className="text-xs text-emerald-200/90 leading-relaxed">
              {language === 'hi'
                ? '1976 से मेरठ, उत्तर प्रदेश में स्थित पारिवारिक दुकान। लॉन मूवर, घास काटने की मशीन, फ़ाइबर व PVC गमले, कटर एवं स्प्रिंकलर सिस्टम में विशेषज्ञ।'
                : 'Family-owned shop founded in 1976 in Meerut, Uttar Pradesh. Specialising in manufacturing & trading lawn mowers, grass cutters, Fibre & PVC planters, hedging shears, and agricultural sprinkler systems.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
              <span>{language === 'hi' ? 'संचालक: शहाबाज़ खान' : 'Managed by Shabaz Khan'}</span>
              <span>•</span>
              <span>Est. 1976</span>
            </div>
          </div>

          {/* Col 2: Quick Shop Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'सामान की श्रेणियां' : 'Product Categories'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <button
                  onClick={() => onSelectCategory('lawn-mowers')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.lawnMowers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('planters')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.planters}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('garden-tools')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.gardenTools}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sprinklers')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.sprinklers}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Assistance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'सहायता' : 'Assistance & Help'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-amber-300 transition-colors">
                  {t.bulkEnquiry}
                </button>
              </li>
              <li>
                <a href="#legacy-section" className="hover:text-amber-300 transition-colors">
                  {language === 'hi' ? 'हमारा 1976 से इतिहास' : 'Our 1976 History'}
                </a>
              </li>
              <li>
                <a href="#reviews-section" className="hover:text-amber-300 transition-colors">
                  {language === 'hi' ? 'ग्राहकों की राय' : 'Meerut Customer Reviews'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Shop Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'दुकान का पता व संपर्क' : 'Meerut Shop Contact'}
            </h4>
            <div className="space-y-2 text-xs text-emerald-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'hi'
                    ? 'गार्डन केयर, मुख्य बाज़ार, मेरठ, यूपी 250002'
                    : 'Garden Care, Main Market, Meerut, UP 250002'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">+91 98370 12345</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(
                    language === 'hi'
                      ? 'नमस्ते शहाबाज़ खान! मुझे गार्डन केयर के सामान की जानकारी चाहिए।'
                      : 'Hello Shabaz Khan! I want to inquire about Garden Care products.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.chatWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-400/80 gap-3">
          <p>© 1976 - {new Date().getFullYear()} Garden Care Meerut. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for Shabaz Khan & Family
          </p>
        </div>

      </div>
    </footer>
  );
};

