import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Wrench, Sparkles, MessageCircle } from 'lucide-react';
import { MEERUT_SHOP_PHONE } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSelectCategory: (cat: string) => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory, onOpenEnquiry }) => {
  const { language, t } = useLanguage();

  return (
    <section id="hero-banner" className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden py-12 lg:py-16">
      {/* Soft background glow & texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600/50 text-amber-300 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.trustedSince}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {t.heroSubtitle}
            </p>

            {/* Diverse Audience Pill Badges */}
            <div className="pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 mb-2.5">
                {language === 'hi' ? 'मेरठ और आसपास के हर ग्राहक के लिए तैयार:' : 'Built For All Customers Across Meerut & NCR:'}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium">
                <span className="px-3 py-1 rounded-full bg-emerald-800/90 border border-emerald-600/40 text-emerald-100 shadow-xs">
                  {t.villasAndHomes}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-800/90 border border-emerald-600/40 text-emerald-100 shadow-xs">
                  {t.armyAndGovt}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-800/90 border border-emerald-600/40 text-emerald-100 shadow-xs">
                  {t.ashramsAndInstitutions}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-800/90 border border-emerald-600/40 text-emerald-100 shadow-xs">
                  {t.farmhouses}
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-shop-mowers-btn"
                onClick={() => onSelectCategory('lawn-mowers')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-400/20 transform hover:-translate-y-0.5"
              >
                <span>{t.shopNow}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-shop-planters-btn"
                onClick={() => onSelectCategory('planters')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/90 text-white font-bold text-sm border border-emerald-600/60 transition-all shadow-sm"
              >
                <span>{t.planters}</span>
              </button>

              <button
                id="hero-bulk-enquiry-btn"
                onClick={onOpenEnquiry}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 font-semibold text-sm backdrop-blur-sm border border-white/20 transition-all"
              >
                <span>{t.bulkEnquiry}</span>
              </button>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-200">
              <a
                href={`https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(language === 'hi' ? 'नमस्ते शहाबाज़ भाई, मुझे अपने गार्डन के लिए सामान चाहिए।' : 'Hello Shabaz Khan! I would like to know more about Garden Care products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/90 hover:bg-green-500 text-white font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>{language === 'hi' ? 'शहाबाज़ भाई से सीधे व्हाट्सएप पर बात करें' : 'Chat directly with Shabaz Khan on WhatsApp'}</span>
              </a>
            </div>

          </div>

          {/* Right Visual Showcase Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-700/50 shadow-2xl bg-emerald-900/60 p-3">
              <img
                src="https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&w=1000&q=80"
                alt="Garden Care Heavy Duty Electric Lawn Mower Meerut"
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
              />
              
              {/* Floating Featured Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-emerald-950/90 backdrop-blur-md p-4 rounded-xl border border-emerald-600/40 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                      {language === 'hi' ? 'मेरठ में सबसे लोकप्रिय' : 'Top Selling in Meerut & UP'}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      {language === 'hi' ? 'गार्डन केयर 1800W इलेक्ट्रिक लॉन मूवर' : 'Garden Care 1800W Electric Lawn Mower'}
                    </h3>
                    <p className="text-xs text-emerald-200 mt-1">
                      {language === 'hi' ? '100% तांबे की मोटर • टिकाऊ स्टील ब्लेड' : '100% Pure Copper Motor • High-Carbon Blades'}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectCategory('lawn-mowers')}
                    className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap"
                  >
                    ₹14,499
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Badges Strip */}
        <div className="mt-12 pt-8 border-t border-emerald-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800/80 flex items-center justify-center text-amber-400 border border-emerald-700 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {language === 'hi' ? 'मेरठ वर्कशॉप' : 'In-House Workshop'}
              </h4>
              <p className="text-[11px] text-emerald-200">
                {language === 'hi' ? 'सर्विस व स्पेयर पार्ट्स की गारंटी' : 'Testing & spare parts support'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800/80 flex items-center justify-center text-amber-400 border border-emerald-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {language === 'hi' ? '48+ वर्षों का अनुभव' : '48+ Years Legacy'}
              </h4>
              <p className="text-[11px] text-emerald-200">
                {language === 'hi' ? '1976 से भरोसेमंद संस्थान' : 'Serving Meerut since 1976'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800/80 flex items-center justify-center text-amber-400 border border-emerald-700 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {language === 'hi' ? 'घर पर डिलीवरी' : 'Fast Doorstep Delivery'}
              </h4>
              <p className="text-[11px] text-emerald-200">
                {language === 'hi' ? 'मेरठ व आसपास तेज डिलीवरी' : 'Free local delivery in Meerut'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800/80 flex items-center justify-center text-amber-400 border border-emerald-700 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {language === 'hi' ? 'व्हाट्सएप ऑर्डर' : 'Instant WhatsApp Order'}
              </h4>
              <p className="text-[11px] text-emerald-200">
                {language === 'hi' ? 'शहाबाज़ भाई से डायरेक्ट बात' : 'Direct assistance from owner'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

