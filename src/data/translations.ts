export type Language = 'en' | 'hi';

export interface TranslationStrings {
  // Top bar
  topBarText: string;
  callDirectly: string;
  
  // Header & Nav
  home: string;
  lawnMowers: string;
  planters: string;
  gardenTools: string;
  sprinklers: string;
  bulkEnquiry: string;
  ourStory: string;
  cart: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  shopNow: string;
  quickWhatsApp: string;
  trustedSince: string;
  
  // Audience Badges
  villasAndHomes: string;
  armyAndGovt: string;
  ashramsAndInstitutions: string;
  farmhouses: string;
  
  // Customer Diversity Section
  forEveryoneTitle: string;
  forEveryoneSubtitle: string;
  
  // Product Badges & Labels
  madeInMeerut: string;
  bestSeller: string;
  fathersClassic: string;
  newLaunch: string;
  bulkDiscount: string;
  inStock: string;
  addToCart: string;
  addedToCart: string;
  orderOnWhatsApp: string;
  viewDetails: string;
  specs: string;
  keyFeatures: string;
  price: string;
  save: string;
  
  // Filter & Search
  allCategories: string;
  searchPlaceholder: string;
  sortBy: string;
  priceLowToHigh: string;
  priceHighToLow: string;
  topRated: string;
  
  // Cart Drawer
  yourCart: string;
  cartEmpty: string;
  total: string;
  proceedToCheckout: string;
  deliveryChargeNote: string;
  
  // Checkout Modal
  checkoutTitle: string;
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  cityArea: string;
  pincode: string;
  deliveryOption: string;
  homeDelivery: string;
  workshopPickup: string;
  paymentMethod: string;
  cashOnDelivery: string;
  upiQrCode: string;
  specialNotes: string;
  placeOrderViaWhatsApp: string;
  
  // Quick Enquiry Form
  bulkFormTitle: string;
  bulkFormSubtitle: string;
  yourName: string;
  contactNumber: string;
  emailAddress: string;
  selectCategory: string;
  quantityNeeded: string;
  locationCity: string;
  requirementDetails: string;
  sendEnquiryWhatsApp: string;
  
  // Owner Note & Contact
  ownerName: string;
  ownerTitle: string;
  workshopAddress: string;
  contactShabazDirectly: string;
  
  // Language Selector
  switchLanguage: string;
  english: string;
  hindi: string;
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    topBarText: "📍 Direct from Meerut Workshop | Fast Doorstep Delivery & UPI QR Support | Call / WhatsApp: +91 98970 00000",
    callDirectly: "Call Shabaz Khan",
    
    home: "Home",
    lawnMowers: "Lawn Mowers",
    planters: "Fibre Planters",
    gardenTools: "Garden Tools",
    sprinklers: "Sprinklers & Hose",
    bulkEnquiry: "Bulk / Govt Orders",
    ourStory: "Our 1976 Legacy",
    cart: "Cart",
    
    heroTitle: "Meerut's Trusted Garden Care & Lawn Mower Equipment",
    heroSubtitle: "Handcrafted heavy-duty lawn mowers, luxury fibre planters, and durable garden tools made for homes, villas, army messes, ashrams, and farmhouses.",
    shopNow: "Explore Products",
    quickWhatsApp: "Chat on WhatsApp",
    trustedSince: "Trusted in Meerut Since 1976",
    
    villasAndHomes: "🏡 Private Villas & Homes",
    armyAndGovt: "🪖 Army Mess & Govt Depts",
    ashramsAndInstitutions: "🛕 Ashrams & Schools",
    farmhouses: "🌳 Farmhouses & Lawns",
    
    forEveryoneTitle: "Built For Every Lawn & Every Customer in NCR",
    forEveryoneSubtitle: "Whether you have a small balcony garden or manage a 5-acre army ground, Shabaz Khan provides expert guidance in simple Hindi & English.",
    
