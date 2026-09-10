import { useWishlist } from '../../context/WishlistContext.jsx';

export default function WishlistButton({ product, className = '' }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const active = isWishlisted(product.id);

  return (
    <button
      type="button"
      className={`wishlist-btn ${active ? 'is-active' : ''} ${className}`.trim()}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-pressed={active}
      aria-label={active ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M12 20.5s-7.5-4.6-10.1-9.1C.4 8.6 1.4 5 4.6 3.9c2-.7 4 .1 5.3 1.8.5.6 1.1.6 1.6 0 1.3-1.7 3.3-2.5 5.3-1.8 3.2 1.1 4.2 4.7 2.7 7.5C19.5 15.9 12 20.5 12 20.5z"
          fill={active ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
