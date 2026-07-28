import { Product, CustomerReview } from '../types';

export const PRODUCTS: Product[] = [
  // LAWN MOWERS
  {
    id: 'lm-01',
    name: 'Garden Care Heavy-Duty Electric Lawn Mower 1800W',
    category: 'lawn-mowers',
    price: 14499,
    originalPrice: 17999,
    rating: 4.9,
    reviewsCount: 84,
    badge: 'Made in Meerut',
    inStock: true,
    description: 'Custom manufactured in Meerut for tough Indian grass types like Bermuda and Selection No.1. Powered by a high-torque 1800W pure copper motor with 5 adjustable cutting height levels and a 45L grass box.',
    specs: {
      'Motor Power': '1800 Watt Pure Copper',
      'Cutting Width': '16 Inches (40 cm)',
      'Grass Bag Capacity': '45 Litres',
      'Height Adjustments': '5 Level Centralized (20mm - 70mm)',
      'Blade Material': 'High-Carbon Hardened Steel',
      'Warranty': '2 Years Manufacturer Warranty'
    },
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&w=800&q=80',
    material: 'Reinforced Steel & High-Impact Polymer',
    dimensions: '120 cm x 45 cm x 95 cm',
    features: [
      'Engineered in Meerut workshop with heavy-duty copper motor',
      'Foldable handle bar for compact storage in home garages',
      'Safety brake system stops blade within 1.5 seconds',
      'Includes spare high-carbon replacement blade set'
    ]
  },
  {
    id: 'lm-02',
    name: 'Classic Manual Push Cylinder Reel Mower (16-Inch)',
    category: 'lawn-mowers',
    price: 4899,
    originalPrice: 5999,
    rating: 4.8,
    reviewsCount: 112,
    badge: "Father's Classic",
    inStock: true,
    description: 'Our iconic model originally designed by our founder in 1976. Zero electricity, silent operation, and ultra-sharp heat-treated blades that slice grass like scissors for a healthier, greener lawn.',
    specs: {
      'Cutting Width': '16 Inches',
      'Blade Count': '5 Heat-Treated Alloy Steel Blades',
      'Wheel Type': '10-inch All-Terrain Rubber Tread Wheels',
      'Height Range': '12mm to 45mm',
      'Weight': '11.5 kg'
    },
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    material: 'Alloy Steel & Cast Iron Frame',
    dimensions: '110 cm x 42 cm x 85 cm',
    features: [
      'Eco-friendly zero electricity operation',
      'Heavy-duty cast iron body built to last decades',
      'Free blade sharpening key & lubrication lubricant kit included',
      'Ideal for home gardens, villa lawns, and sports turfs'
    ]
  },
  {
    id: 'lm-03',
    name: 'Garden Care 4HP Petrol Lawn Mower (Self-Propelled)',
    category: 'lawn-mowers',
    price: 23999,
    originalPrice: 27999,
    rating: 4.9,
    reviewsCount: 39,
    badge: 'Best Seller',
    inStock: true,
    description: 'Heavy-duty 4-Stroke 139cc OHV petrol engine lawn mower for large farmhouses, wedding grounds, and institutional parks across UP & Delhi NCR. Powerful self-propelled drive handles incline lawns effortlessly.',
    specs: {
      'Engine Type': '4-Stroke OHV Single Cylinder (139cc)',
      'Power Output': '4.0 HP @ 3000 RPM',
      'Cutting Width': '20 Inches (50 cm)',
      'Drive System': 'Self-Propelled Rear Wheel Drive',
      'Grass Collector': '60L Hybrid Fabric & Hard Top Bag'
    },
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
    material: 'Heavy-Gauge Steel Deck',
    dimensions: '140 cm x 55 cm x 105 cm',
    features: [
      'Self-propelled rear drive reduces operator effort on big lawns',
      '3-in-1 discharge: Mulching, Side Discharge & Rear Catching',
      'Includes complimentary 1L 4T Engine Oil & Spark Plug',
      'Direct doorstep service & spare parts supply guaranteed by Shabaz Khan'
    ]
  },
  {
    id: 'lm-04',
    name: 'Handheld Petrol Brush Cutter & Weed Trimmer 52cc',
    category: 'lawn-mowers',
    price: 9499,
    originalPrice: 11999,
    rating: 4.7,
    reviewsCount: 56,
    badge: 'Bulk Discount',
    inStock: true,
    description: 'Versatile 2-stroke 52cc multipurpose brush cutter for clearing tough weeds, thick grass, crop harvesting, and lawn edging. Includes 3-Tooth blade, tap-and-go nylon trimmer head, and shoulder harness.',
    specs: {
      'Displacement': '52cc 2-Stroke Air-Cooled Engine',
      'Fuel Tank': '1.2 Litres (Petrol + 2T Oil mix)',
      'Attachments Included': '3T Metal Blade, Tap-N-Go Nylon Head, Paddy Weeder Wheel',
      'Harness': 'Padded Dual Shoulder Harness'
    },
    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80',
    material: 'Alloy Shaft & Hardened Steel Blades',
    dimensions: '180 cm length',
    features: [
      'Includes agricultural grass harvesting guard attachment',
      'Vibration reduction anti-shock handle frame',
      'Easy recoil starter with electronic ignition'
    ]
  },

  // PLANTERS (FIBRE & PVC)
  {
    id: 'pl-01',
    name: 'Luxury Ribbed Fibre Planter Set (Set of 3)',
    category: 'planters',
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Best Seller',
    inStock: true,
    description: 'Ultra-durable, weather-resistant Fibre Reinforced Polymer (FRP) planters inspired by contemporary architectural aesthetics. Lightweight yet shatterproof, ideal for indoor living rooms and outdoor sun patios.',
    specs: {
      'Material': 'High-Grade Fibre Reinforced Polymer (FRP)',
      'Finish': 'Matte Ribbed Textured Finish',
      'Drainage': 'Pre-drilled with mesh filter insert',
      'Set Sizes': 'Large (14")',
      'Weight Capacity': 'Holds up to 25 kg soil mix per planter'
    },
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    material: 'Fibre Reinforced Polymer',
    dimensions: 'Height: 14", 11", 8" inches',
    features: [
      '100% Weatherproof: Will not crack or fade under intense Indian summer heat',
      '70% lighter than ceramic or concrete pots',
      'Includes drainage tray saucers for indoor cleanliness',
      'Available in Off-White, Charcoal Grey, and Terracotta Red'
    ]
  },
  {
    id: 'pl-02',
    name: 'Heavy-Duty UV-Stabilized PVC Planters (Pack of 6)',
    category: 'planters',
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 210,
    badge: 'Bulk Discount',
    inStock: true,
    description: 'Thick-walled virgin PVC pots manufactured for nursery growers, terrace gardens, and residential balconies. Designed with multi-level bottom drainage channels for root aeration.',
    specs: {
      'Pack Size': '6 Pots + 6 Matching Trays',
      'Pot Diameter': '10 Inches (25 cm)',
      'Material Grade': '100% Virgin Virgin UV-Stabilized PVC',
      'Colour Options': 'Classic Brown, Sage Green, Crisp White'
    },
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
    material: 'Virgin Virgin Polypropylene PVC',
    dimensions: '10 inch diameter x 9 inch height',
    features: [
      'UV-coated so colors do not fade under direct sunlight',
      'Flexible impact-resistant walls prevent chipping',
      'Built-in root oxygenation slits at bottom'
    ]
  },
  {
    id: 'pl-03',
    name: 'Minimalist Cylinder Fibre Pot (Tall 18-Inch)',
    category: 'planters',
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 67,
    badge: 'New Launch',
    inStock: true,
    description: 'Sleek floor-standing fibre planter tailored for large statement houseplants like Fiddle Leaf Figs, Areca Palms, and Monstera. Hand-buffed smooth finish crafted in Meerut.',
    specs: {
      'Height': '18 Inches (45 cm)',
      'Top Diameter': '12 Inches (30 cm)',
      'Finish': 'Satin Stone Texture',
      'Indoor/Outdoor': 'Suitable for both'
    },
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80',
    material: 'Fibre Reinforced Polymer',
    dimensions: '18 inch height x 12 inch top dia',
    features: [
      'Elevates home interior decor with premium ceramic-like aesthetics',
      'Completely waterproof inner lining prevents moisture leaking',
      'Custom colors available for bulk office orders'
    ]
  },
  {
    id: 'pl-04',
    name: 'Self-Watering Hydro-Reservoir Balcony Planter Box',
    category: 'planters',
    price: 699,
    originalPrice: 999,
    rating: 4.7,
    reviewsCount: 95,
    inStock: true,
    description: 'Smart rectangular planter box with built-in sub-irrigation water level indicator. Keeps your flowering plants and kitchen herbs hydrated for up to 14 days without manual watering.',
    specs: {
      'Length': '20 Inches (50 cm)',
      'Water Reservoir': '2.5 Litres',
      'Indicator': 'Float-ball water gauge included',
      'Mounting': 'Fits railing brackets or floor placements'
    },
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
    material: 'BPA-Free High Density Polymer',
    dimensions: '50 cm x 19 cm x 17 cm',
    features: [
      'Ideal for busy professionals & vacation trips',
      'Prevents root rot through capillary action soil disk',
      'Includes railing mounting slots'
    ]
  },

  // GARDEN TOOLS & EQUIPMENT
  {
    id: 'gt-01',
    name: 'Garden Care Professional Stainless Hedge Shears (22")',
    category: 'garden-tools',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Made in Meerut',
    inStock: true,
    description: 'Hand-forged carbon steel hedging shears crafted in Meerut. Designed with wavy non-slip blades that grip twigs firmly for clean, razor-sharp hedge shaping and shrub trimming.',
    specs: {
      'Overall Length': '22 Inches (55 cm)',
      'Blade Material': 'High Carbon SK5 Forged Steel',
      'Handle': 'Tension-reducing shock absorbing rubber grip',
      'Adjustable': 'Tension adjustment dial bolt'
    },
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    material: 'High Carbon SK5 Steel & Aluminium Handles',
    dimensions: '55 cm length',
    features: [
      'Precision bevelled edge stays sharp 3x longer than cheap imports',
      'Bumper cushions reduce arm fatigue during extended landscaping',
      'Free blade protective guard cover included'
    ]
  },
  {
    id: 'gt-02',
    name: 'Ergonomic Japanese Bypass Pruning Secateurs',
    category: 'garden-tools',
    price: 649,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 175,
    badge: 'Best Seller',
    inStock: true,
    description: 'Essential hand pruner for cutting rose stems, fruit trees, and deadwood up to 20mm thickness. Spring-loaded handle with thumb lock for quick one-handed pruning.',
    specs: {
      'Cutting Capacity': 'Up to 20mm (3/4 inch) branches',
      'Blade Finish': 'Teflon Non-Stick Anti-Rust Coating',
      'Locking Mechanism': 'One-touch safety thumb latch'
    },
    image: 'https://images.unsplash.com/photo-1599685315640-9ce299f2b846?auto=format&fit=crop&w=800&q=80',
    material: 'Drop-Forged Steel Body',
    dimensions: '20 cm length',
    features: [
      'Sap groove prevents blade sticking during heavy pruning',
      'Includes extra replacement coil spring in package',
      'Non-slip textured vinyl handle grips'
    ]
  },
  {
    id: 'gt-03',
    name: 'Heavy-Duty 14-Tine Steel Lawn & Soil Rake',
    category: 'garden-tools',
    price: 549,
    originalPrice: 750,
    rating: 4.7,
    reviewsCount: 88,
    inStock: true,
    description: 'Sturdy steel rake head forged for leveling soil beds, clearing cut grass debris, and spreading mulch. Comes attached with a solid hardwood handle.',
    specs: {
      'Head Width': '14 Inches (14 Tines)',
      'Handle Length': '5 Feet Hardwood Pole',
      'Coating': 'Powder Coated Rust Prevention'
    },
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=800&q=80',
    material: 'Forged Manganese Steel',
    dimensions: '150 cm length x 35 cm head width',
    features: [
      'Welded steel head will not bend or detach under pressure',
      'Ideal for lawn cleanup after mowing'
    ]
  },
  {
    id: 'gt-04',
    name: 'Complete 5-Piece Stainless Steel Garden Tool Set',
    category: 'garden-tools',
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 104,
    badge: 'Best Seller',
    inStock: true,
    description: 'Premium hand tool kit containing Hand Trowel, Transplanter with depth markings, Cultivator Rake, Hand Weeder, and Pruning Shears neatly packaged in a durable canvas tote bag.',
    specs: {
      'Set Contents': '5 Tools + Heavy Canvas Storage Tote',
      'Head Material': 'Polished Cast Aluminium Alloy (Rust Proof)',
      'Handles': 'Soft TPR Ergonomic Contoured Grips'
    },
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    material: 'Cast Aluminium Alloy & Soft-Grip Rubber',
    dimensions: 'Tool bag size: 30 cm x 20 cm x 25 cm',
    features: [
      'Rust-proof polished aluminium heads never tarnish',
      'Depth scale markings on transplanter trowel for precise bulb planting',
      'Great gift idea for plant lovers and home gardeners'
    ]
  },

  // SPRINKLERS & IRRIGATION
  {
    id: 'sp-01',
    name: 'Automatic 360-Degree Rotating 3-Arm Garden Sprinkler',
    category: 'sprinklers',
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 164,
    badge: 'Best Seller',
    inStock: true,
    description: 'High-efficiency lawn sprinkler with 12 built-in multi-angle spray nozzles. Spins automatically via water pressure to provide even, rain-like coverage up to 30 feet radius.',
    specs: {
      'Coverage Area': 'Up to 3,000 sq ft (30 ft radius at 40 PSI)',
      'Rotation Angle': '360 Degree Continuous Automatic',
      'Nozzles': '12 Adjustable Spray Nozzles (4 on each arm)',
      'Connector': 'Standard Quick Connector & 3/4" Thread'
    },
    image: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80',
    material: 'ABS Polymer & Brass Swivel Joint',
    dimensions: '20 cm x 20 cm x 10 cm',
    features: [
      'Dual water inlets allow linking multiple sprinklers in series',
      'Weighted metal base stabilizes sprinkler on uneven grass',
      'Saves up to 40% water compared to manual hose spraying'
    ]
  },
  {
    id: 'sp-02',
    name: 'Heavy Brass Impact Pulsating Sprinkler on Metal Spike',
    category: 'sprinklers',
    price: 899,
    originalPrice: 1250,
    rating: 4.9,
    reviewsCount: 92,
    badge: 'Made in Meerut',
    inStock: true,
    description: 'Traditional solid brass impact sprinkler mounted on a sturdy zinc spike. Provides full or partial circle coverage for farm lawns, agricultural plots, and sports turfs.',
    specs: {
      'Spray Radius': '20 to 45 feet depending on water pressure',
      'Material': 'Solid Cast Brass Head & Zinc Alloy Spike',
      'Adjustment': 'Friction collars for 20° to 360° sector control'
    },
    image: 'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&w=800&q=80',
    material: 'Solid Heavy Brass & Zinc Alloy',
    dimensions: '30 cm spike length',
    features: [
      'Indestructible brass construction handles high pressure well',
      'Anti-backsplash arm maintains steady rotation speed',
      'Spike anchors firmly into lawn soil or farm beds'
    ]
  },
  {
    id: 'sp-03',
    name: 'Complete Drip Irrigation System Kit (For 30 Plants)',
    category: 'sprinklers',
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 118,
    inStock: true,
    description: 'DIY micro-drip watering kit designed for potted plants, planters, and home garden beds. Delivers slow, direct-to-root irrigation that conserves water and prevents weed growth.',
    specs: {
      'Main Pipe Length': '25 Meters (1/4 inch UV Hose)',
      'Drippers Included': '30 Adjustable Mist & Drip Emitters',
      'Tap Adapter': 'Universal threaded tap connector with filter',
      'Accessories': 'Tee connectors, end plugs, support stakes'
    },
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    material: 'UV-Protected PE Hose & Precision Emitters',
    dimensions: 'Box size: 28 cm x 28 cm x 10 cm',
    features: [
      'Easy 15-minute tool-free installation',
      'Adjustable dripper heads from fine mist to 70L/hour stream',
      'Works seamlessly with tap pressure'
    ]
  },
  {
    id: 'sp-04',
    name: 'Heavy-Duty 3-Layer Braided PVC Hose Pipe (50 Feet)',
    category: 'sprinklers',
    price: 799,
    originalPrice: 1100,
    rating: 4.7,
    reviewsCount: 130,
    inStock: true,
    description: 'Kink-resistant 1/2 inch flexible PVC hose pipe reinforced with high-tenacity polyester yarn mesh. Comes bundled with an 8-pattern spray gun nozzle and tap connectors.',
    specs: {
      'Hose Length': '50 Feet (15 Meters)',
      'Inner Diameter': '1/2 Inch (12.5 mm)',
      'Spray Gun Patterns': '8 Patterns (Jet, Mist, Shower, Cone, Flat, Soaker, Center, Angle)',
      'Burst Pressure': '24 Bar'
    },
    image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=800&q=80',
    material: '3-Layer Reinforced Virgin PVC',
    dimensions: '50 feet length',
    features: [
      'Anti-kink internal mesh prevents water flow blockage',
      'Ergonomic trigger spray gun with brass quick connector',
      'All-weather durable from 0°C to 55°C'
    ]
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    author: 'Sunil Rastogi',
    location: 'Shastri Nagar, Meerut',
    rating: 5,
    date: '12 July 2026',
    comment: 'Buying lawn mowers from Shabaz bhai’s family since 1998! The 1800W electric lawn mower cuts our lawn perfectly in one pass. Prompt service in Meerut.',
    productName: 'Garden Care Heavy-Duty Electric Lawn Mower 1800W',
    verified: true
  },
  {
    id: 'rev-02',
    author: 'Dr. Meenakshi Sharma',
    location: 'Raj Nagar, Ghaziabad',
    rating: 5,
    date: '04 July 2026',
    comment: 'The luxury ribbed fibre planters look so elegant in my clinic waiting lobby. So lightweight compared to stone pots and delivery reached Ghaziabad in 2 days!',
    productName: 'Luxury Ribbed Fibre Planter Set (Set of 3)',
    verified: true
  },
  {
    id: 'rev-03',
    author: 'Chaudhary Rajeshwar Singh',
    location: 'Baghpat Road, Meerut',
    rating: 5,
    date: '28 June 2026',
    comment: 'The 4HP Petrol Lawn Mower is a beast for our farmhouse grounds. Shabaz Khan came personally to demonstrate fuel mix and maintenance tips. Very honest business.',
    productName: 'Garden Care 4HP Petrol Lawn Mower (Self-Propelled)',
    verified: true
  },
  {
    id: 'rev-04',
    author: 'Ananya Verma',
    location: 'Saket, New Delhi',
    rating: 5,
    date: '18 June 2026',
    comment: 'Ordered hedge shears and drip irrigation kit via WhatsApp. Excellent build quality—far superior to cheap plastic tools on big ecommerce sites.',
    productName: 'Garden Care Professional Stainless Hedge Shears (22")',
    verified: true
  }
];
