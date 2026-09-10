// Local product catalog. This is the single source of truth for
// catalog data today. Every consumer (pages/components) reads from
// here via the helper functions below, so swapping this module for
// an API-backed fetch later only requires changing this file.
//
// Image entries are placeholder descriptors, not real file paths —
// see src/utils/placeholderImage.js for how they are rendered as
// clearly-labelled placeholder graphics until real product
// photography is available.

const COLORS = {
  classic: ['White', 'Black', 'Navy Blue', 'Bottle Green', 'Maroon', 'Royal Blue', 'Grey Melange'],
  hotel: ['Black', 'Maroon', 'Charcoal Grey', 'White'],
  industrial: ['Navy Blue', 'Grey', 'Olive Green'],
  cap: ['Black', 'Navy Blue', 'White', 'Bottle Green'],
};

const SIZES = {
  apparel: ['S', 'M', 'L', 'XL', 'XXL'],
  boilerSuit: ['M', 'L', 'XL', 'XXL', '3XL'],
  cap: ['Free Size'],
};

export const products = [
  {
    id: 'p1',
    sku: 'AVN-PC-COTTON',
    slug: 'pc-cotton',
    name: 'PC Cotton Polo T-Shirt',
    shortName: 'PC Cotton',
    categories: ['polo-tshirts', 'corporate-uniforms', 'promotional-tshirts'],
    price: 350,
    gsm: '200-220',
    fabric: 'PC Cotton (Polyester-Cotton Blend)',
    images: [
      { label: 'PC Cotton Polo T-Shirt — Front', tone: 'primary' },
      { label: 'PC Cotton Polo T-Shirt — Back', tone: 'secondary' },
      { label: 'PC Cotton Polo T-Shirt — Collar Detail', tone: 'muted' },
    ],
    shortDescription:
      'A durable polyester-cotton polo built for everyday corporate and promotional wear.',
    description:
      'Our PC Cotton polo T-shirt blends the breathability of cotton with the durability of polyester, making it a dependable choice for corporate uniforms and promotional wear. The 200-220 GSM fabric holds its shape wash after wash and takes embroidery and printing well for logo branding.',
    specifications: [
      { label: 'Fabric', value: 'PC Cotton (Polyester-Cotton Blend)' },
      { label: 'GSM', value: '200-220 GSM' },
      { label: 'Collar', value: 'Ribbed polo collar' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Corporate offices', 'Promotional campaigns', 'Staff teams', 'Events'],
    careInstructions: [
      'Machine wash cold with similar colors',
      'Do not bleach',
      'Tumble dry low or line dry',
      'Warm iron if needed, avoid ironing directly over prints',
    ],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p2',
    sku: 'AVN-SPUN-MATTY',
    slug: 'spun-matty',
    name: 'Spun Matty Polo T-Shirt',
    shortName: 'Spun Matty',
    categories: ['polo-tshirts', 'corporate-uniforms', 'promotional-tshirts'],
    price: 300,
    gsm: '200-220',
    fabric: 'Spun Matty',
    images: [
      { label: 'Spun Matty Polo T-Shirt — Front', tone: 'secondary' },
      { label: 'Spun Matty Polo T-Shirt — Back', tone: 'primary' },
    ],
    shortDescription: 'A matte-finish spun polyester polo offering strong colour retention for bulk orders.',
    description:
      'Spun Matty fabric gives this polo a soft, matte finish with good colour retention, making it a popular pick for bulk corporate and promotional orders. It is lightweight, easy to maintain and holds embroidery cleanly across sizes.',
    specifications: [
      { label: 'Fabric', value: 'Spun Matty (Spun Polyester)' },
      { label: 'GSM', value: '200-220 GSM' },
      { label: 'Collar', value: 'Ribbed polo collar' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Corporate offices', 'Promotional campaigns', 'Staff teams'],
    careInstructions: [
      'Machine wash cold',
      'Do not bleach',
      'Tumble dry low',
      'Cool iron only',
    ],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p3',
    sku: 'AVN-HONEY-COMB',
    slug: 'honey-comb',
    name: 'Honey Comb Polo T-Shirt',
    shortName: 'Honey Com',
    categories: ['polo-tshirts', 'promotional-tshirts'],
    price: 250,
    gsm: '180',
    fabric: 'Honeycomb Pique',
    images: [
      { label: 'Honey Comb Polo T-Shirt — Front', tone: 'muted' },
      { label: 'Honey Comb Polo T-Shirt — Fabric Weave', tone: 'secondary' },
    ],
    shortDescription: 'A textured honeycomb-weave polo that stays light and breathable through long shifts.',
    description:
      'The honeycomb weave gives this 180 GSM polo an airy, breathable structure, ideal for staff and promotional uniforms worn through long working hours. Its lighter weight makes it a comfortable, cost-effective option for larger team orders.',
    specifications: [
      { label: 'Fabric', value: 'Honeycomb Pique' },
      { label: 'GSM', value: '180 GSM' },
      { label: 'Collar', value: 'Ribbed polo collar' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Promotional campaigns', 'Staff teams', 'Events'],
    careInstructions: ['Machine wash cold', 'Do not bleach', 'Line dry recommended', 'Cool iron only'],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p4',
    sku: 'AVN-DRY-FIT',
    slug: 'dry-fit',
    name: 'Dry-Fit Performance T-Shirt',
    shortName: 'Dry-Fit',
    categories: ['polo-tshirts', 'promotional-tshirts', 'industrial-workwear'],
    price: 180,
    gsm: '180',
    fabric: 'Dry-Fit Polyester',
    images: [
      { label: 'Dry-Fit Performance T-Shirt — Front', tone: 'primary' },
      { label: 'Dry-Fit Performance T-Shirt — Back', tone: 'muted' },
    ],
    shortDescription: 'Moisture-wicking dry-fit fabric that suits active teams and outdoor field staff.',
    description:
      'Built from moisture-wicking dry-fit polyester, this T-shirt keeps teams cool and dry through active or outdoor work. At 180 GSM it is light enough for all-day wear while remaining durable for repeated washing.',
    specifications: [
      { label: 'Fabric', value: 'Dry-Fit Polyester' },
      { label: 'GSM', value: '180 GSM' },
      { label: 'Moisture Management', value: 'Quick-dry, moisture-wicking' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Field staff', 'Promotional campaigns', 'Events', 'Industrial teams'],
    careInstructions: ['Machine wash cold', 'Do not bleach', 'Drip dry', 'Do not iron print area'],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p5',
    sku: 'AVN-MICRO',
    slug: 'micro',
    name: 'Micro Polo T-Shirt',
    shortName: 'Micro',
    categories: ['polo-tshirts', 'promotional-tshirts'],
    price: 180,
    gsm: '180',
    fabric: 'Micro Polyester',
    images: [
      { label: 'Micro Polo T-Shirt — Front', tone: 'secondary' },
      { label: 'Micro Polo T-Shirt — Back', tone: 'primary' },
    ],
    shortDescription: 'A budget-friendly micro polyester polo for large-volume promotional orders.',
    description:
      'The Micro polo is a value-focused option built in micro polyester fabric, making it well suited for large-volume promotional and giveaway orders without compromising on a clean, presentable finish.',
    specifications: [
      { label: 'Fabric', value: 'Micro Polyester' },
      { label: 'GSM', value: '180 GSM' },
      { label: 'Collar', value: 'Ribbed polo collar' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Promotional campaigns', 'Events', 'Staff giveaways'],
    careInstructions: ['Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Cool iron only'],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p6',
    sku: 'AVN-CAP-01',
    slug: 'cap',
    name: 'Branded Uniform Cap',
    shortName: 'Cap',
    categories: ['caps-accessories', 'promotional-tshirts'],
    price: 100,
    gsm: null,
    fabric: 'Cotton Twill',
    images: [
      { label: 'Branded Uniform Cap — Front', tone: 'primary' },
      { label: 'Branded Uniform Cap — Side', tone: 'muted' },
    ],
    shortDescription: 'An adjustable cotton twill cap that completes a uniform or promotional kit.',
    description:
      'A simple, adjustable cotton twill cap designed to complement uniform sets or stand alone as promotional headwear. It is available in a free size with a rear strap adjuster and offers a clean surface for embroidery or printing.',
    specifications: [
      { label: 'Fabric', value: 'Cotton Twill' },
      { label: 'Closure', value: 'Adjustable rear strap' },
      { label: 'Size', value: 'Free size (adjustable)' },
    ],
    suitableFor: ['Corporate offices', 'Promotional campaigns', 'Industrial teams', 'Events'],
    careInstructions: ['Hand wash recommended', 'Do not bleach', 'Air dry only', 'Do not iron'],
    sizes: SIZES.cap,
    colors: COLORS.cap,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p7',
    sku: 'AVN-HOTEL-UNIFORM',
    slug: 'hotel-uniform',
    name: 'Hotel Staff Uniform Set',
    shortName: 'Hotel Uniform',
    categories: ['hotel-uniforms'],
    price: 500,
    gsm: null,
    fabric: 'Poly-Viscose Blend',
    images: [
      { label: 'Hotel Staff Uniform Set — Front', tone: 'primary' },
      { label: 'Hotel Staff Uniform Set — Detail', tone: 'secondary' },
    ],
    shortDescription: 'A tailored uniform set for front-office, F&B and housekeeping hotel staff.',
    description:
      'Designed for hospitality teams, this uniform set gives housekeeping, F&B and front-desk staff a neat, guest-ready appearance through long shifts. The poly-viscose blend is easy to maintain and holds a crisp finish between washes. Fabric, styling and finishing can be customised to match your property\'s dress code.',
    specifications: [
      { label: 'Fabric', value: 'Poly-Viscose Blend' },
      { label: 'Fit', value: 'Tailored, department-specific fit' },
      { label: 'Customization', value: 'Available on request' },
    ],
    suitableFor: ['Hotels', 'Restaurants', 'Hospitality teams', 'Front-office staff'],
    careInstructions: ['Dry clean or machine wash cold', 'Do not bleach', 'Warm iron', 'Store on hangers'],
    sizes: SIZES.apparel,
    colors: COLORS.hotel,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p8',
    sku: 'AVN-BOILER-SUIT',
    slug: 'boiler-suit',
    name: 'Industrial Boiler Suit',
    shortName: 'Boiler Suit',
    categories: ['industrial-workwear'],
    price: 1100,
    gsm: null,
    fabric: 'Heavy Duty Cotton Twill',
    images: [
      { label: 'Industrial Boiler Suit — Front', tone: 'muted' },
      { label: 'Industrial Boiler Suit — Back', tone: 'primary' },
    ],
    shortDescription: 'A full-body boiler suit built for factory and industrial floor work.',
    description:
      'This full-body boiler suit is built from heavy-duty cotton twill to stand up to factory and industrial floor conditions. Reinforced stitching and multiple utility pockets make it a practical, long-lasting workwear option for industrial teams.',
    specifications: [
      { label: 'Fabric', value: 'Heavy Duty Cotton Twill' },
      { label: 'Closure', value: 'Front zip with stud placket' },
      { label: 'Pockets', value: 'Multiple utility pockets' },
    ],
    suitableFor: ['Factories', 'Industrial teams', 'Warehouses', 'Field maintenance staff'],
    careInstructions: ['Machine wash cold', 'Do not bleach', 'Line dry', 'Warm iron if required'],
    sizes: SIZES.boilerSuit,
    colors: COLORS.industrial,
    featured: true,
    availability: 'InStock',
  },
  {
    id: 'p9',
    sku: 'AVN-PC-PQ-MATTY',
    slug: 'pc-pq-matty',
    name: 'PC PQ Matty Polo T-Shirt',
    shortName: 'PC PQ Matty',
    categories: ['polo-tshirts', 'corporate-uniforms', 'promotional-tshirts'],
    price: 300,
    gsm: '200-220',
    fabric: 'PC Pique Matty',
    images: [
      { label: 'PC PQ Matty Polo T-Shirt — Front', tone: 'secondary' },
      { label: 'PC PQ Matty Polo T-Shirt — Weave Detail', tone: 'muted' },
    ],
    shortDescription: 'A pique-weave polo with a matte finish, tailored for corporate branding.',
    description:
      'PC PQ Matty combines a pique weave with a matte surface finish, giving this polo a smart, structured look that works well for corporate branding. It is a strong middle-ground choice between comfort and a premium appearance.',
    specifications: [
      { label: 'Fabric', value: 'PC Pique Matty' },
      { label: 'GSM', value: '200-220 GSM' },
      { label: 'Collar', value: 'Ribbed polo collar' },
      { label: 'Sleeve', value: 'Half sleeve' },
      { label: 'Fit', value: 'Regular fit' },
    ],
    suitableFor: ['Corporate offices', 'Promotional campaigns', 'Staff teams'],
    careInstructions: ['Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Cool iron only'],
    sizes: SIZES.apparel,
    colors: COLORS.classic,
    featured: false,
    availability: 'InStock',
  },
];

export const getAllProducts = () => products;

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getProductsByCategory = (matchList) =>
  products.filter((p) => p.categories.some((c) => matchList.includes(c)));

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c)))
    .slice(0, limit);

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => {
    const haystack = [
      p.name,
      p.shortName,
      p.fabric,
      p.gsm ? `${p.gsm} gsm` : '',
      p.shortDescription,
      p.description,
      ...p.categories,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
};
