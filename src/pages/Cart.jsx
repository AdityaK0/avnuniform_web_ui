import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import CartItem from '../components/cart/CartItem.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/format.js';

export default function Cart() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();

  const handleInquiry = () => {
    const summary = items
      .map((i) => `${i.name} (${i.size || 'Free Size'}${i.color ? `, ${i.color}` : ''}) x${i.quantity}`)
      .join('\n');
    navigate('/bulk-order', { state: { cartSummary: summary } });
  };

  return (
    <>
      <Seo
        title="Your Cart | AVN Uniforms"
        description="Review the uniforms and apparel in your AVN Uniforms cart before sending an inquiry."
        path="/cart"
        noindex
      />

      <div className="page-header">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
        <h1>Your Cart</h1>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="Your cart is empty"
          message="Browse our uniforms and apparel to add items to your cart."
          actionLabel="Continue Shopping"
          actionTo="/shop"
        />
      ) : (
        <div className="cart-page">
          <div className="cart-page__items">
            {items.map((item) => (
              <CartItem key={item.key} item={item} />
            ))}
          </div>

          <aside className="cart-page__summary">
            <h2>Order Summary</h2>
            <div className="cart-page__row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="cart-page__note">
              Final pricing for bulk and customized orders is confirmed after inquiry, based on
              quantity, fabric and branding requirements.
            </p>
            <div className="cart-page__row cart-page__row--total">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button type="button" className="btn btn--dark btn--full" onClick={handleInquiry}>
              Proceed to Inquiry
            </button>
            <Link to="/shop" className="btn btn--outline btn--full">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}
