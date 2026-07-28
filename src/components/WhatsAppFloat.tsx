import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MEERUT_SHOP_PHONE } from '../utils/formatters';

export const WhatsAppFloat: React.FC = () => {
  const waUrl = `https://wa.me/${MEERUT_SHOP_PHONE.replace('+', '')}?text=${encodeURIComponent(
    'Hello Shabaz Khan! I am visiting your Garden Care website and would like assistance with garden equipment.'
  )}`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
      title="Chat with Shabaz Khan on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-green-500" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Shabaz Khan
      </span>
    </a>
  );
};