    madeInMeerut: "Made in Meerut",
    bestSeller: "Best Seller",
    fathersClassic: "Father's 1976 Classic",
    newLaunch: "New Launch",
    bulkDiscount: "Bulk Discount",
    inStock: "In Stock (Ready in Meerut)",
    addToCart: "Add to Cart",
    addedToCart: "Added to Cart ✓",
    orderOnWhatsApp: "Order via WhatsApp",
    viewDetails: "View Details",
    specs: "Technical Specs",
    keyFeatures: "Key Features",
    price: "Price",
    save: "Save",
    
    allCategories: "All Products",
    searchPlaceholder: "Search mowers, planters, shears...",
    sortBy: "Sort By",
    priceLowToHigh: "Price: Low to High",
    priceHighToLow: "Price: High to Low",
    topRated: "Top Rated",
    
    yourCart: "Your Shopping Cart",
    cartEmpty: "Your cart is currently empty. Explore our Meerut products!",
    total: "Total Amount",
    proceedToCheckout: "Proceed to Quick Order",
    deliveryChargeNote: "Free local delivery across Meerut. Cash on Delivery & UPI Available.",
    
    checkoutTitle: "Quick Order via WhatsApp / Cash on Delivery",
    fullName: "Your Full Name",
    phoneNumber: "Mobile / WhatsApp Number",
    fullAddress: "Complete Delivery Address",
    cityArea: "City / Area (e.g., Meerut, Ghaziabad, Delhi)",
    pincode: "Pincode (Optional)",
    deliveryOption: "How would you like to receive your items?",
    homeDelivery: "🚚 Home / Doorstep Delivery",
    workshopPickup: "🏬 Pickup from Shabaz Workshop (Meerut)",
    paymentMethod: "Payment Method",
    cashOnDelivery: "💵 Cash on Delivery (COD)",
    upiQrCode: "📲 Scan UPI QR Code on Delivery",
    specialNotes: "Any Special Instructions (Optional)",
    placeOrderViaWhatsApp: "Send Order to Shabaz on WhatsApp",
    
    bulkFormTitle: "Bulk & Institutional Order Requirement",
    bulkFormSubtitle: "Special rates for Army bases, Govt institutions, Ashrams, and Garden Contractors.",
    yourName: "Your Name / Organization",
    contactNumber: "Phone / WhatsApp Number",
    emailAddress: "Email Address (Optional)",
    selectCategory: "Select Product Category",
    quantityNeeded: "Estimated Quantity Needed",
    locationCity: "Your Location / City",
    requirementDetails: "Describe your requirement or custom size",
    sendEnquiryWhatsApp: "Submit Enquiry via WhatsApp",
    
    ownerName: "Shabaz Khan",
    ownerTitle: "Proprietor & Master Technician",
    workshopAddress: "Garden Care Works, Opp. Victoria Park, Delhi Road, Meerut, UP",
    contactShabazDirectly: "Direct Call / WhatsApp: +91 98970 00000",
    
