export interface Product {
  id: string;
  name: string;
  category: 'lawn-mowers' | 'planters' | 'garden-tools' | 'sprinklers';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  description: string;
  specs: Record<string, string>;
  image: string;
  badge?: 'Made in Meerut' | 'Best Seller' | 'Father\'s Classic' | 'New Launch' | 'Bulk Discount';
  inStock: boolean;
  material?: string;
  dimensions?: string;
  features: string[];
}

export interface Category {
  id: string;
  slug: 'lawn-mowers' | 'planters' | 'garden-tools' | 'sprinklers';
  name: string;
  subtitle: string;
  image: string;
  itemCount: number;
  popularItems: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  pincode: string;
  deliveryType: 'pickup' | 'delivery';
  paymentMethod: 'cod' | 'upi' | 'whatsapp';
  notes?: string;
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  email: string;
  category: string;
  quantityNeeded: string;
  city: string;
  message: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verified: boolean;
}
