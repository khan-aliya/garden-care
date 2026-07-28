import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { MEERUT_SHOP_PHONE, buildWhatsAppEnquiryMessage } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

export const EnquirySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Lawn Mowers (Electric/Petrol/Manual)',
    quantityNeeded: '1-5 Units',
    city: 'Meerut',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(
        language === 'hi'
          ? 'कृपया अपना नाम और फोन नंबर दें।'
          : 'Please provide your name and phone number.'
      );
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const waUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${buildWhatsAppEnquiryMessage(
      formData.name,
      formData.phone,
      formData.category,
      formData.message,
      formData.quantityNeeded,
      formData.city,
      language
    )}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="enquiry-section" className="py-16 bg-gradient-to-b from-white via-emerald-50/40 to-emerald-100/50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Contact Details & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                {language === 'hi' ? 'सीधे दुकान से सहायता' : 'DIRECT SHOP ASSISTANCE'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
                {t.enquiryHeading}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {language === 'hi'
                  ? 'चाहे आपको ख़ास साइज़ के फ़ाइबर गमले चाहिए हों, फार्म स्प्रिंकलर या घास काटने की मशीन की सर्विस, शहाबाज़ खान सीधे आपकी मदद करेंगे।'
                  : 'Whether you need custom-sized fibre planters for a commercial project, farm sprinklers, or lawn mower maintenance support in Meerut, Shabaz Khan is here to assist you directly.'}
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-3 pt-2">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{language === 'hi' ? 'दुकान का पता' : 'Shop Address'}</h4>
                  <p className="text-xs text-gray-600">
                    {language === 'hi'
                      ? 'गार्डन केयर, मुख्य बाज़ार, रेलवे स्टेशन / बस स्टैंड रोड के पास, मेरठ, उत्तर प्रदेश - 250002'
                      : 'Garden Care, Main Road Market, Near Railway Station / Bus Stand Road, Meerut, Uttar Pradesh - 250002'}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Meerut+Uttar+Pradesh+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-emerald-700 hover:underline inline-block mt-1"
                  >
                    {language === 'hi' ? 'गूगल मैप्स पर रास्ता देखें →' : 'Get Google Maps Directions →'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{language === 'hi' ? 'डायरेक्ट फोन व व्हाट्सऐप' : 'Direct Phone & WhatsApp'}</h4>
                  <p className="text-xs text-gray-600 font-bold">
                    +91 98370 12345 (शहाबाज़ खान)
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {language === 'hi' ? 'सोमवार से शनिवार: सुबह 9:00 से रात 8:30 तक' : 'Available Mon-Sat: 9:00 AM - 8:30 PM IST'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{language === 'hi' ? 'त्वरित उत्तर' : 'Response Guarantee'}</h4>
                  <p className="text-xs text-gray-600">
                    {language === 'hi'
                      ? 'वेबसाइट से आए प्रश्नों का उत्तर 2 घंटे के भीतर दिया जाता है।'
                      : 'All website inquiries are answered within 2 hours during working hours.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Business Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 font-serif">
                    {t.enquirySubheading}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {language === 'hi'
                      ? 'दाम, थोक रेट या जानकारी के लिए नीचे फॉर्म भरें।'
                      : 'Fill out the form below for quotes, bulk prices, or technical advice.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'hi' ? 'उदा. विक्रम त्यागी' : 'e.g. Vikram Tyagi'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98370XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {language === 'hi' ? 'सामान की श्रेणी' : 'Equipment Category Interest'}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white font-medium"
                    >
                      <option value="Lawn Mowers (Electric/Petrol/Manual)">
                        {language === 'hi' ? 'घास काटने की मशीन (लॉन मूवर)' : 'Lawn Mowers (Electric/Petrol/Manual)'}
                      </option>
                      <option value="Fibre & PVC Planters / Pots">
                        {language === 'hi' ? 'फ़ाइबर एवं PVC गमले' : 'Fibre & PVC Planters / Pots'}
                      </option>
                      <option value="Garden Tools & Hedging Shears">
                        {language === 'hi' ? 'गार्डन टूल्स एवं कटर' : 'Garden Tools & Hedging Shears'}
                      </option>
                      <option value="Sprinklers & Drip Systems">
                        {language === 'hi' ? 'स्प्रिंकलर एवं सिंचाई सिस्टम' : 'Sprinklers & Drip Systems'}
                      </option>
                      <option value="Servicing / Spare Parts Inquiry">
                        {language === 'hi' ? 'मशीन रिपेयर व पार्ट्स' : 'Servicing / Spare Parts Inquiry'}
                      </option>
                      <option value="Bulk Order for Farm / Hotel / Nursery">
                        {language === 'hi' ? 'फार्म / होटल / नर्सरी हेतु थोक ऑर्डर' : 'Bulk Order for Farm / Hotel / Nursery'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {language === 'hi' ? 'आपका शहर / ज़िला' : 'Your City / District'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Meerut, Ghaziabad, Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {language === 'hi' ? 'आपकी आवश्यकता / सवाल का विवरण *' : 'Details of your Requirement / Question *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={
                      language === 'hi'
                        ? 'अपनी आवश्यकता लिखें (जैसे: होटल गार्डन के लिए 20 फ़ाइबर गमले चाहिए या 1800W लॉन मूवर की कीमत)।'
                        : 'Describe what you are looking for (e.g. Need 20 Fibre planters size 14-inch for hotel garden, or 1800W lawn mower availability).'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.sendEnquiryBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-1/2 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.chatWhatsApp}</span>
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 text-center">
                  {language === 'hi'
                    ? 'आपकी जानकारी सुरक्षित है। शहाबाज़ खान जल्द ही आपको कॉल करेंगे।'
                    : 'Your details are safe with us. Shabaz Khan will review and call you back shortly.'}
                </p>
              </form>
            ) : (
              /* Success Submission Banner */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif">
                  {language === 'hi' ? 'पूछताछ दर्ज हो गई!' : 'Enquiry Received!'}
                </h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  {language === 'hi'
                    ? `धन्यवाद ${formData.name}। शहाबाज़ खान को आपका संदेश मिल गया है और वे जल्द ही ${formData.phone} पर आपसे संपर्क करेंगे।`
                    : `Thank you ${formData.name}. Shabaz Khan has received your message regarding ${formData.category} and will reach out to ${formData.phone} soon.`}
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="px-5 py-2.5 rounded-xl bg-green-600 text-white text-xs font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.chatWhatsApp}</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50"
                  >
                    {language === 'hi' ? 'एक और भेजें' : 'Send Another'}
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

