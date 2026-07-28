import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { X, CheckCircle, MessageCircle, MapPin, CreditCard, QrCode, Building, Truck } from 'lucide-react';
import { formatCurrency, MEERUT_SHOP_PHONE, buildWhatsAppOrderMessage } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onClearCart,
}) => {
  const { language, t } = useLanguage();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Meerut',
    pincode: '250002',
    deliveryType: 'delivery',
    paymentMethod: 'cod',
    notes: '',
  });

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetails.customerName || !orderDetails.phone || !orderDetails.address) {
      alert(
        language === 'hi'
          ? 'कृपया अपना नाम, फोन नंबर और पता भरें।'
          : 'Please fill in your name, phone number, and address.'
      );
      return;
    }
    setStep('success');
  };

  const handleFinishAndWhatsApp = () => {
    const waUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${buildWhatsAppOrderMessage(
      cart,
      total,
      orderDetails,
      language
    )}`;
    window.open(waUrl, '_blank');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-4 bg-emerald-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-base">
              {language === 'hi' ? 'गार्डन केयर मेरठ - चेकआउट' : 'Garden Care Meerut - Secure Checkout'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
            
            {/* Delivery Type Switch */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {language === 'hi' ? 'डिलीवरी का प्रकार' : 'Fulfillment Method'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderDetails({ ...orderDetails, deliveryType: 'delivery' })}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                    orderDetails.deliveryType === 'delivery'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'hi' ? 'घर पर डिलीवरी' : 'Doorstep Delivery'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderDetails({ ...orderDetails, deliveryType: 'pickup' })}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                    orderDetails.deliveryType === 'pickup'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'hi' ? 'मेरठ दुकान से पिकअप' : 'Store Pickup in Meerut'}</span>
                </button>
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                {language === 'hi' ? 'ग्राहक एवं पते की जानकारी' : 'Customer & Shipping Details'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'hi' ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                    value={orderDetails.customerName}
                    onChange={(e) => setOrderDetails({ ...orderDetails, customerName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98370XXXXX"
                    value={orderDetails.phone}
                    onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {t.addressLabel} *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder={language === 'hi' ? 'मकान नं., गली, कॉलोनी, लैंडमार्क' : 'House/Plot No., Street Name, Colony, Near Landmark'}
                  value={orderDetails.address}
                  onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {language === 'hi' ? 'शहर' : 'City'}
                  </label>
                  <input
                    type="text"
                    required
                    value={orderDetails.city}
                    onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {language === 'hi' ? 'पिनकोड' : 'Pincode'}
                  </label>
                  <input
                    type="text"
                    required
                    value={orderDetails.pincode}
                    onChange={(e) => setOrderDetails({ ...orderDetails, pincode: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                {language === 'hi' ? 'भुगतान का तरीका चुनें' : 'Select Payment Mode'}
              </h3>

              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 text-xs font-medium">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={orderDetails.paymentMethod === 'cod'}
                    onChange={() => setOrderDetails({ ...orderDetails, paymentMethod: 'cod' })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <CreditCard className="w-4 h-4 text-emerald-700" />
                  <div>
                    <span className="font-bold text-gray-900">
                      {language === 'hi' ? 'कैश ऑन डिलीवरी / दुकान पर नकद' : 'Cash on Delivery / On Store Pickup'}
                    </span>
                    <p className="text-[11px] text-gray-500">
                      {language === 'hi' ? 'सामान मिलने पर नकद या UPI द्वारा भुगतान करें' : 'Pay cash or UPI upon receiving the items in Meerut'}
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 text-xs font-medium">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={orderDetails.paymentMethod === 'upi'}
                    onChange={() => setOrderDetails({ ...orderDetails, paymentMethod: 'upi' })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <QrCode className="w-4 h-4 text-emerald-700" />
                  <div>
                    <span className="font-bold text-gray-900">
                      {language === 'hi' ? 'Google Pay / PhonePe / Paytm UPI QR' : 'Pay via Google Pay / PhonePe / Paytm UPI QR'}
                    </span>
                    <p className="text-[11px] text-gray-500">
                      {language === 'hi' ? 'शहाबाज़ खान व्हाट्सऐप पर क्यूआर कोड भेज देंगे' : 'Instant UPI payment link sent on WhatsApp by Shabaz Khan'}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Total Summary */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center text-xs">
              <div>
                <span className="font-bold text-emerald-950">
                  {language === 'hi' ? 'कुल राशि:' : 'Grand Total Amount:'}
                </span>
                <p className="text-[11px] text-emerald-700">
                  {language === 'hi' ? 'सभी टैक्स शामिल हैं' : 'Includes all taxes & local Meerut handling'}
                </p>
              </div>
              <span className="text-xl font-black text-emerald-900">
                {formatCurrency(total)}
              </span>
            </div>

            {/* Submit Action */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold text-xs hover:bg-gray-50"
              >
                {language === 'hi' ? 'पीछे जाएं' : 'Back to Cart'}
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
              >
                {language === 'hi' ? 'ऑर्डर दर्ज करें' : 'Place Order'} ({formatCurrency(total)})
              </button>
            </div>

          </form>
        ) : (
          /* Order Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-gray-900 font-serif">
                {language === 'hi' ? 'ऑर्डर सफलता से दर्ज हो गया!' : 'Order Placed Successfully!'}
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                {language === 'hi'
                  ? `धन्यवाद, ${orderDetails.customerName}! गार्डन केयर मेरठ में आपका ऑर्डर दर्ज हो गया है।`
                  : `Thank you, ${orderDetails.customerName}! Your order request for Garden Care equipment has been registered.`}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-500">{language === 'hi' ? 'प्रकार:' : 'Fulfillment:'}</span>
                <span className="font-bold text-gray-900 capitalize">{orderDetails.deliveryType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{language === 'hi' ? 'पता:' : 'Delivery Address:'}</span>
                <span className="font-bold text-gray-900 text-right">{orderDetails.address}, {orderDetails.city}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-900 font-bold">{t.subtotal}:</span>
                <span className="font-extrabold text-emerald-800 text-sm">{formatCurrency(total)}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 max-w-md mx-auto space-y-3">
              <p className="font-bold">
                📱 {language === 'hi'
                  ? 'शहाबाज़ खान से व्हाट्सऐप पर जुड़ने के लिए नीचे बटन दबाएं:'
                  : 'Click below to connect with Shabaz Khan on WhatsApp to confirm delivery time or send payment screenshot:'}
              </p>
              
              <button
                onClick={handleFinishAndWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.orderOnWhatsApp}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

