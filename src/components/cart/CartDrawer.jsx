import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../../context/CartContext.jsx';
import ProductImage from '../common/ProductImage.jsx';
import { formatPrice } from '../../utils/format.js';
import EmptyState from '../common/EmptyState.jsx';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [isOpen]);

  // Portalled to <body> — see MobileNav.jsx for why (backdrop-filter on
  // .site-header would otherwise trap this fixed-position drawer).
  return createPortal(
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <aside
        className={`cart-drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="cart-drawer__header">
          <h2>Your Cart ({items.length})</h2>
          <button type="button" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <EmptyState
              title="Your cart is empty"
              message="Browse our uniforms and apparel to add items to your cart."
              actionLabel="Shop Now"
              actionTo="/shop"
            />
          </div>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.key}>
                  <ProductImage image={item.image} alt={item.name} width={80} height={100} />
                  <div>
                    <p className="cart-drawer__item-name">{item.name}</p>
                    <p className="cart-drawer__item-meta">
                      Qty {item.quantity} · {formatPrice(item.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-drawer__footer">
              <div className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <Link to="/cart" className="btn btn--dark btn--full" onClick={onClose}>
                View Cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </>,
    document.body
  );
}