    switchLanguage: "Language / भाषा",
    english: "English",
    hindi: "हिंदी"
  },
  hi: {
    topBarText: "📍 सीधे मेरठ कारखाने से | घर पर डिलीवरी व UPI स्कैनर उपलब्ध | कॉल/व्हाट्सएप: +91 98970 00000",
    callDirectly: "शहाबाज़ खान से बात करें",
    
    home: "मुख्य पृष्ठ (Home)",
    lawnMowers: "लॉन मूवर (घास मशीन)",
    planters: "फाइबर गमले (Planters)",
    gardenTools: "गार्डन औजार (Tools)",
    sprinklers: "फव्वारे / सिंचाई (Sprinklers)",
    bulkEnquiry: "बल्क / संस्थागत ऑर्डर",
    ourStory: "हमारी 1976 की पहचान",
    cart: "आपकी कार्ट",
    
    heroTitle: "मेरठ की प्रसिद्ध गार्डन केयर व लॉन मूवर दुकान",
    heroSubtitle: "मेरठ कारखाने में निर्मित मजबूत लॉन मूवर, आकर्षक फाइबर गमले और टिकाऊ औजार — घर, कोठी, सेना कैंप, आश्रम और फार्महाउस के लिए।",
    shopNow: "सामान देखें",
    quickWhatsApp: "व्हाट्सएप पर बात करें",
    trustedSince: "1976 से मेरठ में विश्वास का नाम",
    
    villasAndHomes: "🏡 छोटे घर एवं बड़ी कोठियां",
    armyAndGovt: "🪖 सेना एवं सरकारी विभाग",
    ashramsAndInstitutions: "🛕 आश्रम, मंदिर एवं स्कूल",
    farmhouses: "🌳 फार्महाउस एवं बड़े लॉन",
    
    forEveryoneTitle: "हर ग्राहक और हर लॉन के लिए आसान भाषा में सामान",
    forEveryoneSubtitle: "चाहे आपकी छोटी सी बालकनी हो या 5 एकड़ का आर्मी ग्राउंड — शहाबाज़ खान आपको हिंदी और सरल भाषा में सही सामान देंगे।",
    
    madeInMeerut: "मेरठ में निर्मित",
    bestSeller: "सबसे ज्यादा बिकने वाला",
    fathersClassic: "1976 का क्लासिक मॉडल",
    newLaunch: "नया मॉडल",
    bulkDiscount: "बल्क डिस्काउंट",
    inStock: "स्टॉक में उपलब्ध (मेरठ)",
    addToCart: "कार्ट में जोड़ें",
    addedToCart: "कार्ट में जुड़ा ✓",
    orderOnWhatsApp: "व्हाट्सएप पर ऑर्डर करें",
    viewDetails: "पूरा विवरण देखें",
    specs: "तकनीकी विवरण",
    keyFeatures: "मुख्य विशेषताएं",
    price: "मूल्य",
    save: "बचत",
    
    allCategories: "सभी सामान",
    searchPlaceholder: "लॉन मूवर, गमले, कैंची खोजें...",
    sortBy: "क्रमबद्ध करें",
    priceLowToHigh: "कीमत: कम से ज्यादा",
    priceHighToLow: "कीमत: ज्यादा से कम",
    topRated: "बेस्ट रेटिंग",
    
    yourCart: "आपकी शॉपिंग कार्ट",
    cartEmpty: "आपकी कार्ट अभी खाली है। मेरठ में बने हमारे सामान देखें!",
    total: "कुल राशि",
    proceedToCheckout: "ऑर्डर करने के लिए आगे बढ़ें",
    deliveryChargeNote: "मेरठ में मुफ्त डिलीवरी। कैश ऑन डिलीवरी और UPI उपलब्ध।",
    
    checkoutTitle: "व्हाट्सएप / नकद भुगतान द्वारा आसान ऑर्डर",
    fullName: "आपका पूरा नाम",
    phoneNumber: "मोबाइल / व्हाट्सएप नंबर",
    fullAddress: "पूरा पता",
    cityArea: "शहर / इलाका (जैसे: मेरठ, गाजियाबाद, दिल्ली)",
    pincode: "पिनकोड (ऐच्छिक)",
    deliveryOption: "आप सामान कैसे लेना चाहते हैं?",
    homeDelivery: "🚚 घर पर डिलीवरी (Home Delivery)",
    workshopPickup: "🏬 मेरठ वर्कशॉप से खुद लें (Pickup)",
    paymentMethod: "भुगतान का प्रकार",
    cashOnDelivery: "💵 सामान मिलने पर नकद (Cash on Delivery)",
    upiQrCode: "📲 स्कैन करके UPI से दें (UPI QR Code)",
    specialNotes: "कोई खास बात या निर्देश (ऐच्छिक)",
    placeOrderViaWhatsApp: "शहाबाज़ भाई को व्हाट्सएप पर ऑर्डर भेजें",
    
    bulkFormTitle: "बल्क एवं संस्थागत ऑर्डर पूछताछ",
    bulkFormSubtitle: "सेना कैंप, सरकारी संस्थानों, आश्रमों एवं ठेकेदारों के लिए विशेष छूट।",
    yourName: "आपका नाम या संस्था",
    contactNumber: "फोन / व्हाट्सएप नंबर",
    emailAddress: "ईमेल (ऐच्छिक)",
    selectCategory: "सामान की श्रेणी चुनें",
    quantityNeeded: "अनुमानित मात्रा (Quantity)",
    locationCity: "आपका शहर या स्थान",
    requirementDetails: "अपनी जरूरत या साइज विस्तार से लिखें",
    sendEnquiryWhatsApp: "व्हाट्सएप पर पूछताछ भेजें",
    
    ownerName: "शहाबाज़ खान",
    ownerTitle: "मालिक एवं मुख्य कारीगर",
    workshopAddress: "गार्डन केयर वर्कशॉप, विक्टोरिया पार्क के सामने, दिल्ली रोड, मेरठ, उत्तर प्रदेश",
    contactShabazDirectly: "डायरेक्ट कॉल / व्हाट्सएप: +91 98970 00000",
    
    switchLanguage: "भाषा / Language",
    english: "English",
    hindi: "हिंदी"
  }
};

