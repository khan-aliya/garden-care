import { CartItem, OrderDetails } from '../types';

export const MEERUT_SHOP_PHONE = '+919837012345'; // Business WhatsApp contact for Shabaz Khan

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function buildWhatsAppOrderMessage(
  cart: CartItem[],
  total: number,
  customer?: Partial<OrderDetails>,
  language: 'en' | 'hi' = 'en'
): string {
  if (language === 'hi') {
    let text = `*नया ऑर्डर - गार्डन केयर मेरठ*\n\n`;
    
    if (customer?.customerName) {
      text += `👤 *ग्राहक का नाम:* ${customer.customerName}\n`;
      text += `📞 *फोन नंबर:* ${customer.phone}\n`;
      text += `📍 *पता:* ${customer.address}, ${customer.city} (${customer.pincode || ''})\n`;
      text += `🚚 *डिलीवरी प्रकार:* ${customer.deliveryType === 'pickup' ? 'मेरठ दुकान से पिकअप' : 'घर पर डिलीवरी'}\n`;
      text += `💳 *भुगतान माध्यम:* ${customer.paymentMethod === 'cod' ? 'कैश ऑन डिलीवरी (COD)' : customer.paymentMethod === 'upi' ? 'UPI QR कोड' : 'व्हाट्सएप बातचीत'}\n\n`;
    }

    text += `📦 *ऑर्डर का सामान:*\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n   मात्रा (Qty): ${item.quantity} x ${formatCurrency(item.product.price)} = *${formatCurrency(item.product.price * item.quantity)}*\n`;
    });

    text += `\n💰 *कुल राशि (Total):* *${formatCurrency(total)}*\n`;
    text += `\nनमस्ते शहाबाज़ भाई, कृपया सामान की उपलब्धता और डिलीवरी का समय बताएं। धन्यवाद!`;

    return encodeURIComponent(text);
  }

  let text = `*New Order Request - Garden Care Meerut*\n\n`;
  
  if (customer?.customerName) {
    text += `👤 *Customer:* ${customer.customerName}\n`;
    text += `📞 *Phone:* ${customer.phone}\n`;
    text += `📍 *Delivery Address:* ${customer.address}, ${customer.city} (${customer.pincode || ''})\n`;
    text += `🚚 *Fulfillment:* ${customer.deliveryType === 'pickup' ? 'Self Pickup at Meerut Shop' : 'Doorstep Delivery'}\n`;
    text += `💳 *Payment Mode:* ${customer.paymentMethod?.toUpperCase()}\n\n`;
  }

  text += `📦 *Ordered Items:*\n`;
  cart.forEach((item, index) => {
    text += `${index + 1}. *${item.product.name}*\n   Qty: ${item.quantity} x ${formatCurrency(item.product.price)} = *${formatCurrency(item.product.price * item.quantity)}*\n`;
  });

  text += `\n💰 *Total Order Amount:* *${formatCurrency(total)}*\n`;
  text += `\nHello Shabaz Bhai, please confirm stock availability and dispatch time. Thank you!`;

  return encodeURIComponent(text);
}

export function buildWhatsAppEnquiryMessage(
  name: string,
  phone: string,
  topic: string,
  message: string,
  quantity?: string,
  city?: string,
  language: 'en' | 'hi' = 'en'
): string {
  if (language === 'hi') {
    let text = `*व्यापारिक पूछताछ - गार्डन केयर मेरठ*\n\n`;
    text += `👤 *नाम:* ${name}\n`;
    text += `📞 *संपर्क:* ${phone}\n`;
    if (city) text += `📍 *शहर:* ${city}\n`;
    text += `🏷️ *सामान की श्रेणी:* ${topic}\n`;
    if (quantity) text += `🔢 *अनुमानित मात्रा:* ${quantity}\n`;
    text += `\n💬 *विवरण / मैसेज:*\n"${message}"\n\n`;
    text += `गार्डन केयर वेबसाइट से भेजा गया। आपसे बात करने की प्रतीक्षा रहेगी।`;

    return encodeURIComponent(text);
  }

  let text = `*Business Enquiry - Garden Care Meerut*\n\n`;
  text += `👤 *Name:* ${name}\n`;
  text += `📞 *Contact:* ${phone}\n`;
  if (city) text += `📍 *City:* ${city}\n`;
  text += `🏷️ *Category Interest:* ${topic}\n`;
  if (quantity) text += `🔢 *Quantity/Requirement:* ${quantity}\n`;
  text += `\n💬 *Details/Message:*\n"${message}"\n\n`;
  text += `Sent from Garden Care Website. Looking forward to your call.`;

  return encodeURIComponent(text);
}

