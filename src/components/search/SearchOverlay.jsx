import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../../data/products.js';
import { formatPrice } from '../../utils/format.js';
import ProductImage from '../common/ProductImage.jsx';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(t);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchProducts(query).slice(0, 8);

  const goToProduct = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const goToShopWithQuery = (e) => {
    e.preventDefault();
    onClose();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  };

  // Portalled to <body> — see MobileNav.jsx for why (backdrop-filter on
  // .site-header would otherwise trap this fixed-position overlay).
  return createPortal(
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products">
      <div className="search-overlay__bar">
        <form onSubmit={goToShopWithQuery} className="search-overlay__form">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search polos, caps, uniforms, GSM…"
            aria-label="Search products"
          />
        </form>
        <button type="button" className="search-overlay__close" onClick={onClose} aria-label="Close search">
          ×
        </button>
      </div>

      <div className="search-overlay__body">
        {query.trim() === '' && (
          <p className="search-overlay__hint">Try “polo”, “cap”, “hotel”, or “180 gsm”.</p>
        )}
        {query.trim() !== '' && results.length === 0 && (
          <p className="search-overlay__hint">No products matched “{query}”.</p>
        )}
        {results.length > 0 && (
          <ul className="search-overlay__results">
            {results.map((p) => (
              <li key={p.id}>
                <button type="button" onClick={() => goToProduct(p.slug)}>
                  <ProductImage image={p.images[0]} alt={p.name} width={80} height={100} />
                  <span className="search-overlay__result-info">
                    <span className="search-overlay__result-name">{p.name}</span>
                    <span className="search-overlay__result-meta">
                      {p.gsm ? `${p.gsm} GSM · ` : ''}
                      {formatPrice(p.price)}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
}