// Hindi translations for product catalog
export const PRODUCT_TRANSLATIONS_HI: Record<string, {
  name: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  badge?: string;
}> = {
  'lm-01': {
    name: 'गार्डन केयर हैवी-ड्यूटी इलेक्ट्रिक लॉन मूवर 1800W',
    description: 'भारतीय मजबूत दूब घास काटने के लिए मेरठ कारखाने में विशेष रूप से तैयार। 1800W तांबे की मोटर, 5 कटाई की ऊंचाई लेवल और 45 लीटर घास बैग के साथ।',
    badge: 'मेरठ में निर्मित',
    features: [
      'मेरठ वर्कशॉप में शुद्ध कॉपर मोटर से निर्मित',
      'घर में आसानी से रखने के लिए फोल्डेबल हैंडल',
      'सुरक्षा ब्रेक - 1.5 सेकंड में ब्लेड रुक जाता है',
      'साथ में एक अतिरिक्त हाई-कार्बन ब्लेड फ्री'
    ],
    specs: {
      'मोटर पावर': '1800 वाट शुद्ध तांबा (Pure Copper)',
      'कटाई की चौड़ाई': '16 इंच (40 सेमी)',
      'घास बैग क्षमता': '45 लीटर',
      'ऊंचाई एडजस्टमेंट': '5 लेवल (20मिमी - 70मिमी)',
      'वारंटी': '2 साल की निर्माता वारंटी'
    }
  },
  'lm-02': {
    name: 'क्लासिक मैनुअल पुश सिलेंडर लॉन मूवर (16-इंच)',
    description: '1976 में हमारे संस्थापक (शहाबाज़ भाई के पिताजी) द्वारा बनाया गया प्रसिद्ध बिना बिजली वाला मॉडल। शांत, धारदार और मजबूत स्टील ब्लेड।',
    badge: '1976 का क्लासिक मॉडल',
    features: [
      'जीरो बिजली - पर्यावरण अनुकूल और शांत',
      'मजबूत ढलवां लोहा (Cast Iron) बॉडी - दशकों तक चलने वाला',
      'मुफ्त ब्लेड शार्पनिंग चाबी और तेल किट साथ में',
      'घर के बगीचे, कोठी और छोटे लॉन के लिए एकदम सही'
    ],
    specs: {
      'कटाई की चौड़ाई': '16 इंच',
      'ब्लेड संख्या': '5 हीट-ट्रीटेड एलॉय स्टील ब्लेड',
      'पहिए': '10 इंच रबर ग्रिप व्हील',
      'वजन': '11.5 किग्रा'
    }
  },
  'lm-03': {
    name: 'गार्डन केयर 4HP पेट्रोल लॉन मूवर (स्वचालित चालित)',
    description: 'बड़े फार्महाउस, मैरिज गार्डन और आर्मी ग्राउंड के लिए 4-स्ट्रोक 139cc पेट्रोल इंजन लॉन मूवर। सेल्फ-प्रोपेल्ड ड्राइव से ढलान पर भी बिना जोर लगाए चलता है।',
    badge: 'सबसे ज्यादा बिकने वाला',
    features: [
      'स्वचालित ड्राइव - बड़े मैदानों में खींचने की मेहनत नहीं',
      '3-इन-1: घास कटाई, साइड डिस्चार्ज और पिछला बैग',
      'मुफ्त 1 लीटर इंजन ऑयल और स्पार्क प्लग',
      'शहाबाज़ खान द्वारा डायरेक्ट डोरस्टेप सर्विस और स्पेयर पार्ट्स की गारंटी'
    ],
    specs: {
      'इंजन प्रकार': '4-स्ट्रोक OHV सिंगल सिलेंडर (139cc)',
      'पावर आउटपुट': '4.0 HP',
      'कटाई की चौड़ाई': '20 इंच (50 सेमी)',
      'ड्राइव सिस्टम': 'सेल्फ-प्रोपेल्ड (Self-Propelled)'
    }
  },
  'lm-04': {
    name: 'पेट्रोल ब्रश कटर व घास ट्रिमर 52cc',
    description: 'झाड़ियों, गाजर घास, फसल कटाई और लॉन के किनारों को साफ करने वाला 52cc पेट्रोल ब्रश कटर। साथ में 3-दांत ब्लेड और नायलॉन ट्रिमर।',
    badge: 'बल्क डिस्काउंट',
    features: [
      'फसल और घास काटने वाला सुरक्षा गार्ड शामिल',
      'एंटी-शॉक वाइब्रेशन कंट्रोल हैंडल',
      'आसान रिकॉइल स्टार्टर'
    ],
    specs: {
      'इंजन': '52cc 2-स्ट्रोक एयर-कूल्ड',
      'ईंधन टैंक': '1.2 लीटर (पेट्रोल + 2T ऑयल)',
      'अटैचमेंट': '3T मेटल ब्लेड, नायलॉन ट्रिमर हेड'
    }
  },
  'pl-01': {
    name: 'लक्जरी रिब्ड फाइबर गमला सेट (3 का सेट)',
    description: 'गर्मी और बारिश में न टूटने वाले प्रीमियम फाइबर ग्लास (FRP) गमले। हल्के, मजबूत और घर के ड्राइंग रूम या गार्डन के लिए बहुत सुंदर।',
    badge: 'सबसे ज्यादा बिकने वाला',
    features: [
      '100% ऑल-वेदर: धूप या पानी में रंग नहीं उड़ता',
      'मिट्टी या सीमेंट के गमलों से 70% हल्के',
      'साथ में जल निकासी प्लेट (Trays) मुफ़्त',
      'ऑफ-व्हाइट, डार्क ग्रे और टेराकोटा रंग में उपलब्ध'
    ],
    specs: {
      'सामग्री': 'हाई-ग्रेड फाइबर रीइन्फोर्स्ड पॉलिमर (FRP)',
      'साइज सेट': 'बड़ा (14"), मध्यम (11"), छोटा (8")',
      'ड्रैनेज': 'नीचे छेद और जाली लगी हुई'
    }
  },
  'pl-02': {
    name: 'मजबूत UV-स्टेबलाइज्ड PVC गमले (6 का पैक)',
    description: 'बालकनी, छत और नर्सरी के लिए मोटे प्लास्टिक PVC गमले। तेज धूप में क्रैक नहीं होते और जड़ों की हवा के लिए ड्रेनेज सिस्टम युक्त।',
    badge: 'बल्क डिस्काउंट',
    features: [
      'UV कोटिंग - तेज धूप में भी रंग नहीं फीका पड़ता',
      'लचीली और मजबूत दीवारें जो गिरने पर नहीं टूटतीं',
      'नीचे हवा और पानी निकलने के कई छेद'
    ],
    specs: {
      'पैक मात्रा': '6 गमले + 6 प्लेट',
      'व्यास': '10 इंच (25 सेमी)',
      'रंग विकल्प': 'ब्राउन, हरा, सफेद'
    }
  },
  'pl-03': {
    name: 'सिलेंडर फाइबर पॉट (लंबा 18-इंच)',
    description: 'घर के अंदर अरेका पाम, मॉन्स्टेरा और बड़े पौधों के लिए लंबा फाइबर गमला। मेरठ में हाथ से फिनिश किया गया प्रीमियम लुक।',
    badge: 'नया मॉडल',
    features: [
      'घर के इंटीरियर को दे लग्जरी लुक',
      'अंदर से वॉटरप्रूफ - फर्श पर नमी नहीं आती',
      'ऑफिस और संस्थान के लिए कस्टम रंग भी उपलब्ध'
    ],
    specs: {
      'ऊंचाई': '18 इंच (45 सेमी)',
      'ऊपरी व्यास': '12 इंच (30 सेमी)',
      'फिनिश': 'सैटिन स्टोन टेक्सचर'
    }
  },
  'pl-04': {
    name: 'सेल्फ-वॉटरिंग आयताकार बालकनी गमला',
    description: 'स्वचालित पानी देने वाला गमला। इसमें नीचे पानी भरा रहता है जो पौधों को 14 दिनों तक तरोताजा रखता है। सफर पर जाने वालों के लिए बेस्ट।',
    features: [
      'व्यस्त लोगों और छुट्टी पर जाने वालों के लिए उत्तम',
      'पानी का लेवल बताने वाला मीटर लगा हुआ है',
      'बालकनी की ग्रिल पर टांगने के लिए स्लॉट'
    ],
    specs: {
      'लंबाई': '20 इंच (50 सेमी)',
      'वाटर टैंक': '2.5 लीटर क्षमता'
    }
  },
  'gt-01': {
    name: 'गार्डन केयर प्रोफेशनल स्टील हेज शियर्स (22")',
    description: 'झाड़ियों और मेहंदी बाड़ की छंटाई के लिए मेरठ में हाथ से बनी कार्बन स्टील कैंची। लहरदार ब्लेड टहनियों को सरकने नहीं देते।',
    badge: 'मेरठ में निर्मित',
    features: [
      'मेरठ की प्रसिद्ध फोर्जिंग - आम कैंची से 3 गुना ज्यादा धार',
      'हाथों पर झटके कम करने के लिए शॉक एब्जॉर्बर रबर',
      'साथ में ब्लेड कवर फ्री'
    ],
    specs: {
      'कुल लंबाई': '22 इंच (55 सेमी)',
      'ब्लेड मटेरियल': 'हाई कार्बन SK5 फोर्ज्ड स्टील',
      'हैंडल': 'एल्युमिनियम विथ रबर ग्रिप'
    }
  },
  'gt-02': {
    name: 'जापानी स्टाइल बाईपास प्रूनिंग कटर (पौधों की कैंची)',
    description: 'गुलाब के तने, फलदार पेड़ों की टहनियों और सूखी डालियों को काटने की मजबूत कैंची। एक हाथ से आसानी से लॉक/अनलॉक होती है।',
    badge: 'सबसे ज्यादा बिकने वाला',
    features: [
      'चिपचिपे गोंद को रोकने वाला सैप ग्रूवर',
      'पैकेट में एक एक्स्ट्रा स्पेयर स्प्रिंग मुफ्त',
      'एंटी-स्लिप ग्रिप'
    ],
    specs: {
      'कटाई क्षमता': '20 मिमी (3/4 इंच) मोटी टहनी',
      'कोटिंग': 'टेफ्लॉन एंटी-रस्ट कोटिंग'
    }
  },
  'gt-03': {
    name: 'हैवी-ड्यूटी 14-दांत स्टील लॉन व मिट्टी रेक (पंजा)',
    description: 'घास की सफाई, मिट्टी समतल करने और सूखी पत्तियों को इकट्ठा करने के लिए मजबूत 14 दांत वाला लोहे का पंजा लकड़ी के लंबे डंडे के साथ।',
    features: [
      'मजबूत वेल्डेड स्टील हेड जो कभी नहीं मुड़ता',
      'लॉन कटाई के बाद सफाई के लिए बेहतरीन'
    ],
    specs: {
      'चौड़ाई': '14 इंच (14 दांत)',
      'हैंडल': '5 फीट मजबूत लकड़ी का डंडा'
    }
  },
  'gt-04': {
    name: '5-पीस स्टेनलेस स्टील गार्डन टूल किट (बैग के साथ)',
    description: 'पौधे लगाने और गोड़ाई के लिए 5 औजार - खुरपी, ट्रान्सप्लांटर, पंजा, खरपतवार निकालने वाला और कैंची, मजबूत कैनवास बैग में।',
    badge: 'सबसे ज्यादा बिकने वाला',
    features: [
      'जंग न लगने वाले कास्ट एल्युमिनियम हेड',
      'गहराई नापने के निशान - बल्ब लगाने में आसान',
      'बागवानी के शौकीनों के लिए बेहतरीन तोहफा'
    ],
    specs: {
      'सेट में': '5 औजार + कैनवास स्टोरेज बैग',
      'हैंडल': 'सॉफ्ट-ग्रिप रबर'
    }
  },
  'sp-01': {
    name: '360-डिग्री घूमने वाला 3-आर्म ऑटोमैटिक गार्डन फव्वारा',
    description: 'पानी के दबाव से अपने आप 360 डिग्री घूमने वाला फव्वारा। 12 नोजल से पूरे लॉन में बारिश की तरह पानी का छिड़काव करता है।',
    badge: 'सबसे ज्यादा बिकने वाला',
    features: [
      'एक साथ 2-3 फव्वारे जोड़ने के लिए डुअल इनलेट',
      'भारी बेस जो घास पर हिलता नहीं है',
      'पाइप से सीधे पानी देने की तुलना में 40% पानी की बचत'
    ],
    specs: {
      'छिड़काव क्षेत्र': '30 फीट त्रिज्या (Radius)',
      'घूमने का कोण': '360 डिग्री निरंतर ऑटोमैटिक'
    }
  },
  'sp-02': {
    name: 'पीतल इम्पैक्ट इरिगेशन फव्वारा (लोहे की खूंटी पर)',
    description: 'मेरठ वर्कशॉप में सेट किया गया पीतल का भारी इम्पैक्ट फव्वारा। फार्महाउस, पार्क और बड़े मैदानों में दूर तक पानी फेंकने के लिए उपयुक्त।',
    badge: 'मेरठ में निर्मित',
    features: [
      'कभी खराब न होने वाली भारी पीतल (Brass) बॉडी',
      '20 डिग्री से 360 डिग्री तक छिड़काव सेट करने की सुविधा',
      'जमीन में मजबूती से गड़ने वाली खूंटी'
    ],
    specs: {
      'छिड़काव दूरी': '20 से 45 फीट',
      'सामग्री': 'ठोस पीतल हेड व जिंक अलॉय स्पाइक'
    }
  },
  'sp-03': {
    name: '30 पौधों के लिए ड्रिप इरिगेशन सिंचाई किट',
    description: 'गमलों और क्यारियों के लिए ड्रिप सिंचाई किट। जड़ों में सीधे बूंद-बूंद पानी देकर पानी की बचत करता है और पौधे स्वस्थ रखता है।',
    features: [
      '15 मिनट में बिना किसी औजार के खुद लगाएं',
      'हर बूंद नोजल को एडजस्ट करने की सुविधा',
      'घर के नल के प्रेशर पर आसानी से काम करता है'
    ],
    specs: {
      'पाइप लंबाई': '25 मीटर (1/4 इंच UV होस)',
      'ड्रिपर संख्या': '30 एडजस्टेबल नोजल'
    }
  },
  'sp-04': {
    name: '3-लेयर ब्रेडेड PVC वाटर होस पाइप (50 फीट) + 8-वे गन',
    description: 'न मुड़ने वाला 50 फीट लंबा मजबूत गार्डन पाइप, साथ में 8 तरह की बौछार करने वाली स्प्रे गन और नल कनेक्टर मुफ़्त।',
    features: [
      'अंदरूनी जालीदार बुनाई - पानी का बहाव कभी नहीं रुकता',
      '8 तरह के स्प्रे मोड (तेज धार, फव्वारा, बारीक धुंध आदि)',
      'गर्मी और ठंड दोनों में टिकाऊ'
    ],
    specs: {
      'लंबाई': '50 फीट (15 मीटर)',
      'स्प्रे गन': '8 पैटर्न स्प्रे नोझल'
    }
  }
};
