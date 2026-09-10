import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { useToast } from './ToastContext.jsx';

const CartContext = createContext(null);

function lineKey(productId, size, color) {
  return `${productId}__${size || 'na'}__${color || 'na'}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('avn_cart', []);
  const { showToast } = useToast();

  const addToCart = (product, { size, color, quantity = 1 } = {}) => {
    setItems((prev) => {
      const key = lineKey(product.id, size, color);
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          gsm: product.gsm,
          image: product.images?.[0] || null,
          size: size || product.sizes?.[0] || null,
          color: color || product.colors?.[0] || null,
          quantity,
        },
      ];
    });
    showToast(`${product.shortName || product.name} added to cart`);
  };

  const removeFromCart = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  };

  const updateQuantity = (key, quantity) => {
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, quantity: Math.max(1, quantity) } : i))
    );
  };

  const clearCart = () => setItems([]);

  const { subtotal, totalItems } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        subtotal: acc.subtotal + i.price * i.quantity,
        totalItems: acc.totalItems + i.quantity,
      }),
      { subtotal: 0, totalItems: 0 }
    );
  }, [items]);

  const value = { items, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
