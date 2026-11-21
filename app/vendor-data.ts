export type VendorProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  oldPrice?: number;
  dimensions: string;
  colors: string[];
  material: string;
  style: "Traditional" | "Modern" | "Afro-modern";
  availability: "In stock" | "Made to order" | "Out of stock";
  image: string;
};

export type Vendor = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  category: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  premium: boolean;
  logo: string;
  cover: string;
  phone: string;
  email: string;
  hours: string;
  instagram: string;
  offer: string;
  products: VendorProduct[];
};

export const vendors: Vendor[] = [
  {
    slug: "addis-wood-studio",
    name: "Addis Wood Studio",
    tagline: "Made slowly. Made to last.",
    description: "A family-run Addis workshop bringing locally sourced hardwood and thoughtful contemporary design together. Each piece is built by hand by our team of Ethiopian craftspeople.",
    location: "Bole, Addis Ababa",
    category: "Furniture & woodworking",
    rating: 4.9,
    reviewCount: 48,
    verified: true,
    premium: true,
    logo: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 911 234 567",
    email: "hello@addiswood.example",
    hours: "Mon–Sat, 9:00 AM–6:00 PM",
    instagram: "@addiswoodstudio",
    offer: "Complimentary delivery in Addis on orders over 25,000 ETB",
    products: [
      { id: "coffee-table", name: "Selam solid wood coffee table", description: "A hand-finished coffee table with rounded edges and a warm, natural grain.", category: "Tables & desks", price: 18500, dimensions: "120 × 60 × 42 cm", colors: ["Natural oak", "Dark walnut"], material: "Locally sourced hardwood", style: "Modern", availability: "In stock", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=85" },
      { id: "woven-chair", name: "Woven lounge chair", description: "A relaxed reading chair pairing a solid timber frame with a handwoven seat.", category: "Sofas & chairs", price: 22400, dimensions: "72 × 68 × 78 cm", colors: ["Honey", "Ebony"], material: "Hardwood and woven cotton", style: "Afro-modern", availability: "Made to order", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85" },
      { id: "bed-frame", name: "Haven oak bed frame", description: "A sturdy, minimal bed frame with a softly curved headboard.", category: "Beds & mattresses", price: 46500, oldPrice: 52000, dimensions: "Queen: 160 × 200 cm", colors: ["Natural oak"], material: "Solid oak", style: "Modern", availability: "In stock", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85" },
      { id: "sideboard", name: "Mesob storage sideboard", description: "Inspired by Ethiopian woven forms, with generous closed storage.", category: "Wardrobes & storage", price: 38500, dimensions: "150 × 42 × 78 cm", colors: ["Natural", "Cocoa"], material: "Hardwood and cane", style: "Traditional", availability: "Made to order", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "habesha-home",
    name: "Habesha Home",
    tagline: "A little heritage in every room.",
    description: "Textiles, objects and home comforts inspired by the color and craft traditions of Ethiopia. We work directly with independent makers and weaving collectives.",
    location: "Piazza, Addis Ababa",
    category: "Home decor & textiles",
    rating: 4.8,
    reviewCount: 32,
    verified: true,
    premium: false,
    logo: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 922 345 678",
    email: "hello@habeshahome.example",
    hours: "Mon–Sat, 10:00 AM–7:00 PM",
    instagram: "@habeshahome",
    offer: "Free gift wrapping on handmade homeware",
    products: [
      { id: "accent-cushion", name: "Handwoven accent cushion", description: "A colorful, handwoven cotton cushion cover made by local artisans.", category: "Home decoration", price: 1200, dimensions: "45 × 45 cm", colors: ["Multi"], material: "Handwoven cotton", style: "Traditional", availability: "In stock", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85" },
      { id: "woven-rug", name: "Tana woven floor rug", description: "A soft flat-weave rug with a geometric pattern inspired by the highlands.", category: "Curtains & carpets", price: 6200, dimensions: "120 × 180 cm", colors: ["Terracotta", "Indigo"], material: "Cotton and wool", style: "Traditional", availability: "In stock", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85" },
      { id: "clay-vase", name: "Hand-shaped clay vase", description: "A sculptural vase made and finished by hand in Addis Ababa.", category: "Home decoration", price: 1850, dimensions: "24 cm high", colors: ["Earth"], material: "Local clay", style: "Afro-modern", availability: "In stock", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "mekdes-furniture",
    name: "Mekdes Furniture",
    tagline: "Comfort, crafted around you.",
    description: "Made-to-measure sofas and living room furniture designed for real homes. Choose your fabric, size and finish with help from our in-store team.",
    location: "Sar Bet, Addis Ababa",
    category: "Furniture & upholstery",
    rating: 4.7,
    reviewCount: 26,
    verified: true,
    premium: true,
    logo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 933 456 789",
    email: "sales@mekdesfurniture.example",
    hours: "Mon–Sat, 8:30 AM–6:00 PM",
    instagram: "@mekdesfurniture",
    offer: "Save 10% on selected made-to-order sofas this month",
    products: [
      { id: "green-sofa", name: "Mimi three-seat sofa", description: "A deep, comfortable sofa upholstered in a durable, easy-care fabric.", category: "Sofas & chairs", price: 68500, dimensions: "220 × 92 × 82 cm", colors: ["Forest", "Sand", "Charcoal"], material: "Kiln-dried wood and woven fabric", style: "Modern", availability: "Made to order", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85" },
      { id: "dining-table", name: "Aster family dining table", description: "A generous dining table for gathering, crafted with a solid timber top.", category: "Tables & desks", price: 42500, dimensions: "180 × 90 × 76 cm", colors: ["Walnut", "Natural"], material: "Solid wood", style: "Modern", availability: "In stock", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85" },
      { id: "headboard", name: "Softline upholstered headboard", description: "A softly padded statement headboard, available in custom fabrics.", category: "Beds & mattresses", price: 21500, dimensions: "Queen size", colors: ["Sand", "Olive", "Clay"], material: "Timber, foam and upholstery fabric", style: "Modern", availability: "Made to order", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "lidet-lighting",
    name: "Lidet Lighting",
    tagline: "Light that feels like home.",
    description: "Independent lighting designers creating warm, modern fixtures in small batches. Our pieces bring natural materials and a little Ethiopian character to every room.",
    location: "Kazanchis, Addis Ababa",
    category: "Lighting & interiors",
    rating: 4.9,
    reviewCount: 19,
    verified: true,
    premium: false,
    logo: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 911 567 890",
    email: "hello@lidetlighting.example",
    hours: "Mon–Sat, 9:00 AM–5:30 PM",
    instagram: "@lidetlighting",
    offer: "Complimentary bulb set with every pendant light",
    products: [
      { id: "woven-pendant", name: "Woven pendant light", description: "A softly glowing pendant shade woven by hand from natural fibers.", category: "Lighting", price: 7800, dimensions: "38 cm diameter", colors: ["Natural", "Cocoa"], material: "Woven grass and metal", style: "Afro-modern", availability: "Made to order", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85" },
      { id: "clay-table-lamp", name: "Abyssinia clay table lamp", description: "A sculptural locally made clay base paired with a warm linen shade.", category: "Lighting", price: 5400, dimensions: "48 cm high", colors: ["Earth", "Ivory"], material: "Clay, linen and brass", style: "Traditional", availability: "In stock", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "tana-textile-house",
    name: "Tana Textile House",
    tagline: "Textiles woven with meaning.",
    description: "A collective of weavers making contemporary cushions, throws and table linens using traditional handloom techniques and thoughtfully chosen natural fibers.",
    location: "Adama, Oromia",
    category: "Home decor & textiles",
    rating: 4.8,
    reviewCount: 37,
    verified: true,
    premium: false,
    logo: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 922 678 901",
    email: "orders@tanatextile.example",
    hours: "Mon–Sat, 9:00 AM–5:00 PM",
    instagram: "@tanatextilehouse",
    offer: "Pair two handwoven cushion covers and save 5%",
    products: [
      { id: "woven-throw", name: "Lake Tana handwoven throw", description: "A soft cotton throw with a subtle pattern inspired by the Blue Nile.", category: "Home decoration", price: 4600, dimensions: "130 × 180 cm", colors: ["Indigo", "Natural"], material: "Handwoven cotton", style: "Traditional", availability: "In stock", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" },
      { id: "table-runner", name: "Meklit table runner", description: "A handloom runner that brings color and craft to a dining table.", category: "Home decoration", price: 1850, dimensions: "40 × 160 cm", colors: ["Terracotta", "Natural"], material: "Cotton and linen", style: "Afro-modern", availability: "In stock", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "eden-kitchen-studio",
    name: "Eden Kitchen Studio",
    tagline: "Made for everyday gatherings.",
    description: "Locally made kitchen and dining furniture designed around how Ethiopian families cook, gather and share a meal.",
    location: "Megenagna, Addis Ababa",
    category: "Kitchen & dining furniture",
    rating: 4.6,
    reviewCount: 22,
    verified: true,
    premium: true,
    logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 933 789 012",
    email: "studio@edenkitchen.example",
    hours: "Mon–Sat, 8:30 AM–6:00 PM",
    instagram: "@edenkitchenstudio",
    offer: "Free measurement visit for custom kitchen orders",
    products: [
      { id: "dining-set", name: "Family gathering dining set", description: "A solid wood table and four chairs designed for shared meals.", category: "Kitchen furniture", price: 78500, dimensions: "Table: 160 × 85 × 76 cm", colors: ["Natural", "Walnut"], material: "Solid hardwood", style: "Modern", availability: "Made to order", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" },
      { id: "spice-cabinet", name: "Berbere pantry cabinet", description: "A practical compact cabinet with adjustable shelves and spice drawers.", category: "Wardrobes & storage", price: 16900, dimensions: "80 × 40 × 170 cm", colors: ["Natural"], material: "Hardwood and plywood", style: "Modern", availability: "In stock", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "guzo-carpet-collective",
    name: "Guzo Carpet Collective",
    tagline: "Grounded in craft, made for today.",
    description: "A small artisan collective creating durable rugs and floor coverings with locally sourced wool and designs inspired by the landscapes of Ethiopia.",
    location: "Lalibela, Amhara",
    category: "Rugs & carpets",
    rating: 5.0,
    reviewCount: 14,
    verified: true,
    premium: false,
    logo: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 911 890 123",
    email: "hello@guzocarpet.example",
    hours: "Mon–Fri, 9:00 AM–5:00 PM",
    instagram: "@guzocarpetcollective",
    offer: "Custom sizing available at no additional design fee",
    products: [
      { id: "simien-rug", name: "Simien highland wool rug", description: "A dense hand-knotted wool rug inspired by highland textures and colors.", category: "Curtains & carpets", price: 24500, dimensions: "160 × 230 cm", colors: ["Indigo", "Sand", "Rust"], material: "Hand-spun Ethiopian wool", style: "Traditional", availability: "Made to order", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85" },
      { id: "woven-runner", name: "Guzo hall runner", description: "A narrow woven runner built to bring color and warmth to a hallway.", category: "Curtains & carpets", price: 7900, dimensions: "70 × 200 cm", colors: ["Rust", "Natural"], material: "Wool and cotton", style: "Afro-modern", availability: "In stock", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    slug: "kora-living",
    name: "Kora Living",
    tagline: "Small objects, meaningful spaces.",
    description: "A new independent homeware studio curating locally crafted ceramics, baskets and decorative objects from makers across Ethiopia.",
    location: "Addis Ababa",
    category: "Home decor & accessories",
    rating: 4.7,
    reviewCount: 8,
    verified: false,
    premium: false,
    logo: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=240&q=85",
    cover: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1800&q=90",
    phone: "+251 922 890 123",
    email: "hello@koraliving.example",
    hours: "Online shop, daily",
    instagram: "@koraliving",
    offer: "New maker collection arriving soon",
    products: [
      { id: "handmade-vase", name: "Handmade earthware vase", description: "A one-of-a-kind hand-shaped vase finished with a natural clay glaze.", category: "Home decoration", price: 2400, dimensions: "26 cm high", colors: ["Earth"], material: "Hand-shaped local clay", style: "Afro-modern", availability: "In stock", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85" },
      { id: "woven-basket", name: "Sisal storage basket", description: "A sturdy woven basket for throws, toys or everyday storage.", category: "Home decoration", price: 1750, dimensions: "35 cm diameter", colors: ["Natural", "Multi"], material: "Sisal and cotton", style: "Traditional", availability: "In stock", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85" }
    ]
  }
];

export const approvedVendors = vendors.filter((vendor) => vendor.verified);

export const formatETB = (amount: number) => `${amount.toLocaleString("en-ET")} ETB`;
