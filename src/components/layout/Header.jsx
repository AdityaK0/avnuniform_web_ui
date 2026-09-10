import { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav.jsx';
import MobileNav from './MobileNav.jsx';
import SearchOverlay from '../search/SearchOverlay.jsx';
import CartDrawer from '../cart/CartDrawer.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInstance, setSearchInstance] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const openSearch = () => {
    setSearchInstance((n) => n + 1);
    setSearchOpen(true);
  };
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { showToast } = useToast();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__hamburger"
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="wordmark site-header__logo">
          AVN <span>Uniforms</span>
        </Link>

        <DesktopNav />

        <div className="site-header__icons">
          <button type="button" aria-label="Search" onClick={openSearch}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            className="site-header__icon--account"
            aria-label="Account"
            onClick={() => showToast('Customer accounts are coming soon — contact us for order support.')}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <Link to="/wishlist" aria-label={`Wishlist (${wishlistItems.length} items)`} className="site-header__icon--wishlist">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M12 20.5s-7.5-4.6-10.1-9.1C.4 8.6 1.4 5 4.6 3.9c2-.7 4 .1 5.3 1.8.5.6 1.1.6 1.6 0 1.3-1.7 3.3-2.5 5.3-1.8 3.2 1.1 4.2 4.7 2.7 7.5C19.5 15.9 12 20.5 12 20.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
          </Link>
          <button
            type="button"
            aria-label={`Cart (${totalItems} items)`}
            onClick={() => setCartOpen(true)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M6 8h12l-1 12H7L6 8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </button>
        </div>
      </div>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <SearchOverlay key={searchInstance} isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
