import { Link } from 'react-router-dom';
import ProductImage from '../common/ProductImage.jsx';
import WishlistButton from '../common/WishlistButton.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { formatPrice } from '../../utils/format.js';

export default function ProductCard({ product, onQuickView, loading = 'lazy' }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${product.slug}`} className="product-card__media-link">
          <ProductImage
            image={product.images[0]}
            alt={`AVN Uniforms ${product.name}${product.gsm ? ` ${product.gsm} GSM` : ''}`}
            width={600}
            height={750}
            loading={loading}
          />
        </Link>
        <WishlistButton product={product} className="product-card__wishlist" />
        <button
          type="button"
          className="product-card__quickview"
          onClick={() => onQuickView(product)}
        >
          Quick View
        </button>
      </div>
      <div className="product-card__body">
        <Link to={`/product/${product.slug}`} className="product-card__name">
          {product.name}
        </Link>
        {product.gsm && <p className="product-card__gsm">{product.gsm} GSM</p>}
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <button
            type="button"
            className="product-card__add"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            title="Add to cart"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M6 8h12l-1 12H7L6 8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M9.5 17V12M14.5 17V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
