import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';

export default function MobileBottomNav() {
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  return (
    <nav className="mobile-bottom-nav" aria-label="Quick navigation">
      <NavLink to="/" end>
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink to="/shop">
        <ShopIcon />
        <span>Shop</span>
      </NavLink>
      <NavLink to="/wishlist">
        <span className="mobile-bottom-nav__icon-wrap">
          <WishlistIcon />
          {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
        </span>
        <span>Wishlist</span>
      </NavLink>
      <NavLink to="/cart">
        <span className="mobile-bottom-nav__icon-wrap">
          <CartIcon />
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </span>
        <span>Cart</span>
      </NavLink>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function WishlistIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M12 20.5s-7.5-4.6-10.1-9.1C.4 8.6 1.4 5 4.6 3.9c2-.7 4 .1 5.3 1.8.5.6 1.1.6 1.6 0 1.3-1.7 3.3-2.5 5.3-1.8 3.2 1.1 4.2 4.7 2.7 7.5C19.5 15.9 12 20.5 12 20.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
