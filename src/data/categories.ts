import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-01',
    slug: 'lawn-mowers',
    name: 'Lawn Mowers & Grass Cutters',
    subtitle: 'Electric, Petrol & Heavy-Duty Manual Reel Mowers',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&w=600&q=80',
    itemCount: 4,
    popularItems: ['1800W Electric Mower', 'Classic Manual Cylinder', '4HP Petrol Mower', '52cc Brush Cutter']
  },
  {
    id: 'cat-02',
    slug: 'planters',
    name: 'Fibre & PVC Planters',
    subtitle: 'Lightweight Fibre, UV-Protected PVC & Self-Watering Pots',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    itemCount: 4,
    popularItems: ['Luxury Ribbed Fibre Set', '18" Tall Cylinder Pot', 'UV PVC 10" Pots', 'Self-Watering Box']
  },
  {
    id: 'cat-03',
    slug: 'garden-tools',
    name: 'Garden Tools & Pruners',
    subtitle: 'Hand-Forged Shears, Pruners, Rakes & 5-Piece Tool Kits',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
    itemCount: 4,
    popularItems: ['22" Stainless Hedge Shears', 'Bypass Secateurs', '14-Tine Soil Rake', '5-Piece Tool Tote Kit']
  },
  {
    id: 'cat-04',
    slug: 'sprinklers',
    name: 'Sprinklers & Irrigation',
    subtitle: '360° Rotating Sprinklers, Brass Impact Heads & Drip Kits',
    image: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=600&q=80',
    itemCount: 4,
    popularItems: ['360° Rotating Sprinkler', 'Brass Impact Spike', '30-Plant Drip Kit', '50ft Braided Hose']
  }
];
