import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal.jsx';
import ProductImage from '../common/ProductImage.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import WishlistButton from '../common/WishlistButton.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { formatPrice } from '../../utils/format.js';

export default function QuickView({ product, onClose }) {
  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      title={product ? `Quick view: ${product.name}` : 'Quick view'}
      className="quickview"
    >
      {/* Keyed by product id so size/quantity state resets whenever a different product opens. */}
      {product && <QuickViewBody key={product.id} product={product} onClose={onClose} />}
    </Modal>
  );
}

function QuickViewBody({ product, onClose }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quickview__grid">
      <div className="quickview__media">
        <ProductImage
          image={product.images[0]}
          alt={`AVN Uniforms ${product.name}`}
          width={600}
          height={750}
          loading="eager"
        />
      </div>
      <div className="quickview__info">
        <h2>{product.name}</h2>
        {product.gsm && <p className="quickview__gsm">{product.gsm} GSM · {product.fabric}</p>}
        <p className="quickview__price">{formatPrice(product.price)}</p>
        <p className="quickview__desc">{product.shortDescription}</p>

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

        <div className="option-group">
          <span className="option-group__label">Quantity</span>
          <QuantitySelector quantity={quantity} onChange={setQuantity} />
        </div>

        <div className="quickview__actions">
          <button
            type="button"
            className="btn btn--dark"
            onClick={() => {
              addToCart(product, { size, quantity });
              onClose();
            }}
          >
            Add to Cart
          </button>
          <WishlistButton product={product} className="quickview__wishlist" />
        </div>

        <Link to={`/product/${product.slug}`} className="quickview__link" onClick={onClose}>
          View full details →
        </Link>
      </div>
    </div>
  );
}
