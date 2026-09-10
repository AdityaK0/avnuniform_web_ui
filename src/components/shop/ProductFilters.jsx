import { categories } from '../../data/categories.js';
import { PRICE_BANDS } from '../../data/priceBands.js';

export default function ProductFilters({
  isOpen,
  onClose,
  selectedCategories,
  onToggleCategory,
  priceBandIndex,
  onSelectPriceBand,
  onReset,
}) {
  return (
    <>
      {isOpen && <div className="filter-drawer-overlay" onClick={onClose} />}
      <aside className={`product-filters ${isOpen ? 'is-open' : ''}`} aria-label="Product filters">
        <div className="product-filters__header">
          <h2>Filters</h2>
          <button type="button" className="product-filters__close" onClick={onClose} aria-label="Close filters">
            ×
          </button>
        </div>

        <div className="product-filters__group">
          <h3>Category</h3>
          <ul>
            {categories
              .filter((c) => c.showOnHome)
              .map((c) => (
                <li key={c.slug}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(c.slug)}
                      onChange={() => onToggleCategory(c.slug)}
                    />
                    {c.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>

        <div className="product-filters__group">
          <h3>Price</h3>
          <ul>
            {PRICE_BANDS.map((band, i) => (
              <li key={band.label}>
                <label>
                  <input
                    type="radio"
                    name="price-band"
                    checked={priceBandIndex === i}
                    onChange={() => onSelectPriceBand(i)}
                  />
                  {band.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button type="button" className="btn btn--outline btn--full" onClick={onReset}>
          Reset Filters
        </button>

        <button type="button" className="btn btn--dark btn--full product-filters__apply" onClick={onClose}>
          View Results
        </button>
      </aside>
    </>
  );
}
