import React from 'react';
import { Award, CheckCircle2, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LegacyStory: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="legacy-section" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image Collage */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
                alt="Garden Care Workshop Meerut Founded 1976"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded">
                  ESTABLISHED 1976
                </span>
                <h3 className="text-lg font-bold font-serif mt-1">
                  {language === 'hi' ? 'मेरठ में हमारी छोटी दुकान' : 'Our Small Shop in Meerut, UP'}
                </h3>
                <p className="text-xs text-emerald-200">
                  {language === 'hi' ? 'ईमानदारी, लोकल कारीगरी और मज़बूत क्वालिटी।' : 'Built on honest relationships, local craft, and engineering precision.'}
                </p>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow-lg border border-emerald-700 flex items-center justify-between">
              <div>
                <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                  {language === 'hi' ? 'भरोसेमंद अनुभव' : 'Trusted Experience'}
                </p>
                <p className="text-2xl font-black font-serif text-amber-300 mt-0.5">48+ Years</p>
                <p className="text-[11px] text-emerald-100 mt-1">
                  {language === 'hi' ? '10,000+ संतुष्ट ग्राहक' : '10,000+ Happy Gardeners across UP & NCR'}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center text-amber-400">
                <Award className="w-7 h-7" />
              </div>
            </div>
          </div>

          {/* Right Column Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                {language === 'hi' ? 'हमारी धरोहर एवं संकल्प' : 'OUR HERITAGE & MISSION'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
                {language === 'hi'
                  ? '1976 में हमारे पिताजी की शुरुआत से आज शहाबाज़ खान की देखभाल तक'
                  : 'From Our Father’s Vision in 1976 to Shabaz Khan’s Craftsmanship Today'}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {language === 'hi'
                ? 'गार्डन केयर की शुरुआत 1976 में मेरठ में हमारे पिताजी द्वारा एक छोटी दुकान से हुई थी। हमारे पास कोई बड़े शोरूम या कर्मचारी नहीं थे—केवल टिकाऊ और भरोसेमंद लॉन मूवर व बगीचे के औज़ार बनाने की लगन थी जो भारतीय मौसम में सालों-साल चलें।'
                : "Garden Care started in 1976 as a small, unorganised shop in Meerut founded by our father. We didn't have big employees or expensive showrooms—just a commitment to hand-forging reliable lawn mowers, lawn rollers, and durable garden equipment that would withstand tough Indian weather and heavy soil conditions."}
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {language === 'hi'
                ? 'आज मेरे भाई शहाबाज़ खान खुद हर मशीन और गमले की जांच करते हैं। हम इलेक्ट्रिक, पेट्रोल और मैन्युअल लॉन मूवर, फ़ाइबर व PVC गमले, कटर और स्प्रिंकलर सिस्टम बनाते और बेचते हैं।'
                : 'Today, my brother Shabaz Khan personally oversees every single machine, mower motor, and planter set that leaves our Meerut workshop. We manufacture and trade top-grade lawn mowers (electric, petrol, and manual), lightweight Fibre & PVC planters, precision hedging shears, and complete sprinkler irrigation setups.'}
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {language === 'hi' ? 'सीधे दुकान के दाम' : 'Direct Workshop Pricing'}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {language === 'hi' ? 'बिना बिचौलिए के सही और वाजिब रेट।' : 'No middlemen commission. Factory-direct savings pass to you.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {language === 'hi' ? '100% जांची हुई मोटर' : '100% Tested Motors'}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {language === 'hi' ? 'तांबे (Copper) की मोटर और पक्के ब्लेड।' : 'Copper-wound motors & heat-treated steel blades.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {language === 'hi' ? 'स्पेयर पार्ट्स की गारंटी' : 'Spare Parts Guarantee'}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {language === 'hi' ? 'हमेशा पार्ट्स और ब्लेड आसानी से उपलब्ध।' : 'Full spare parts & blades support for lifetime usability.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {language === 'hi' ? 'व्यक्तिगत सहायता' : 'Personal Guidance'}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {language === 'hi' ? 'शहाबाज़ खान खुद व्हाट्सऐप या फोन पर मार्गदर्शन करते हैं।' : 'Shabaz Khan personally assists you on WhatsApp/Phone.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Quote */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <span className="font-bold text-gray-900">
                  {language === 'hi' ? 'मेरठ आ रहे हैं?' : 'Visiting Meerut?'}
                </span>
                <p className="text-gray-600 mt-0.5">
                  {language === 'hi'
                    ? 'हमारी दुकान पर आएं और खुद लॉन मूवर चलाकर देखें या फ़ाइबर गमलों की जांच करें!'
                    : 'Stop by our shop to test drive any lawn mower or inspect our Fibre & PVC planters in person!'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

