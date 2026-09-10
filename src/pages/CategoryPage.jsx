import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getCategoryBySlug } from '../data/categories.js';
import { getProductsByCategory } from '../data/products.js';
import { PRICE_BANDS } from '../data/priceBands.js';
import { business } from '../data/business.js';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name (A-Z)' },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const [sort, setSort] = useState('featured');
  const [priceBandIndex, setPriceBandIndex] = useState(0);

  const products = useMemo(() => {
    if (!category) return [];
    let list = getProductsByCategory(category.match);
    const band = PRICE_BANDS[priceBandIndex];
    list = list.filter((p) => p.price >= band.min && p.price <= band.max);

    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [category, sort, priceBandIndex]);

  if (!category) {
    return (
      <div className="page-header">
        <EmptyState
          title="Category not found"
          message="This uniform category doesn't exist or may have moved."
          actionLabel="Browse All Products"
          actionTo="/shop"
        />
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${category.name} | AVN Uniforms`}
        description={`${category.description} Explore ${category.name.toLowerCase()} from AVN Uniforms, Ahmedabad.`}
        path={`/category/${category.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: business.website },
            { '@type': 'ListItem', position: 2, name: category.name, item: `${business.website}/category/${category.slug}` },
          ],
        }}
        jsonLdId="category"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: category.name }]} />
        <h1>{category.name}</h1>
        <p className="page-header__description">{category.description}</p>
      </div>

      <div className="category-toolbar">
        <p className="shop-toolbar__count">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
        <div className="category-toolbar__controls">
          <label>
            <span className="sr-only">Filter by price</span>
            <select value={priceBandIndex} onChange={(e) => setPriceBandIndex(Number(e.target.value))}>
              {PRICE_BANDS.map((band, i) => (
                <option key={band.label} value={i}>
                  {band.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <ProductGrid products={products} />
    </>
  );
}
