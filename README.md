# Garden Care Meerut - Web Store & Catalog

**Garden Care Meerut** is a digital store and interactive catalog for a family-owned garden equipment manufacturing and trading shop established in **1976** in Meerut, Uttar Pradesh, India.

Managed by **Shabaz Khan**, the platform connects customers directly with the shop for purchasing lawn mowers (electric, petrol, and manual), Fibre & PVC planters, hedging shears, garden tool kits, and agricultural sprinkler irrigation systems.

---

## 🌟 Key Features

- **🌐 Bilingual Support (Hindi & English):** Instant language switcher allowing seamless browsing in English or Hindi (हिंदी).
- **📦 Interactive Product Catalog:** Search, filter by category (Lawn Mowers, Planters, Garden Tools, Sprinklers), price range slider, and sort by price or popularity.
- **👁️ Quick View Modal:** Detailed view for technical specifications, material grades, features, and tested motor guarantees.
- **🛒 Shopping Cart & Doorstep Checkout:** Add items to cart, calculate subtotal, choose between doorstep delivery or shop pickup in Meerut, and select Cash on Delivery or UPI QR code.
- **📱 Instant WhatsApp Ordering & Enquiries:** One-click WhatsApp message generation pre-formatted with cart items, quantities, totals, and delivery addresses sent directly to Shabaz Khan (`+91 98370 12345`).
- **📋 Custom Business Enquiry Form:** Send custom quotes for bulk orders (nurseries, hotels, farmhouses) or machine repair requests.
- **⭐️ Verified Local Reviews & 1976 Legacy:** Story of the shop's 48+ year history and feedback from verified buyers across Meerut and Delhi NCR.

---

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and npm installed.

### Installation

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Development Server

Start the local dev server on port `3000`:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Building for Production

Compile TypeScript and build static production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📁 Directory Structure

```
├── src/
│   ├── components/       # UI components (Header, Catalog, ProductCard, CartDrawer, etc.)
│   ├── context/          # React Context (LanguageContext for EN/HI translations)
│   ├── data/             # Product catalog & review data
│   ├── utils/            # Currency formatters & WhatsApp order message builders
│   ├── types.ts          # TypeScript interfaces for products, cart, and orders
│   ├── App.tsx           # Main application shell
│   ├── main.tsx          # Application entry point with LanguageProvider
│   └── index.css         # Global CSS with Tailwind CSS v4 import
├── package.json          # Project dependencies and scripts
├── metadata.json         # Platform metadata
└── README.md             # Project documentation
```

---

## 📞 Shop Contact & Location

- **Owner/Operator:** Shabaz Khan
- **Phone / WhatsApp:** +91 98370 12345
- **Address:** Garden Care, Main Market, Near Railway Station / Bus Stand Road, Meerut, Uttar Pradesh - 250001
- **Timings:** Monday - Saturday: 9:00 AM – 8:30 PM IST
