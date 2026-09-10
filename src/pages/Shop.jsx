import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ProductFilters from '../components/shop/ProductFilters.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import { getAllProducts } from '../data/products.js';
import { PRICE_BANDS } from '../data/priceBands.js';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name (A-Z)' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [search, setSearch] = useState(initialQuery);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceBandIndex, setPriceBandIndex] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceBandIndex(0);
    setSearch('');
  };

  const products = useMemo(() => {
    let list = getAllProducts();
    const band = PRICE_BANDS[priceBandIndex];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) =>
        [p.name, p.fabric, p.gsm, ...p.categories].join(' ').toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length) {
      list = list.filter((p) => p.categories.some((c) => selectedCategories.includes(c)));
    }

    list = list.filter((p) => p.price >= band.min && p.price <= band.max);

    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  }, [search, selectedCategories, priceBandIndex, sort]);

  return (
    <>
      <Seo
        title="Uniforms & Promotional Apparel | AVN Uniforms"
        description="Browse corporate uniforms, hotel uniforms, industrial workwear, polo T-shirts, promotional T-shirts and caps from AVN Uniforms, Ahmedabad."
        path="/shop"
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />
        <h1>Shop All Uniforms &amp; Apparel</h1>
      </div>

      <div className="shop-layout">
        <ProductFilters
          isOpen={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          priceBandIndex={priceBandIndex}
          onSelectPriceBand={setPriceBandIndex}
          onReset={resetFilters}
        />

        <div className="shop-layout__main">
          <div className="shop-toolbar">
            <div className="shop-toolbar__search">
              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>
              <input
                id="shop-search"
                type="search"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="shop-toolbar__filter-toggle"
              onClick={() => setFiltersOpen(true)}
            >
              Filters
            </button>

            <p className="shop-toolbar__count">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>

            <label className="shop-toolbar__sort">
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

          <ProductGrid products={products} />
        </div>
      </div>
    </>
  );
}
