// Category taxonomy used for navigation, the homepage category grid,
// and product filtering. `match` lists the product category tags a
// given catalog page should include (see src/data/products.js).
export const categories = [
  {
    slug: 'corporate-uniforms',
    name: 'Corporate Uniforms',
    shortName: 'Corporate',
    match: ['corporate-uniforms'],
    description:
      'Polo shirts, shirts and formal wear designed to give office and front-desk teams a consistent, professional look.',
    showOnHome: true,
  },
  {
    slug: 'hotel-uniforms',
    name: 'Hotel Uniforms',
    shortName: 'Hotel',
    match: ['hotel-uniforms'],
    description:
      'Uniform sets for housekeeping, F&B and front-office staff, built for long shifts and a polished guest-facing appearance.',
    showOnHome: true,
  },
  {
    slug: 'industrial-workwear',
    name: 'Industrial Workwear',
    shortName: 'Workwear',
    match: ['industrial-workwear'],
    description:
      'Durable boiler suits and workwear for factory, warehouse and field teams where safety and toughness matter.',
    showOnHome: true,
  },
  {
    slug: 'promotional-tshirts',
    name: 'Promotional T-Shirts',
    shortName: 'Promo Tees',
    match: ['promotional-tshirts'],
    description:
      'Cost-effective round-neck and crew tees for events, campaigns, staff giveaways and branded merchandise.',
    showOnHome: true,
  },
  {
    slug: 'polo-tshirts',
    name: 'Polo T-Shirts',
    shortName: 'Polo Tees',
    match: ['polo-tshirts'],
    description:
      'Collared polo T-shirts in multiple fabrics and GSM options, suited for corporate branding and team wear.',
    showOnHome: true,
  },
  {
    slug: 'caps-accessories',
    name: 'Caps & Accessories',
    shortName: 'Caps',
    match: ['caps-accessories'],
    description:
      'Branded caps and small accessories that complete a uniform or promotional apparel kit.',
    showOnHome: true,
  },
  {
    slug: 'promotional-apparel',
    name: 'Promotional Apparel',
    shortName: 'Promotional',
    match: ['promotional-tshirts', 'polo-tshirts', 'caps-accessories'],
    description:
      'A complete range of promotional apparel — tees, polos and caps — for campaigns, events and brand activations.',
    showOnHome: false,
  },
];

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);

export const homeCategories = categories.filter((c) => c.showOnHome);
