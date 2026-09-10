import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import ProductImage from '../components/common/ProductImage.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { getProductBySlug } from '../data/products.js';
import { formatPrice } from '../utils/format.js';

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      <Seo
        title="Your Wishlist | AVN Uniforms"
        description="Uniforms and apparel you've saved for later from AVN Uniforms."
        path="/wishlist"
        noindex
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Wishlist' }]} />
        <h1>Your Wishlist</h1>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="Your wishlist is empty"
          message="Save products you're interested in so you can find them again easily."
          actionLabel="Browse Products"
          actionTo="/shop"
        />
      ) : (
        <div className="wishlist-grid">
          {items.map((item) => (
            <article key={item.productId} className="wishlist-card">
              <Link to={`/product/${item.slug}`}>
                <ProductImage image={item.image} alt={item.name} width={400} height={500} />
              </Link>
              <div className="wishlist-card__body">
                <Link to={`/product/${item.slug}`} className="wishlist-card__name">
                  {item.name}
                </Link>
                {item.gsm && <p className="wishlist-card__gsm">{item.gsm} GSM</p>}
                <p className="wishlist-card__price">{formatPrice(item.price)}</p>
                <div className="wishlist-card__actions">
                  <button
                    type="button"
                    className="btn btn--small btn--dark"
                    onClick={() => {
                      const product = getProductBySlug(item.slug);
                      if (product) addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="btn btn--small btn--outline"
                    onClick={() => removeFromWishlist(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
