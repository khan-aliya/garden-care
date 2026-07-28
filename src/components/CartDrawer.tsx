import React from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, ArrowRight, MessageCircle, Truck } from 'lucide-react';
import { formatCurrency, buildWhatsAppOrderMessage, MEERUT_SHOP_PHONE } from '../utils/formatters';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const { language, t, getLocalizedProduct } = useLanguage();

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const directWhatsAppUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${buildWhatsAppOrderMessage(cart, total, language)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-emerald-900 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold">{t.cartTitle}</h2>
            <span className="text-xs bg-emerald-800 text-amber-300 font-extrabold px-2 py-0.5 rounded-full">
              {totalItems} {language === 'hi' ? 'सामान' : 'items'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Local Delivery Banner */}
        <div className="bg-amber-50 px-4 py-2.5 border-b border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <Truck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            {total >= 2000 ? (
              <strong className="text-emerald-800">
                {language === 'hi' ? '🎉 मेरठ में फ्री होम डिलीवरी योग्य!' : '🎉 Qualified for FREE Local Delivery in Meerut!'}
              </strong>
            ) : (
              <span>
                {language === 'hi'
                  ? `फ्री डिलीवरी के लिए `
                  : `Add `}
                <strong>{formatCurrency(2000 - total)}</strong>
                {language === 'hi'
                  ? ` का और सामान जोड़ें।`
                  : ` more for Free Delivery in Meerut.`}
              </span>
            )}
          </span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-sm font-bold text-gray-700">{t.cartEmpty}</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                {language === 'hi'
                  ? 'घास काटने की मशीन, गमले या औजार देखें और कार्ट में जोड़ें।'
                  : 'Explore our lawn mowers, pots, or garden tools and add items to your shopping cart.'}
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                {t.exploreCatalog}
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const localized = getLocalizedProduct(item.product);
              return (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={localized.name}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100 border border-gray-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {localized.name}
                    </h4>
                    <p className="text-xs font-black text-emerald-800 mt-0.5">
                      {formatCurrency(item.product.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-300 rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right font-black text-xs text-gray-900">
                    {formatCurrency(item.product.price * item.quantity)}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-white space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-semibold">{t.subtotal}:</span>
              <span className="font-extrabold text-lg text-emerald-900">
                {formatCurrency(total)}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                id="cart-checkout-btn"
                onClick={onProceedToCheckout}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <span>{t.checkout}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.orderOnWhatsApp}</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-400">
              {language === 'hi'
                ? 'सभी टैक्स शामिल हैं • कैश ऑन डिलीवरी या UPI द्वारा भुगतान करें'
                : 'Tax included • Pay via Cash on Delivery, UPI QR or WhatsApp confirmation'}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

