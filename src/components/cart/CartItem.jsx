import { Link } from 'react-router-dom';
import ProductImage from '../common/ProductImage.jsx';
import QuantitySelector from '../product/QuantitySelector.jsx';
import { formatPrice } from '../../utils/format.js';
import { useCart } from '../../context/CartContext.jsx';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <Link to={`/product/${item.slug}`} className="cart-item__media">
        <ProductImage image={item.image} alt={item.name} width={160} height={200} />
      </Link>
      <div className="cart-item__details">
        <Link to={`/product/${item.slug}`} className="cart-item__name">
          {item.name}
        </Link>
        <p className="cart-item__meta">
          {item.size && `Size: ${item.size}`}
          {item.size && item.color && ' · '}
          {item.color && `Colour: ${item.color}`}
        </p>
        <p className="cart-item__price">{formatPrice(item.price)}</p>
        <div className="cart-item__row">
          <QuantitySelector quantity={item.quantity} onChange={(q) => updateQuantity(item.key, q)} />
          <button type="button" className="cart-item__remove" onClick={() => removeFromCart(item.key)}>
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item__line-total">{formatPrice(item.price * item.quantity)}</div>
    </div>
  );
}
