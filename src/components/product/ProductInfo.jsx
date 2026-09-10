import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuantitySelector from './QuantitySelector.jsx';
import WishlistButton from '../common/WishlistButton.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { formatPrice } from '../../utils/format.js';

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState(product.sizes?.[0]);
  const [color, setColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    addToCart(product, { size, color, quantity });
    navigate('/cart');
  };

  return (
    <div className="product-info">
      <h1 className="product-info__name">{product.name}</h1>
      {product.gsm && <p className="product-info__gsm">{product.gsm} GSM · {product.fabric}</p>}
      <p className="product-info__price">{formatPrice(product.price)}</p>
      <p className="product-info__desc">{product.shortDescription}</p>

      {product.sizes?.length > 1 && (
        <div className="option-group">
          <span className="option-group__label">Size</span>
          <div className="option-group__options">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`option-chip ${size === s ? 'is-selected' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.colors?.length > 0 && (
        <div className="option-group">
          <span className="option-group__label">Colour</span>
          <div className="option-group__options">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                className={`option-chip ${color === c ? 'is-selected' : ''}`}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="option-group">
        <span className="option-group__label">Quantity</span>
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
      </div>

      <div className="product-info__actions">
        <button type="button" className="btn btn--outline" onClick={() => addToCart(product, { size, color, quantity })}>
          Add to Cart
        </button>
        <button type="button" className="btn btn--dark" onClick={handleBuyNow}>
          Buy Now
        </button>
        <WishlistButton product={product} className="product-info__wishlist" />
      </div>

      <Link to="/bulk-order" state={{ productName: product.name }} className="product-info__bulk-link">
        Need this in bulk? Request a Bulk Quote →
      </Link>
    </div>
  );
}
