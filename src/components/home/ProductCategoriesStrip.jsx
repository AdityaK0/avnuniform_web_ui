import { Link } from 'react-router-dom';

const ITEMS = [
  { label: 'Promotional T-Shirts', to: '/category/promotional-tshirts' },
  { label: 'Polo T-Shirts', to: '/category/polo-tshirts' },
  { label: 'Dry-Fit', to: '/product/dry-fit' },
  { label: 'Corporate Uniforms', to: '/category/corporate-uniforms' },
  { label: 'Hotel Uniforms', to: '/category/hotel-uniforms' },
  { label: 'Industrial Workwear', to: '/category/industrial-workwear' },
  { label: 'Caps', to: '/category/caps-accessories' },
];

export default function ProductCategoriesStrip() {
  return (
    <section className="categories-strip" aria-label="Browse product categories">
      <ul>
        {ITEMS.map((item) => (
          <li key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
