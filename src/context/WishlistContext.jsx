import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { useToast } from './ToastContext.jsx';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useLocalStorage('avn_wishlist', []);
  const { showToast } = useToast();

  const isWishlisted = (productId) => items.some((i) => i.productId === productId);

  const toggleWishlist = (product) => {
    const exists = items.some((i) => i.productId === product.id);

    if (exists) {
      setItems((prev) => prev.filter((i) => i.productId !== product.id));
      showToast(`${product.shortName || product.name} removed from wishlist`);
      return;
    }

    setItems((prev) => [
      ...prev,
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        gsm: product.gsm,
        image: product.images?.[0] || null,
      },
    ]);
    showToast(`${product.shortName || product.name} added to wishlist`);
  };

  const removeFromWishlist = (productId) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const value = { items, isWishlisted, toggleWishlist, removeFromWishlist };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
